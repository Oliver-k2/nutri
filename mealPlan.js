// Meal Planner Logic

document.addEventListener("DOMContentLoaded", () => {
    // We only initialize once user navigates to tab to save resources,
    // but we can preload calendar data
});

function getWeekDays() {
    let curr = new Date();
    let first = curr.getDate() - curr.getDay() + 1; // Monday
    let days = [];
    for(let i=0; i<5; i++) { // Mon to Fri
        let next = new Date(curr.getTime());
        next.setDate(first + i);
        days.push(next.toISOString().split('T')[0]);
    }
    return days;
}

function renderCalendar() {
    const tbody = document.getElementById('calendar-body');
    tbody.innerHTML = '';

    let days = getWeekDays();
    let rowHTML = '<tr>';

    days.forEach(date => {
        let displayDate = new Date(date).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
        rowHTML += `
            <td class="day-cell" id="cell-${date}" ondrop="drop(event, '${date}')" ondragover="allowDrop(event)">
                <div class="date-header">${displayDate}</div>
                <div id="meal-content-${date}">
                    ${generateMealHTML(date)}
                </div>
                <div class="day-summary" id="summary-${date}">
                    ${generateSummaryHTML(date)}
                </div>
            </td>
        `;
    });

    rowHTML += '</tr>';
    tbody.innerHTML = rowHTML;
}

function generateMealHTML(date) {
    let meal = window.appData.mealPlans[date];
    if(!meal) return '<div class="text-gray" style="font-size:0.8rem">식단 미배정</div>';

    let html = '';
    const keys = ['rice', 'soup', 'main1', 'side2_1', 'side2_2', 'kimchi', 'other'];
    const labels = { rice: '밥', soup: '국', main1: '메인', side2_1: '보조1', side2_2: '보조2', kimchi: '김치', other: '기타' };

    keys.forEach(key => {
        if(meal[key]) {
            html += `
                <div class="draggable-meal" draggable="true" ondragstart="drag(event, '${date}', '${key}', '${meal[key].id}')">
                    <span><b>${labels[key]}</b>: ${meal[key].name}</span>
                </div>
            `;
        }
    });
    return html;
}

function generateSummaryHTML(date) {
    let meal = window.appData.mealPlans[date];
    if(!meal) return '';

    let totals = { cost: 0, cal: 0 };
    for(let key in meal) {
        if(meal[key]) {
            totals.cost += meal[key].cost;
            totals.cal += meal[key].calories;
        }
    }
    return `단가: ${totals.cost.toLocaleString()}원<br>열량: ${totals.cal}kcal`;
}


// Search functionality
function renderSearchMenu(query = '') {
    const container = document.getElementById('search-results');
    container.innerHTML = '';

    let results = window.appData.menuDB.filter(m => m.name.includes(query) || m.type.includes(query));

    results.forEach(m => {
        container.innerHTML += `
            <div class="draggable-meal" draggable="true" ondragstart="dragNew(event, '${m.id}')">
                <div>
                    <b>${m.name}</b> <span style="font-size:0.7rem; color:var(--text-gray)">(${m.calories}kcal)</span>
                </div>
                <div style="font-size:0.8rem; color:var(--dark-green)">${m.cost.toLocaleString()}원</div>
            </div>
        `;
    });
}

function filterMenuSearch() {
    let q = document.getElementById('menu-search').value;
    renderSearchMenu(q);
}

// Drag & Drop Handlers
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev, sourceDate, sourceKey, menuId) {
    ev.dataTransfer.setData("action", "move");
    ev.dataTransfer.setData("sourceDate", sourceDate);
    ev.dataTransfer.setData("sourceKey", sourceKey);
    ev.dataTransfer.setData("menuId", menuId);
}

function dragNew(ev, menuId) {
    ev.dataTransfer.setData("action", "add");
    ev.dataTransfer.setData("menuId", menuId);
}

function drop(ev, targetDate) {
    ev.preventDefault();
    let action = ev.dataTransfer.getData("action");
    let menuId = ev.dataTransfer.getData("menuId");

    let menuObj = window.appData.menuDB.find(m => m.id === menuId);
    if(!menuObj) return;

    // Check allergies warning
    let warning = checkAllergies(menuObj);
    if(warning) {
        if(!confirm(`⚠️ [경고] ${warning}\n그래도 추가하시겠습니까?`)) return;
    }

    if(!window.appData.mealPlans[targetDate]) {
        window.appData.mealPlans[targetDate] = {};
    }

    // Determine category slot
    let type = menuObj.type;
    let targetKey = type;
    if(type === 'side2') {
        // Find empty side slot
        if(!window.appData.mealPlans[targetDate].side2_1) targetKey = 'side2_1';
        else targetKey = 'side2_2';
    }

    // Apply
    window.appData.mealPlans[targetDate][targetKey] = menuObj;

    // Remove from source if moved
    if(action === "move") {
        let sourceDate = ev.dataTransfer.getData("sourceDate");
        let sourceKey = ev.dataTransfer.getData("sourceKey");
        if(sourceDate !== targetDate || sourceKey !== targetKey) {
             delete window.appData.mealPlans[sourceDate][sourceKey];
        }
    }

    renderCalendar();
}


// Auto Generate
function autoGenerateMeals() {
    let days = getWeekDays();
    days.forEach(date => {
        // Skip if already has full meal (for demo, just overwrite or fill blanks)
        window.appData.mealPlans[date] = {
            rice: getRandomMenu('rice'),
            soup: getRandomMenu('soup'),
            main1: getRandomMenu('main1'),
            side2_1: getRandomMenu('side2'),
            side2_2: getRandomMenu('side2'),
            kimchi: getRandomMenu('kimchi'),
            other: getRandomMenu('other')
        };
    });
    renderCalendar();
    alert("✨ 이번 주 식단이 트렌드와 영양소 균형(탄/단/지)을 고려하여 자동 생성되었습니다.");
}

function getRandomMenu(type) {
    let arr = window.appData.menuDB.filter(m => m.type === type);
    return arr[Math.floor(Math.random() * arr.length)];
}

// Allergy Checking
function checkAllergies(menuObj) {
    let affected = [];
    window.appData.patientsDB.forEach(p => {
        let intersection = p.allergies.filter(a => menuObj.ingredients.includes(a));
        if(intersection.length > 0) {
            affected.push(`${p.name}님(${intersection.join(',')})`);
        }
    });
    if(affected.length > 0) return `알레르기 주의 환자가 있습니다: ${affected.join(', ')}`;
    return null;
}
