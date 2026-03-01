// Dashboard Logic

document.addEventListener("DOMContentLoaded", () => {
    initDashboard();
});

function initDashboard() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('today-date').innerText = new Date().toLocaleDateString('ko-KR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    renderTodayMenu(today);
    renderHygieneChecklist();
    renderAlerts();
    renderChart();
}

function renderTodayMenu(date) {
    const meal = window.appData.mealPlans[date];
    const listEl = document.getElementById('today-menu-list');
    const nutritionEl = document.getElementById('today-nutrition');

    listEl.innerHTML = '';
    nutritionEl.innerHTML = '';

    if (!meal) {
        listEl.innerHTML = '<li class="menu-item text-gray">오늘 배정된 식단이 없습니다.</li>';
        return;
    }

    const labels = { rice: '밥', soup: '국', main1: '메인', side2_1: '보조1', side2_2: '보조2', kimchi: '김치', dessert: '후식' };
    let totals = { cal: 0, carb: 0, prot: 0, fat: 0 };

    for (let key in meal) {
        if(meal[key]) {
            let item = meal[key];
            totals.cal += item.calories;
            totals.carb += item.carbs;
            totals.prot += item.protein;
            totals.fat += item.fat;

            let trendBadge = item.isTrendy ? '<span class="badge-trendy">🔥유행</span>' : '';

            listEl.innerHTML += `
                <li class="menu-item">
                    <span class="menu-type">${labels[key]}</span>
                    <span class="menu-name">
                        ${item.name} ${trendBadge}
                        <div class="amount-info">${item.amount}g | ${item.calories}kcal</div>
                    </span>
                </li>
            `;
        }
    }

    // Render Summary
    nutritionEl.innerHTML = `
        <div class="nutrient">
            <div class="nutrient-val">${totals.cal}</div>
            <div class="nutrient-label">Kcal</div>
        </div>
        <div class="nutrient">
            <div class="nutrient-val">${totals.carb}g</div>
            <div class="nutrient-label">탄수화물</div>
        </div>
        <div class="nutrient">
            <div class="nutrient-val">${totals.prot}g</div>
            <div class="nutrient-label">단백질</div>
        </div>
        <div class="nutrient">
            <div class="nutrient-val">${totals.fat}g</div>
            <div class="nutrient-label">지방</div>
        </div>
    `;
}

function renderHygieneChecklist() {
    const listEl = document.getElementById('hygiene-list');
    listEl.innerHTML = '';

    window.appData.hygieneChecklist.forEach(item => {
        let checked = item.completed ? 'checked' : '';
        listEl.innerHTML += `
            <li class="checklist-item">
                <input type="checkbox" id="${item.id}" ${checked} onchange="toggleHygiene('${item.id}')">
                <label for="${item.id}">${item.task}</label>
            </li>
        `;
    });
}

function toggleHygiene(id) {
    let item = window.appData.hygieneChecklist.find(h => h.id === id);
    if(item) item.completed = !item.completed;
}

function renderAlerts() {
    const container = document.getElementById('alerts-container');
    container.innerHTML = '';

    // Pending Orders Alert
    let pending = window.appData.dashboardStats.pendingOrders;
    if(pending > 0) {
        container.innerHTML += `
            <div class="alert-box">
                🔔 미처리 발주 건수가 <b>${pending}건</b> 있습니다.
            </div>
        `;
    }

    // Expiry / Low Stock Alerts
    window.appData.inventoryDB.forEach(item => {
        if(item.status === 'critical') {
            container.innerHTML += `
                <div class="alert-box danger">
                    ⚠️ <b>${item.name}</b> 재고 부족 또는 유통기한 임박!
                </div>
            `;
        }
    });
}

function renderChart() {
    const container = document.getElementById('satisfaction-chart');
    container.innerHTML = '';
    let stats = window.appData.dashboardStats;

    stats.satisfactionScores.forEach((score, index) => {
        let height = (score / 100) * 150; // max height 150px
        container.innerHTML += `
            <div class="bar" style="height: ${height}px">
                <span>${score}%</span>
                <div class="bar-label">${stats.labels[index]}</div>
            </div>
        `;
    });
}
