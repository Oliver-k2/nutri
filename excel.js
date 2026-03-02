// excel.js - Handles Excel/CSV Data I/O for the Meal Planner

function downloadTemplate() {
    // Defines the headers and a sample row for the CSV/Excel template
    const templateData = [
        ["메뉴명", "구분", "가격(원)", "제철(월)", "1회제공량(g)", "HOT여부(Y/N)", "Kcal", "탄수화물(g)", "단백질(g)", "지방(g)", "중복방지태그", "알러지번호"],
        ["마라로제찜닭", "main1", "3500", "", "250", "Y", "450", "25", "35", "20", "마라로제찜닭", ""],
        ["현미밥", "rice", "510", "", "200", "N", "280", "65", "6", "2", "현미밥", ""]
    ];

    const ws = XLSX.utils.aoa_to_sheet(templateData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "메뉴_업로드_양식");

    XLSX.writeFile(wb, "메뉴_업로드_양식.xlsx");
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});

        // Read the first sheet
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Convert to JSON
        const json = XLSX.utils.sheet_to_json(worksheet, {header: 1});

        // Process rows (skip header)
        if (json.length > 1) {
            let header = json[0];
            const expectedHeader = ["메뉴명", "구분", "가격(원)", "제철(월)", "1회제공량(g)", "HOT여부(Y/N)", "Kcal", "탄수화물(g)", "단백질(g)", "지방(g)", "중복방지태그", "알러지번호"];

            let isValidSchema = true;
            for (let i = 0; i < expectedHeader.length; i++) {
                if (header[i] !== expectedHeader[i]) {
                    isValidSchema = false;
                    break;
                }
            }

            if (!isValidSchema) {
                alert("⚠️ 표준 양식(12개 항목)을 준수해 주세요.");
                return;
            }

            let addedCount = 0;
            for (let i = 1; i < json.length; i++) {
                let row = json[i];
                if (!row || row.length < 2 || !row[0]) continue; // Skip empty/invalid rows

                let name = row[0];
                let type = row[1] ? row[1].trim().toLowerCase() : "side2"; // Default fallback
                let cost = row[2] ? parseInt(row[2]) : 1000;
                // row[3] is seasonality (ignored in DB model for now)
                let amount = row[4] ? parseInt(row[4]) : 100;
                let isTrendy = row[5] && row[5].toString().trim().toUpperCase() === "Y";
                let calories = row[6] ? parseInt(row[6]) : 200;
                let carbs = row[7] ? parseInt(row[7]) : Math.floor(calories * 0.1);
                let protein = row[8] ? parseInt(row[8]) : Math.floor(calories * 0.05);
                let fat = row[9] ? parseInt(row[9]) : Math.floor(calories * 0.02);
                // row[10] is dedup tag (can be name)
                // row[11] is allergy (ignored for now)

                // Add to DB
                let newItem = {
                    id: `csv_${Date.now()}_${i}`,
                    name: name,
                    type: type,
                    amount: amount,
                    calories: calories,
                    carbs: carbs,
                    protein: protein,
                    fat: fat,
                    cost: cost,
                    ingredients: [],
                    isTrendy: isTrendy
                };

                window.appData.menuDB.push(newItem);
                addedCount++;
            }

            alert(`✅ ${addedCount}개의 메뉴가 성공적으로 업로드되었습니다.`);

            // Re-render UI (reset search to show all including new if search is open,
            // but we're mostly relying on rendering the calendar again)
            if(typeof renderSearchMenu === 'function') renderSearchMenu('');
            if(typeof renderCalendar === 'function') renderCalendar();
        } else {
            alert("⚠️ 업로드된 파일에 데이터가 없습니다.");
        }
    };

    // Reset the input so the same file can be uploaded again if needed
    event.target.value = '';

    reader.readAsArrayBuffer(file);
}

function downloadMealPlan() {
    let year = currentMonthDate.getFullYear();
    let month = currentMonthDate.getMonth(); // 0-indexed
    let totalDays = new Date(year, month + 1, 0).getDate();

    let exportData = [
        ["날짜", "밥", "국", "메인", "보조1", "보조2", "김치", "후식", "총 칼로리(kcal)", "총 단가(원)"]
    ];

    for(let i = 1; i <= totalDays; i++) {
        let dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        let meal = window.appData.mealPlans[dateStr];

        if (meal && Object.keys(meal).length > 0) {
            let rice = meal.rice ? meal.rice.name : "";
            let soup = meal.soup ? meal.soup.name : "";
            let main1 = meal.main1 ? meal.main1.name : "";
            let side1 = meal.side2_1 ? meal.side2_1.name : "";
            let side2 = meal.side2_2 ? meal.side2_2.name : "";
            let kimchi = meal.kimchi ? meal.kimchi.name : "";
            let dessert = meal.dessert ? meal.dessert.name : "";

            let totalCal = 0;
            let totalCost = 0;
            ['rice', 'soup', 'main1', 'side2_1', 'side2_2', 'kimchi', 'dessert'].forEach(k => {
                if(meal[k]) {
                    totalCal += meal[k].calories;
                    totalCost += meal[k].cost;
                }
            });

            exportData.push([
                dateStr, rice, soup, main1, side1, side2, kimchi, dessert, totalCal, totalCost
            ]);
        }
    }

    if(exportData.length === 1) {
        alert("⚠️ 내보낼 식단 데이터가 없습니다. 먼저 식단을 작성해주세요.");
        return;
    }

    const ws = XLSX.utils.aoa_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `${year}년_${month+1}월_식단표`);

    XLSX.writeFile(wb, `${year}년_${month+1}월_식단표.xlsx`);
}
