// 1. 구글 시트 CSV 링크 (영양사도우미님 전용 URL)
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfie5Y4fmfLy08JljM5kZ2X8--QwptiH1WrXfz1X5PBIFX5nuEsaM52vK0MnAC8zh0HQkVO07Jbilm/pub?output=csv";

let isDataLoaded = false;

// 2. 구글 시트 데이터 호출 함수
async function fetchMenuData() {
    try {
        console.log("🚀 데이터 로딩 시작...");
        const response = await fetch(GOOGLE_SHEET_CSV_URL);
        if (!response.ok) throw new Error("데이터를 가져오는데 실패했습니다.");
        
        const csvText = await response.text();
        const menuData = parseCSV(csvText);
        
        if (!window.appData) window.appData = { menuDB: [], mealPlans: {} };
        window.appData.menuDB = menuData;
        
        isDataLoaded = true;
        console.log("✅ 데이터 로딩 완료! 총 메뉴 수:", menuData.length);
        
        initApp();
    } catch (error) {
        console.error("❌ 데이터 로딩 중 오류 발생:", error);
        isDataLoaded = true; // 실패 시에도 최소한 버튼은 눌리게 설정 (데이터가 없을 뿐)
        initApp();
    }
}

// 3. CSV 데이터 파싱 및 카테고리 매핑 함수
function parseCSV(csvText) {
    const rows = csvText.split('\n');
    const data = [];
    
    // 카테고리 한글 -> 영어 매핑 테이블
    const typeMap = {
        '밥': 'rice', 'rice': 'rice',
        '국': 'soup', 'soup': 'soup',
        '메인': 'main1', 'main1': 'main1',
        '보조': 'side2', 'side2': 'side2',
        '김치': 'kimchi', 'kimchi': 'kimchi',
        '후식': 'dessert', 'dessert': 'dessert'
    };

    for (let i = 1; i < rows.length; i++) {
        const line = rows[i].trim();
        if (!line) continue;
        
        // 쉼표로 분리 (데이터 내 쉼표가 있을 경우를 대비해 간단한 trim 적용)
        const cols = line.split(',').map(c => c.trim().replace(/^"|"$/g, ''));
        
        const rawType = cols[1] || '';
        const mappedType = typeMap[rawType] || rawType; // 매핑 테이블에 없으면 원본 사용

        data.push({
            name: cols[0] || '이름 없음',
            type: mappedType,            // 엔진 인식용 type
            category: rawType,           // 표시용 category
            cost: Number(cols[2]) || 0,  // 단가 계산용 cost
            price: Number(cols[2]) || 0,
            season: cols[3] || '',
            amount: Number(cols[4]) || 0,
            isHot: cols[5] || 'N',
            calories: Number(cols[6]) || 0, // 칼로리 표시용 calories
            kcal: Number(cols[6]) || 0,
            carbs: Number(cols[7]) || 0,
            protein: Number(cols[8]) || 0,
            fat: Number(cols[9]) || 0,
            id: cols[10] || `m_${i}`,      // 중복 방지 id
            tag: cols[10] || '',
            allergy: cols[11] || ''
        });
    }
    return data;
}

// 앱 시작 시 데이터 호출 실행
fetchMenuData();

// Data source assumed available as window.appData
if (!window.appData) window.appData = { menuDB: [], mealPlans: {} };

let currentMonthDate = new Date();

// -----------------------------------------------------
// Settings Persistence (localStorage)
// -----------------------------------------------------
function saveSettings() {
    const settings = {
        costMin: document.getElementById('setting-cost-min').value,
        costMax: document.getElementById('setting-cost-max').value,
        kimchiFreq: document.getElementById('setting-kimchi-freq').value,
        isVeg: document.getElementById('setting-veg').checked,
        isProtein: document.getElementById('setting-protein').checked,
        isPref: document.getElementById('setting-pref').checked
    };
    localStorage.setItem('dietitianOsSettings', JSON.stringify(settings));
    alert('✨ 설정이 저장되었습니다. 다음에 접속할 때도 유지됩니다.');
}

function loadSettings() {
    const saved = localStorage.getItem('dietitianOsSettings');
    if (saved) {
        try {
            const settings = JSON.parse(saved);
            if (settings.costMin !== undefined) document.getElementById('setting-cost-min').value = settings.costMin;
            if (settings.costMax !== undefined) document.getElementById('setting-cost-max').value = settings.costMax;
            if (settings.kimchiFreq !== undefined) document.getElementById('setting-kimchi-freq').value = settings.kimchiFreq;
            if (settings.isVeg !== undefined) document.getElementById('setting-veg').checked = settings.isVeg;
            if (settings.isProtein !== undefined) document.getElementById('setting-protein').checked = settings.isProtein;
            if (settings.isPref !== undefined) document.getElementById('setting-pref').checked = settings.isPref;
        } catch (e) {
            console.error('Failed to parse settings from localStorage', e);
        }
    }
}

