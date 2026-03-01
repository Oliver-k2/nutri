// Data source assumed available as window.appData

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

        // Always render all 7 empty slots if empty, or populated slots.
        // This ensures the empty calendar condition is met.
        slots.forEach(slot => {
            let item = meal[slot.key];
            if (item) {
                dailyCost += item.cost || 0;
                dailyCal += item.calories || 0;
                cellHtml += `
                    <div class="draggable-meal" onclick="openInlineEdit('${dateStr}', '${slot.key}')">
                        <span class="tag ${slot.tag}">${slot.label}</span>
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
    document.getElementById('loading-overlay').style.display = 'flex';

    // Allow UI to update and show loading overlay before starting heavy computation
    setTimeout(() => {
        autoGenerateMeals();
        document.getElementById('loading-overlay').style.display = 'none';

        // Show completion animation/alert
        alert("✨ 설정된 조건과 중복 방지 규칙을 적용하여 식단이 생성되었습니다.");
    }, 800);
}

function autoGenerateMeals() {
    let year = currentMonthDate.getFullYear();
    let month = currentMonthDate.getMonth();
    let totalDays = new Date(year, month + 1, 0).getDate();

    // Read Settings
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

        let dayOfWeek = d.getDay();
        if (dayOfWeek === 0) {
            currentWeekNames.clear();
            kimchiCountForWeek = 0;
        }

        let newMeal = {};
        let todayUsedNames = new Set();
        let currentDailyCost = 0;

        const generateSafe = (typeKey, typeCategory, targetCostRemaining, isLastItem) => {
            let available = window.appData.menuDB.filter(m => {
                if (m.type !== typeCategory) return false;
                if (todayUsedNames.has(m.name)) return false;

                // Filters based on sidebar checkboxes
                if (isVeg && m.name.match(/고기|소|돼지|닭|오리|생선|참치|새우|오징어|멸치|햄|소시지|베이컨|돈까스|함박|스팸|우삼겹|가츠|카츠|치킨|삼겹|차돌|육|스테이크|고등어|꽁치|연어|장어|갈치|명태|동태|낙지|문어|쭈꾸미|게|조개|홍합|굴|전복|가리비|맛살|크래미|명란|가자미|미트볼|부대|감자탕|해산물|불고기|장조림|제육|순대|곱창|막창|갈비|떡갈비|동파육|탕수육|깐풍기|유린기|꿔바로우|수육|족발|보쌈|닭갈비|찜닭|백숙|삼계탕|추어탕|해장국|만두|사골|곰탕|설렁탕|갈비탕|도가니탕|꼬리곰탕|육개장|우족탕|삼치|팔보채|동그랑땡|어묵/)) return false;

                if (isHighProtein && typeCategory === 'main1') {
                    // Prioritize high protein items for main1
                    if (!m.name.match(/고기|소|돼지|닭|오리|생선|계란|콩|두부|연어|고등어|꽁치|치킨|가츠|스테이크/)) return false;
                }

                if (isPref && typeCategory === 'main1' && !m.isTrendy) {
                    // For preference filter, randomly exclude 70% of non-trendy items
                    if (Math.random() < 0.7) return false;
                }

                if (typeCategory === 'kimchi') {
                    // Logic for kimchi frequency (regular kimchi vs special kimchi)
                    let isRegularKimchi = m.name.includes('배추김치') || m.name.includes('포기김치') || m.name.includes('깍두기');
                    if (isRegularKimchi && kimchiCountForWeek >= kimchiFreq) {
                        return false;
                    }
                }

                // Deduplication rules
                if ((monthUsageCount[m.name] || 0) >= 2 && typeCategory !== 'kimchi') return false;
                if (previousDayNames.has(m.name) && typeCategory !== 'kimchi') return false;
                if (currentWeekNames.has(m.name) && typeCategory !== 'kimchi') return false;

                return true;
            });

            // If filtered out completely, relax rules progressively
            if (available.length === 0) {
                 available = window.appData.menuDB.filter(m => m.type === typeCategory && !todayUsedNames.has(m.name));
            }

            if (available.length > 0) {
                // Try to find an item that fits the daily cost budget reasonably.
                let candidates = available;

                // If it's the last few items (e.g. dessert or kimchi) and we have a target cost remaining,
                // try to pick something that brings the total cost closer to the target maxCost.
                // We want: currentDailyCost + chosen.cost <= maxCost (and ideally >= minCost when finished)
                if (maxCost > 0) {
                    let costFiltered = available.filter(m => (currentDailyCost + m.cost) <= maxCost + 500); // Allow slight overflow
                    if (costFiltered.length > 0) {
                        candidates = costFiltered;
                    }
                }

                let chosen = candidates[Math.floor(Math.random() * candidates.length)];

                todayUsedNames.add(chosen.name);
                monthUsageCount[chosen.name] = (monthUsageCount[chosen.name] || 0) + 1;
                currentWeekNames.add(chosen.name);

                let isRegularKimchi = chosen.name.includes('배추김치') || chosen.name.includes('포기김치') || chosen.name.includes('깍두기');
                if (typeCategory === 'kimchi' && isRegularKimchi) {
                    kimchiCountForWeek++;
                }

                currentDailyCost += (chosen.cost || 0);

                return chosen;
            }
            return null;
        };

        // Generate in order of impact on cost (Main -> Rice -> Soup -> Sides -> Kimchi -> Dessert)
        newMeal.main1 = generateSafe('main1', 'main1', 0, false);
        newMeal.rice = generateSafe('rice', 'rice', 0, false);
        newMeal.soup = generateSafe('soup', 'soup', 0, false);
        newMeal.side2_1 = generateSafe('side2_1', 'side2', 0, false);
        newMeal.side2_2 = generateSafe('side2_2', 'side2', 0, false);
        newMeal.kimchi = generateSafe('kimchi', 'kimchi', 0, false);
        newMeal.dessert = generateSafe('dessert', 'dessert', maxCost - currentDailyCost, true);

        // Final cost check & adjustment if severely under minCost
        if (currentDailyCost < minCost) {
            // Swap dessert to something more expensive
            let expensiveDesserts = window.appData.menuDB.filter(m => m.type === 'dessert' && m.cost > (newMeal.dessert ? newMeal.dessert.cost : 0));
            if (expensiveDesserts.length > 0) {
                expensiveDesserts.sort((a,b) => b.cost - a.cost);
                newMeal.dessert = expensiveDesserts[0];
                currentDailyCost = currentDailyCost - (newMeal.dessert ? newMeal.dessert.cost : 0) + expensiveDesserts[0].cost;
            }
        }

        window.appData.mealPlans[dateStr] = newMeal;
        previousDayNames = new Set(todayUsedNames);
    }

    renderCalendar();
    updateMetrics();
}


// -----------------------------------------------------
// Inline Edit Modal Logic
// -----------------------------------------------------

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

function closeInlineEdit() {
    document.getElementById('inline-edit-modal').style.display = 'none';
}

function searchReplaceMenu() {
    let q = document.getElementById('edit-menu-name').value.trim();
    let dropdown = document.getElementById('edit-menu-dropdown');

    if (q.length === 0) {
        dropdown.style.display = 'none';
        return;
    }

    let slotKey = document.getElementById('edit-slot-key').value;
    let typeMap = { 'side2_1': 'side2', 'side2_2': 'side2', 'main1': 'main1', 'rice': 'rice', 'soup': 'soup', 'kimchi': 'kimchi', 'dessert': 'dessert' };
    let requiredType = typeMap[slotKey];

    let results = window.appData.menuDB.filter(m =>
        (m.type === requiredType) && m.name.includes(q)
    ).slice(0, 10);

    if (results.length > 0) {
        dropdown.innerHTML = results.map(m => `
            <div class="dropdown-item" onclick="selectDropdownItem('${m.id}')">
                <b>${m.name}</b> <span class="text-muted" style="font-size:0.8rem;">(${m.calories}kcal | ${m.cost}원)</span>
            </div>
        `).join('');
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
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

    if(!name) { alert("메뉴 이름을 입력하세요."); return; }

    if(!window.appData.mealPlans[dateStr]) {
        window.appData.mealPlans[dateStr] = {};
    }

    // We create or update the object.
    // If it's a completely new name, we should give it a unique ID or find it in DB.
    let existingDbItem = window.appData.menuDB.find(m => m.name === name);
    let typeMap = { 'side2_1': 'side2', 'side2_2': 'side2', 'main1': 'main1', 'rice': 'rice', 'soup': 'soup', 'kimchi': 'kimchi', 'dessert': 'dessert' };
    let requiredType = typeMap[slotKey];

    if (existingDbItem) {
        window.appData.mealPlans[dateStr][slotKey] = {
            id: existingDbItem.id,
            name: name,
            type: existingDbItem.type,
            ingredients: existingDbItem.ingredients,
            amount: amt,
            calories: cal,
            cost: cost,
            isTrendy: existingDbItem.isTrendy
        };
    } else {
        window.appData.mealPlans[dateStr][slotKey] = {
            id: `custom_${Date.now()}`,
            name: name,
            type: requiredType,
            ingredients: [],
            amount: amt,
            calories: cal,
            cost: cost,
            isTrendy: false
        };
    }

    closeInlineEdit();
    renderCalendar();
    updateMetrics();
}

function removeMenuFromSlot() {
    let dateStr = document.getElementById('edit-date').value;
    let slotKey = document.getElementById('edit-slot-key').value;

    if(window.appData.mealPlans[dateStr] && window.appData.mealPlans[dateStr][slotKey]) {
        delete window.appData.mealPlans[dateStr][slotKey];
    }

    closeInlineEdit();
    renderCalendar();
    updateMetrics();
}

// Initial render
document.addEventListener("DOMContentLoaded", initApp);
