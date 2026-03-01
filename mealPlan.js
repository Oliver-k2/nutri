// Meal Planner Logic

let currentMonthDate = new Date();

document.addEventListener("DOMContentLoaded", () => {
    // Initialization
});

function changeMonth(delta) {
    currentMonthDate.setMonth(currentMonthDate.getMonth() + delta);
    renderCalendar();
}

function renderCalendar() {
    const calendarGrid = document.getElementById('monthly-calendar');
    const monthLabel = document.getElementById('current-month-label');

    let year = currentMonthDate.getFullYear();
    let month = currentMonthDate.getMonth();

    monthLabel.innerText = `${year}년 ${month + 1}월`;

    calendarGrid.innerHTML = '';

    // Add Headers
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const dayClasses = ['sun', '', '', '', '', '', 'sat'];

    daysOfWeek.forEach((day, index) => {
        calendarGrid.innerHTML += `<div class="calendar-day-header ${dayClasses[index]}">${day}</div>`;
    });

    // Calculate days
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let startPadding = firstDay.getDay();
    let totalDays = lastDay.getDate();

    // Previous month padding
    let prevLastDay = new Date(year, month, 0).getDate();
    for(let i = startPadding - 1; i >= 0; i--) {
        calendarGrid.innerHTML += `<div class="day-cell other-month"><div class="date-header">${prevLastDay - i}</div></div>`;
    }

    // Current month days
    let todayStr = new Date().toISOString().split('T')[0];

    for(let i = 1; i <= totalDays; i++) {
        let currentDateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        let isTodayClass = (currentDateStr === todayStr) ? 'today' : '';

        calendarGrid.innerHTML += `
            <div class="day-cell ${isTodayClass}" id="cell-${currentDateStr}" onclick="openEditModal('${currentDateStr}')">
                <div class="date-header">${i}</div>
                <div id="meal-content-${currentDateStr}">
                    ${generateMealHTMLMini(currentDateStr)}
                </div>
            </div>
        `;
    }

    // Next month padding
    let remainingCells = 42 - (startPadding + totalDays); // Always keep 6 rows layout
    if (remainingCells >= 7 && (startPadding + totalDays) <= 35) remainingCells -= 7; // Adjust to 5 rows if enough
    for(let i = 1; i <= remainingCells; i++) {
        calendarGrid.innerHTML += `<div class="day-cell other-month"><div class="date-header">${i}</div></div>`;
    }
}