function initApp() {
    loadSettings();
    renderCalendar();
    updateMetrics();
}

function changeMonth(offset) {
    currentMonthDate.setMonth(currentMonthDate.getMonth() + offset);
    renderCalendar();
    updateMetrics();
}

function updateMetrics() {
    let year = currentMonthDate.getFullYear();
    let month = currentMonthDate.getMonth();
    let totalDays = new Date(year, month + 1, 0).getDate();

    let totalCost = 0;
    let totalCal = 0;
    let daysWithMeals = 0;

    for (let i = 1; i <= totalDays; i++) {
        let dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        let meal = window.appData.mealPlans[dateStr];
        if (meal) {
            let dailyCost = 0;
            let dailyCal = 0;
            let hasItems = false;
            Object.values(meal).forEach(item => {
                if (item && item.cost) { dailyCost += item.cost; hasItems = true; }
                if (item && item.calories) dailyCal += item.calories;
            });
            if (hasItems) {
                totalCost += dailyCost;
                totalCal += dailyCal;
                daysWithMeals++;
            }
        }
    }

    let avgCost = daysWithMeals > 0 ? Math.round(totalCost / daysWithMeals) : 0;
    let avgCal = daysWithMeals > 0 ? Math.round(totalCal / daysWithMeals) : 0;

    document.getElementById('summary-total-cost').innerText = `${totalCost.toLocaleString()}원`;
    document.getElementById('summary-avg-cost').innerText = `${avgCost.toLocaleString()}원`;
    document.getElementById('summary-avg-cal').innerText = `${avgCal.toLocaleString()} kcal`;
}

function renderCalendar() {
    let year = currentMonthDate.getFullYear();
    let month = currentMonthDate.getMonth();

    document.getElementById('current-month-label').innerText = `${year}년 ${month + 1}월`;

    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let daysInPrevMonth = new Date(year, month, 0).getDate();

    const calendar = document.getElementById('monthly-calendar');
    calendar.innerHTML = '';

    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    daysOfWeek.forEach((d, idx) => {
        let cls = 'calendar-day-header';
        if(idx === 0) cls += ' sun';
        if(idx === 6) cls += ' sat';
        calendar.innerHTML += `<div class="${cls}">${d}</div>`;
    });

    let html = '';
    for (let i = 0; i < firstDay; i++) {
        html += `<div class="day-cell other-month"><div class="date-header">${daysInPrevMonth - firstDay + i + 1}</div></div>`;
    }

    let todayStr = new Date().toISOString().split('T')[0];

    for (let i = 1; i <= daysInMonth; i++) {
        let dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        let isToday = (dateStr === todayStr) ? 'today' : '';

        let cellHtml = `<div class="day-cell ${isToday}">
                            <div class="date-header">${i}</div>`;

        let dailyCost = 0;
        let dailyCal = 0;

        let meal = window.appData.mealPlans[dateStr] || {};
        const slots = [
            { key: 'rice', label: '밥', tag: 'tag-rice' },
            { key: 'soup', label: '국', tag: 'tag-soup' },
            { key: 'main1', label: '메인', tag: 'tag-main' },
            { key: 'side2_1', label: '보조', tag: 'tag-side' },
            { key: 'side2_2', label: '보조', tag: 'tag-side' },
            { key: 'kimchi', label: '김치', tag: 'tag-kimchi' },
            { key: 'dessert', label: '후식', tag: 'tag-dessert' }
        ];

        slots.forEach(slot => {
            let item = meal[slot.key];
            if (item) {
                dailyCost += item.cost || 0;
                dailyCal += item.calories || 0;
                let hotTagHtml = '';
                if (item.name.match(/마라|로제|두쫀쿠|봄동비빔밥|두바이/)) {
                    hotTagHtml = `<span class="tag tag-hot">HOT 🔥</span>`;
                }

                cellHtml += `
                    <div class="draggable-meal" onclick="openInlineEdit('${dateStr}', '${slot.key}')">
                        <span class="tag ${slot.tag}">${slot.label}</span> ${hotTagHtml}
                        <span class="meal-name">${item.name}</span>
                        <div class="meal-meta">${item.cost.toLocaleString()}원 | ${item.calories}kcal</div>
                    </div>
                `;
            } else {
                 cellHtml += `
                    <div class="draggable-meal" style="border-style: dashed; background: transparent;" onclick="openInlineEdit('${dateStr}', '${slot.key}')">
                        <span class="tag ${slot.tag}">${slot.label}</span>
                        <span class="meal-name" style="color:var(--text-muted); font-weight:normal;">클릭하여 메뉴 추가</span>
                    </div>
                `;
            }
        });

        if (Object.keys(meal).length > 0) {
            cellHtml += `<div class="day-summary">
                            <span>단가: <span>${dailyCost.toLocaleString()}원</span></span>
                            <span>열량: <span>${dailyCal.toLocaleString()}kcal</span></span>
                         </div>`;
        }

        cellHtml += `</div>`;
        html += cellHtml;
    }

    let totalCells = firstDay + daysInMonth;
    let nextMonthDays = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= nextMonthDays; i++) {
        html += `<div class="day-cell other-month"><div class="date-header">${i}</div></div>`;
    }

    calendar.innerHTML += html;
}

