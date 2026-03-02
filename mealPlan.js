// 1. 구글 시트 CSV 링크 및 백업 데이터
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfie5Y4fmfLy08JljM5kZ2X8--QwptiH1WrXfz1X5PBIFX5nuEsa)m/pub?output=csv";

// 로컬 실행(CORS 차단) 시 사용할 백업 데이터 (최신 메뉴 포함)
const BACKUP_MENU_DATA = `메뉴명,구분,가격(원),제철(월),1회제공량(g),HOT여부(Y/N),Kcal,탄수화물(g),단백질(g),지방(g),중복방지태그,알러지번호
쌀밥,rice,470,,200,N,306,65,6,2,r1,
현미밥,rice,510,,200,N,280,65,6,2,r2,
흑미밥,rice,530,,200,N,275,65,6,2,r3,
잡곡밥,rice,490,,200,N,281,65,6,2,r4,
보리밥,rice,470,,200,N,321,65,6,2,r5,
기장밥,rice,520,,200,N,279,65,6,2,r6,
차조밥,rice,480,,200,N,286,65,6,2,r7,
수수밥,rice,490,,200,N,280,65,6,2,r8,
콩밥,rice,520,,200,N,311,65,6,2,r9,
완두콩밥,rice,540,,200,N,319,65,6,2,r10,
된장찌개,soup,850,,250,N,145,10,8,5,s172,
김치찌개,soup,810,,250,N,164,10,8,5,s173,
순두부찌개,soup,810,,250,N,139,10,8,5,s174,
제육볶음,main1,2320,,150,N,433,20,25,20,m400,
간장제육볶음,main1,2480,,150,N,463,20,25,20,m401,
고추장불고기,main1,2280,,150,N,438,20,25,20,m402,
시금치나물,side2,450,,50,N,62,8,3,2,s676,
콩나물무침,side2,520,,50,N,56,8,3,2,s677,
배추김치,kimchi,270,,40,N,27,5,1,0,k1072,
깍두기,kimchi,310,,40,N,23,5,1,0,k1081,
사과,dessert,840,,100,N,157,30,2,5,d1174,
마라로제찜닭,main1,3500,,250,N,450,25,35,20,m_trend_1,`;

let isDataLoaded = false;

// 2. 구글 시트 데이터 호출 함수 (로컬 CORS 문제 해결 포함)
async function fetchMenuData() {
    try {
        console.log("🚀 데이터 연동 시도 중...");
        
        let csvText = "";
        
        // 로컬 파일 실행 여부 확인
        if (window.location.protocol === 'file:') {
            console.warn("⚠️ 로컬 보안 정책(CORS)으로 인해 백업 데이터를 사용합니다.");
            csvText = BACKUP_MENU_DATA;
        } else {
            const response = await fetch(GOOGLE_SHEET_CSV_URL);
            if (!response.ok) throw new Error("네트워크 응답 없음");
            csvText = await response.text();
        }

        const menuData = parseCSV(csvText);
        
        if (!window.appData) window.appData = { menuDB: [], mealPlans: {} };
        window.appData.menuDB = menuData;
        
        if (menuData.length > 0) {
            isDataLoaded = true;
            console.log("✅ 데이터 준비 완료! 메뉴 수:", menuData.length);
        }
        
        initApp();
    } catch (error) {
        console.warn("⚠️ 실시간 연동 실패, 백업 데이터로 전환합니다.");
        const menuData = parseCSV(BACKUP_MENU_DATA);
        if (!window.appData) window.appData = { menuDB: [], mealPlans: {} };
        window.appData.menuDB = menuData;
        isDataLoaded = true;
        initApp();
    }
}

// 3. CSV 데이터 파싱 함수 (식단 생성 엔진과 완벽 호환)
function parseCSV(csvText) {
    const rows = csvText.trim().split(/\r?\n/);
    const data = [];
    const typeMap = {
        '밥': 'rice', 'rice': 'rice',
        '국': 'soup', 'soup': 'soup',
        '메인': 'main1', 'main1': 'main1',
        '보조': 'side2', 'side2': 'side2',
        '김치': 'kimchi', 'kimchi': 'kimchi',
        '후식': 'dessert', 'dessert': 'dessert'
    };

    for (let i = 1; i < rows.length; i++) {
        const cols = rows[i].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
        if (cols.length < 2) continue;

        const rawType = cols[1] || '';
        const mappedType = typeMap[rawType] || rawType;

        data.push({
            name: cols[0],
            type: mappedType,
            cost: Number(cols[2]) || 0,
            calories: Number(cols[6]) || 0,
            id: cols[10] || `id_${i}`,
            amount: Number(cols[4]) || 0,
            isHot: cols[5] || 'N'
        });
    }
    return data;
}

