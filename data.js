const data = {
    // 1. Menu Database (밥, 국, 메인1, 보조2, 김치, 기타)
    menuDB: [
        { id: 'm1', name: '현미밥', type: 'rice', calories: 300, carbs: 65, protein: 6, fat: 2, cost: 500, ingredients: ['현미', '쌀'] },
        { id: 'm2', name: '백미밥', type: 'rice', calories: 310, carbs: 68, protein: 5, fat: 1, cost: 400, ingredients: ['쌀'] },
        { id: 'm3', name: '흑미밥', type: 'rice', calories: 305, carbs: 66, protein: 6, fat: 2, cost: 550, ingredients: ['흑미', '쌀'] },

        { id: 's1', name: '소고기미역국', type: 'soup', calories: 150, carbs: 10, protein: 12, fat: 5, cost: 1200, ingredients: ['소고기', '미역', '참기름'] },
        { id: 's2', name: '된장찌개', type: 'soup', calories: 120, carbs: 15, protein: 8, fat: 3, cost: 800, ingredients: ['두부', '애호박', '된장'] },
        { id: 's3', name: '콩나물국', type: 'soup', calories: 50, carbs: 5, protein: 3, fat: 1, cost: 300, ingredients: ['콩나물', '파'] },

        { id: 'ma1', name: '제육볶음', type: 'main1', calories: 450, carbs: 20, protein: 30, fat: 25, cost: 2500, ingredients: ['돼지고기', '양파', '고추장'] },
        { id: 'ma2', name: '닭갈비', type: 'main1', calories: 400, carbs: 25, protein: 28, fat: 20, cost: 2300, ingredients: ['닭고기', '양배추', '고구마'] },
        { id: 'ma3', name: '가자미구이', type: 'main1', calories: 250, carbs: 0, protein: 25, fat: 15, cost: 1800, ingredients: ['가자미', '소금'] },

        { id: 'si1', name: '시금치나물', type: 'side2', calories: 60, carbs: 5, protein: 3, fat: 4, cost: 500, ingredients: ['시금치', '참기름', '마늘'] },
        { id: 'si2', name: '계란말이', type: 'side2', calories: 150, carbs: 2, protein: 10, fat: 12, cost: 800, ingredients: ['계란', '파', '당근'] },
        { id: 'si3', name: '멸치볶음', type: 'side2', calories: 120, carbs: 10, protein: 15, fat: 5, cost: 700, ingredients: ['잔멸치', '간장', '물엿'] },
        { id: 'si4', name: '두부조림', type: 'side2', calories: 140, carbs: 8, protein: 12, fat: 8, cost: 600, ingredients: ['두부', '간장', '파'] },

        { id: 'k1', name: '배추김치', type: 'kimchi', calories: 20, carbs: 4, protein: 1, fat: 0, cost: 300, ingredients: ['배추', '고춧가루', '마늘'] },
        { id: 'k2', name: '깍두기', type: 'kimchi', calories: 25, carbs: 5, protein: 1, fat: 0, cost: 350, ingredients: ['무', '고춧가루'] },

        { id: 'o1', name: '요구르트', type: 'other', calories: 80, carbs: 15, protein: 2, fat: 1, cost: 400, ingredients: ['우유', '유산균'] },
        { id: 'o2', name: '제철과일(사과)', type: 'other', calories: 100, carbs: 25, protein: 0, fat: 0, cost: 800, ingredients: ['사과'] }
    ],

    // 2. Inventory & Ingredients
    inventoryDB: [
        { id: 'i1', name: '돼지고기', stock: 15, unit: 'kg', expiryDate: '2023-11-05', status: 'warning' },
        { id: 'i2', name: '쌀', stock: 100, unit: 'kg', expiryDate: '2024-05-01', status: 'good' },
        { id: 'i3', name: '배추', stock: 5, unit: 'kg', expiryDate: '2023-10-30', status: 'critical' },
        { id: 'i4', name: '계란', stock: 30, unit: '판', expiryDate: '2023-11-10', status: 'good' }
    ],

    // 3. Hygiene Checklist (Today)
    hygieneChecklist: [
        { id: 'h1', task: '조리원 개인위생 점검 (복장, 건강상태)', completed: true },
        { id: 'h2', task: '식재료 검수 및 온도 기록', completed: true },
        { id: 'h3', task: '조리도구 (칼, 도마) 교차오염 방지 구분 사용', completed: false },
        { id: 'h4', task: '배식 전 음식 중심온도 측정', completed: false },
        { id: 'h5', task: '보존식 보관 (영하 18도 이하, 144시간)', completed: false }
    ],

    // 4. Patients / Special Needs
    patientsDB: [
        { id: 'p1', name: '김철수', allergies: ['돼지고기'], diseases: ['고혈압'] },
        { id: 'p2', name: '이영희', allergies: ['계란', '우유'], diseases: [] },
        { id: 'p3', name: '박민수', allergies: [], diseases: ['당뇨'] }
    ],

    // 5. Dashboard Summary Data
    dashboardStats: {
        pendingOrders: 3,
        satisfactionScores: [85, 88, 90, 87, 92, 95, 93], // Last 7 days
        labels: ['월', '화', '수', '목', '금', '토', '일']
    },

    // 6. Planned Meals Calendar Data
    mealPlans: {
        // "YYYY-MM-DD" : { ... }
    }
};

// Initialize today's meal if not exists
const today = new Date().toISOString().split('T')[0];
data.mealPlans[today] = {
    rice: data.menuDB.find(m => m.id === 'm1'),
    soup: data.menuDB.find(m => m.id === 's1'),
    main1: data.menuDB.find(m => m.id === 'ma1'),
    side2_1: data.menuDB.find(m => m.id === 'si1'),
    side2_2: data.menuDB.find(m => m.id === 'si2'),
    kimchi: data.menuDB.find(m => m.id === 'k1'),
    other: data.menuDB.find(m => m.id === 'o1')
};

// Export for module usage or attach to window for simple script tags
if (typeof window !== 'undefined') {
    window.appData = data;
}