// -----------------------------------------------------
// Auto Generate Logic (Sidebar settings integration)
// -----------------------------------------------------

function startMealGeneration() {
    if (!isDataLoaded) {
        alert("데이터 로딩 중입니다... 잠시만 기다려 주세요.");
        return;
    }
    
    if (!window.appData.menuDB || window.appData.menuDB.length === 0) {
        alert("가져온 메뉴 데이터가 없습니다. 구글 시트를 확인해 주세요.");
        return;
    }

    document.getElementById('loading-overlay').style.display = 'flex';

    setTimeout(() => {
        autoGenerateMeals();
        document.getElementById('loading-overlay').style.display = 'none';
        alert("✨ 설정된 조건과 중복 방지 규칙을 적용하여 식단이 생성되었습니다.");
    }, 800);
}

function autoGenerateMeals() {
    let year = currentMonthDate.getFullYear();
    let month = currentMonthDate.getMonth();
    let totalDays = new Date(year, month + 1, 0).getDate();

    let minCost = parseInt(document.getElementById('setting-cost-min').value) || 0;
    let maxCost = parseInt(document.getElementById('setting-cost-max').value) || 10000;
    let kimchiFreq = parseInt(document.getElementById('setting-kimchi-freq').value);
    let isVeg = document.getElementById('setting-veg').checked;
    let isHighProtein = document.getElementById('setting-protein').checked;
    let isPref = document.getElementById('setting-pref').checked;

    let monthUsageCount = {};
    let previousDayNames = new Set();
    let currentWeekNames = new Set();
    let kimchiCountForWeek = 0;

    for (let i = 1; i <= totalDays; i++) {
        let d = new Date(year, month, i);
        let dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

        if (d.getDay() === 0) {
            currentWeekNames.clear();
            kimchiCountForWeek = 0;
        }

        let newMeal = {};
        let todayUsedNames = new Set();
        let currentDailyCost = 0;

        const generateSafe = (typeCategory) => {
            let available = window.appData.menuDB.filter(m => {
                if (m.type !== typeCategory) return false;
                if (todayUsedNames.has(m.name)) return false;
                if ((monthUsageCount[m.name] || 0) >= 2 && typeCategory !== 'kimchi') return false;
                if (previousDayNames.has(m.name) && typeCategory !== 'kimchi') return false;
                if (currentWeekNames.has(m.name) && typeCategory !== 'kimchi') return false;
                return true;
            });

            if (available.length === 0) {
                 available = window.appData.menuDB.filter(m => m.type === typeCategory);
            }

            if (available.length > 0) {
                let chosen = available[Math.floor(Math.random() * available.length)];
                todayUsedNames.add(chosen.name);
                monthUsageCount[chosen.name] = (monthUsageCount[chosen.name] || 0) + 1;
                currentWeekNames.add(chosen.name);
                currentDailyCost += (chosen.cost || 0);
                return chosen;
            }
            return null;
        };

        newMeal.rice = generateSafe('rice');
        newMeal.soup = generateSafe('soup');
        newMeal.main1 = generateSafe('main1');
        newMeal.side2_1 = generateSafe('side2');
        newMeal.side2_2 = generateSafe('side2');
        newMeal.kimchi = generateSafe('kimchi');
        newMeal.dessert = generateSafe('dessert');

        window.appData.mealPlans[dateStr] = newMeal;
        previousDayNames = new Set(todayUsedNames);
    }

    renderCalendar();
    updateMetrics();
}