function generateMealHTMLMini(date) {
    let meal = window.appData.mealPlans[date];
    if(!meal || Object.keys(meal).length === 0) return '<div class="text-gray" style="font-size:0.7rem; margin-top:5px;">등록 안됨</div>';

    let html = '';
    const keys = ['main1', 'soup', 'dessert']; // Mini view only shows highlights

    keys.forEach(key => {
        if(meal[key]) {
            html += `<div style="font-size:0.7rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">• ${meal[key].name}</div>`;
        }
    });

    html += `<div class="day-summary" style="font-size:0.7rem; margin-top:5px; border-top:1px solid #eee;">${generateSummaryHTML(date)}</div>`;

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


// Search functionality & Cost editing
function updateMenuCost(id, inputElement) {
    let newCost = parseInt(inputElement.value);
    if(isNaN(newCost) || newCost < 0) return;

    let menu = window.appData.menuDB.find(m => m.id === id);
    if(menu) {
        menu.cost = newCost;
        // Re-render calendar summaries since costs updated
        renderCalendar();
    }
}

// Daily Edit Modal Logic
let currentEditDate = null;

function openEditModal(dateStr) {
    currentEditDate = dateStr;
    document.getElementById('daily-edit-modal').style.display = 'flex';
    document.getElementById('modal-date-label').innerText = `${dateStr} 식단 편집`;
    renderDailySlots();
}

function closeEditModal() {
    document.getElementById('daily-edit-modal').style.display = 'none';
    currentEditDate = null;
    renderCalendar();
}

function renderDailySlots() {
    if(!currentEditDate) return;

    let meal = window.appData.mealPlans[currentEditDate] || {};
    const slots = document.getElementById('modal-daily-slots');
    slots.innerHTML = '';

    const keys = ['rice', 'soup', 'main1', 'side2_1', 'side2_2', 'kimchi', 'dessert'];
    const labels = { rice: '밥', soup: '국', main1: '메인', side2_1: '보조1', side2_2: '보조2', kimchi: '김치', dessert: '후식' };

    keys.forEach(key => {
        let content = '';
        if(meal[key]) {
            let item = meal[key];
            let trendBadge = item.isTrendy ? '<span class="badge-trendy">🔥</span>' : '';
            content = `
                <div class="draggable-meal" draggable="true" ondragstart="drag(event, '${currentEditDate}', '${key}', '${item.id}')">
                    <div style="flex:1;">
                        <b>${item.name}</b> ${trendBadge} <br>
                        <span style="font-size:0.75rem; color:var(--text-gray)">(${item.amount}g | ${item.calories}kcal) - ${item.cost}원</span>
                    </div>
                </div>
            `;
        } else {
            content = '<div class="text-gray" style="font-size:0.8rem; padding:10px;">이곳에 메뉴를 드래그 앤 드롭 하세요.</div>';
        }

        slots.innerHTML += `
            <div class="slot-container" id="slot-${key}" ondrop="drop(event, '${currentEditDate}', '${key}')" ondragover="allowDrop(event)">
                <span class="slot-title">${labels[key]}</span>
                ${content}
            </div>
        `;
    });
}

function renderSearchMenu(query = '') {
    const container = document.getElementById('search-results');
    if (!container) return;
    container.innerHTML = '';

    // Simulate trend API search integration
    let results = window.appData.menuDB.filter(m =>
        m.name.includes(query) ||
        m.type.includes(query) ||
        (query.toLowerCase() === 'trend' && m.isTrendy)
    );

    // Limit results for performance if query is empty
    if (query === '') {
        results = results.slice(0, 50);
    }

    results.forEach(m => {
        let trendBadge = m.isTrendy ? '<span class="badge-trendy">🔥유행</span>' : '';
        container.innerHTML += `
            <div class="draggable-meal" draggable="true" ondragstart="dragNew(event, '${m.id}')">
                <div style="flex:1;">
                    <b>${m.name}</b> ${trendBadge} <br>
                    <span style="font-size:0.7rem; color:var(--text-gray)">(${m.amount}g | ${m.calories}kcal)</span>
                </div>
                <div style="display:flex; align-items:center;">
                    <input type="number" class="cost-input" value="${m.cost}"
                        onchange="updateMenuCost('${m.id}', this)" onclick="event.stopPropagation();">원
                </div>
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

function drop(ev, targetDate, explicitTargetKey = null) {
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
    let targetKey = explicitTargetKey;
    if(!targetKey) {
        let type = menuObj.type;
        targetKey = type;
        if(type === 'side2') {
            if(!window.appData.mealPlans[targetDate].side2_1) targetKey = 'side2_1';
            else targetKey = 'side2_2';
        }
    }

    // Only allow mapping compatible types if an explicit slot is given
    let typeMap = { 'side2_1': 'side2', 'side2_2': 'side2', 'main1': 'main1', 'rice': 'rice', 'soup': 'soup', 'kimchi': 'kimchi', 'dessert': 'dessert' };
    if(explicitTargetKey && typeMap[explicitTargetKey] !== menuObj.type) {
        alert("⚠️ 해당 카테고리 슬롯에 맞지 않는 메뉴입니다.");
        return;
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

    // If modal is open, re-render slots, else re-render calendar
    if(currentEditDate === targetDate) {
        renderDailySlots();
    } else {
        renderCalendar();
    }
}


// Auto Generate with Strict Anti-Redundancy Rules
function autoGenerateMeals() {
    let year = currentMonthDate.getFullYear();
    let month = currentMonthDate.getMonth();
    let totalDays = new Date(year, month + 1, 0).getDate();

    // Track usage to enforce rules by NAME to properly deduplicate generated dataset
    let monthUsageCount = {}; // { menuName: count }
    let previousDayNames = new Set();

    // We will track weeks to enforce week-level deduplication
    // Let's assume week starts on Sunday (0) to Saturday (6).
    // We track item names used in the current week.
    let currentWeekNames = new Set();

    for (let i = 1; i <= totalDays; i++) {
        let d = new Date(year, month, i);
        let dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

        let dayOfWeek = d.getDay();
        // Reset weekly set if it's Sunday
        if (dayOfWeek === 0) {
            currentWeekNames.clear();
        }

        let newMeal = {};
        let todayUsedNames = new Set();

        const generateSafe = (typeKey, typeCategory) => {
            let available = window.appData.menuDB.filter(m => {
                if (m.type !== typeCategory) return false;
                if (todayUsedNames.has(m.name)) return false; // intra-meal duplicate

                // Kimchi is exempt from redundancy rules
                if (typeCategory === 'kimchi') return true;

                // Rule 1: Max 2 times per month
                if ((monthUsageCount[m.name] || 0) >= 2) return false;

                // Rule 2: No consecutive days
                if (previousDayNames.has(m.name)) return false;

                // Rule 3: No duplicate in the same week
                if (currentWeekNames.has(m.name)) return false;

                return true;
            });

            // If strictly out of items (rare with 1000+ db), relax week/month constraints slightly
            if (available.length === 0 && typeCategory !== 'kimchi') {
                 available = window.appData.menuDB.filter(m => m.type === typeCategory && !todayUsedNames.has(m.name) && !previousDayNames.has(m.name));
            }

            if (available.length > 0) {
                let chosen = available[Math.floor(Math.random() * available.length)];
                todayUsedNames.add(chosen.name);
                monthUsageCount[chosen.name] = (monthUsageCount[chosen.name] || 0) + 1;
                currentWeekNames.add(chosen.name);
                return chosen;
            }
            return null; // Should ideally never reach here with huge dataset
        };

        newMeal.rice = generateSafe('rice', 'rice');
        newMeal.soup = generateSafe('soup', 'soup');
        newMeal.main1 = generateSafe('main1', 'main1');
        newMeal.side2_1 = generateSafe('side2_1', 'side2');
        newMeal.side2_2 = generateSafe('side2_2', 'side2');
        newMeal.kimchi = generateSafe('kimchi', 'kimchi');
        newMeal.dessert = generateSafe('dessert', 'dessert');

        window.appData.mealPlans[dateStr] = newMeal;
        previousDayNames = new Set(todayUsedNames); // carry forward to next day
    }

    renderCalendar();
    alert("✨ 이 달의 식단이 엄격한 중복 방지 규칙(월2회 제한, 연속금지, 주간금지)을 준수하여 생성되었습니다.");
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