// 앱 시작 시 데이터 호출 실행
fetchMenuData();

if (!window.appData) window.appData = { menuDB: [], mealPlans: {} };
let currentMonthDate = new Date();

function initApp() {
    loadSettings();
    renderCalendar();
    updateMetrics();
}

function startMealGeneration() {
    if (!isDataLoaded || !window.appData.menuDB || window.appData.menuDB.length === 0) {
        alert("데이터를 로딩하는 중입니다. 1~2초 후 다시 시도해 주세요.");
        return;
    }
    document.getElementById('loading-overlay').style.display = 'flex';
    setTimeout(() => {
        autoGenerateMeals();
        document.getElementById('loading-overlay').style.display = 'none';
        alert("✨ 구글 시트 데이터를 기반으로 식단 작성을 마쳤습니다!");
    }, 800);
}

function autoGenerateMeals() {
    let year = currentMonthDate.getFullYear();
    let month = currentMonthDate.getMonth();
    let totalDays = new Date(year, month + 1, 0).getDate();
    
    // 식단 생성 시 중복 방지 로직
    let previousDayNames = new Set();

    for (let i = 1; i <= totalDays; i++) {
        let dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        let d = new Date(year, month, i);
        if (d.getDay() === 0 || d.getDay() === 6) continue; // 주말 제외

        let newMeal = {};
        let todayUsed = new Set();

        const pick = (type) => {
            let list = window.appData.menuDB.filter(m => m.type === type && !previousDayNames.has(m.name));
            if (list.length === 0) list = window.appData.menuDB.filter(m => m.type === type);
            if (list.length > 0) {
                let chosen = list[Math.floor(Math.random() * list.length)];
                todayUsed.add(chosen.name);
                return chosen;
            }
            return null;
        };

        newMeal.rice = pick('rice');
        newMeal.soup = pick('soup');
        newMeal.main1 = pick('main1');
        newMeal.side2_1 = pick('side2');
        newMeal.side2_2 = pick('side2');
        newMeal.kimchi = pick('kimchi');
        newMeal.dessert = pick('dessert');

        window.appData.mealPlans[dateStr] = newMeal;
        previousDayNames = new Set(todayUsed);
    }
    renderCalendar();
    updateMetrics();
}

// --- 공통 유틸리티 함수 ---
function loadSettings() {
    const saved = localStorage.getItem('dietitianOsSettings');
    if (saved) {
        try {
            const s = JSON.parse(saved);
            if(document.getElementById('setting-cost-min')) document.getElementById('setting-cost-min').value = s.costMin || 6000;
            if(document.getElementById('setting-cost-max')) document.getElementById('setting-cost-max').value = s.costMax || 8000;
        } catch(e) {}
    }
}

function updateMetrics() {
    let totalCost = 0;
    Object.values(window.appData.mealPlans).forEach(meal => {
        Object.values(meal).forEach(item => { if(item) totalCost += (item.cost || 0); });
    });
    document.getElementById('summary-total-cost').innerText = `${totalCost.toLocaleString()}원`;
}

function renderCalendar() {
    const calendar = document.getElementById('monthly-calendar');
    if(!calendar) return;
    calendar.innerHTML = "";
    
    let year = currentMonthDate.getFullYear();
    let month = currentMonthDate.getMonth();
    document.getElementById('current-month-label').innerText = `${year}년 ${month + 1}월`;
    
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        let dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        let meal = window.appData.mealPlans[dateStr] || {};
        let html = `<div class="day-cell"><div class="date-header">${i}</div>`;
        Object.entries(meal).forEach(([key, item]) => {
            if(item) html += `<div class="draggable-meal"><span class="meal-name">${item.name}</span></div>`;
        });
        html += `</div>`;
        calendar.innerHTML += html;
    }
}

function changeMonth(offset) {
    currentMonthDate.setMonth(currentMonthDate.getMonth() + offset);
    renderCalendar();
    updateMetrics();
}

function toggleMobileMode() {
    document.body.classList.toggle('mobile-mode');
}