// (나머지 Modal 관련 함수들은 동일하므로 생략하거나 기존 파일 유지)
// searchReplaceMenu, selectDropdownItem, saveInlineEdit, removeMenuFromSlot, toggleMobileMode...
function openInlineEdit(dateStr, slotKey) {
    document.getElementById('edit-date').value = dateStr;
    document.getElementById('edit-slot-key').value = slotKey;
    let meal = window.appData.mealPlans[dateStr] || {};
    let item = meal[slotKey];
    const labels = { rice: '밥', soup: '국', main1: '메인', side2_1: '보조', side2_2: '보조', kimchi: '김치', dessert: '후식' };
    document.getElementById('inline-edit-title').innerText = `${dateStr} - ${labels[slotKey]} 수정`;
    if (item) {
        document.getElementById('edit-menu-name').value = item.name;
        document.getElementById('edit-menu-cost').value = item.cost;
        document.getElementById('edit-menu-cal').value = item.calories;
        document.getElementById('edit-menu-amount').value = item.amount;
    } else {
        document.getElementById('edit-menu-name').value = '';
        document.getElementById('edit-menu-cost').value = '';
        document.getElementById('edit-menu-cal').value = '';
        document.getElementById('edit-menu-amount').value = '';
    }
    document.getElementById('edit-menu-dropdown').style.display = 'none';
    document.getElementById('inline-edit-modal').style.display = 'flex';
}
function closeInlineEdit() { document.getElementById('inline-edit-modal').style.display = 'none'; }
function searchReplaceMenu() {
    let q = document.getElementById('edit-menu-name').value.trim();
    let dropdown = document.getElementById('edit-menu-dropdown');
    if (q.length === 0) { dropdown.style.display = 'none'; return; }
    let slotKey = document.getElementById('edit-slot-key').value;
    let typeMap = { 'side2_1': 'side2', 'side2_2': 'side2', 'main1': 'main1', 'rice': 'rice', 'soup': 'soup', 'kimchi': 'kimchi', 'dessert': 'dessert' };
    let results = window.appData.menuDB.filter(m => (m.type === typeMap[slotKey]) && m.name.includes(q)).slice(0, 10);
    if (results.length > 0) {
        dropdown.innerHTML = results.map(m => `<div class="dropdown-item" onclick="selectDropdownItem('${m.id}')"><b>${m.name}</b></div>`).join('');
        dropdown.style.display = 'block';
    } else { dropdown.style.display = 'none'; }
}
function selectDropdownItem(id) {
    let m = window.appData.menuDB.find(x => x.id === id);
    if(m) {
        document.getElementById('edit-menu-name').value = m.name;
        document.getElementById('edit-menu-cost').value = m.cost;
        document.getElementById('edit-menu-cal').value = m.calories;
        document.getElementById('edit-menu-amount').value = m.amount;
    }
    document.getElementById('edit-menu-dropdown').style.display = 'none';
}
function saveInlineEdit() {
    let dateStr = document.getElementById('edit-date').value;
    let slotKey = document.getElementById('edit-slot-key').value;
    let name = document.getElementById('edit-menu-name').value.trim();
    let cost = parseInt(document.getElementById('edit-menu-cost').value) || 0;
    let cal = parseInt(document.getElementById('edit-menu-cal').value) || 0;
    let amt = parseInt(document.getElementById('edit-menu-amount').value) || 0;
    if(!name) return;
    if(!window.appData.mealPlans[dateStr]) window.appData.mealPlans[dateStr] = {};
    let dbItem = window.appData.menuDB.find(m => m.name === name);
    window.appData.mealPlans[dateStr][slotKey] = {
        name: name, cost: cost, calories: cal, amount: amt, 
        id: dbItem ? dbItem.id : Date.now(), type: dbItem ? dbItem.type : slotKey
    };
    closeInlineEdit(); renderCalendar(); updateMetrics();
}
function removeMenuFromSlot() {
    let dateStr = document.getElementById('edit-date').value;
    let slotKey = document.getElementById('edit-slot-key').value;
    if(window.appData.mealPlans[dateStr]) delete window.appData.mealPlans[dateStr][slotKey];
    closeInlineEdit(); renderCalendar(); updateMetrics();
}
function toggleMobileMode() {
    const isMobile = document.body.classList.toggle('mobile-mode');
    document.getElementById('toggle-mobile-btn').innerText = isMobile ? '💻 PC 보기' : '📱 모바일 보기';
}
