const data = {
    // 1. Menu Database (밥, 국, 메인1, 보조2, 김치, 후식)
    menuDB: [
        // RICE
        { id: 'm1', name: '현미밥', type: 'rice', amount: 200, calories: 300, carbs: 65, protein: 6, fat: 2, cost: 500, ingredients: ['현미', '쌀'], isTrendy: false },
        { id: 'm2', name: '백미밥', type: 'rice', amount: 200, calories: 310, carbs: 68, protein: 5, fat: 1, cost: 400, ingredients: ['쌀'], isTrendy: false },
        { id: 'm3', name: '흑미밥', type: 'rice', amount: 200, calories: 305, carbs: 66, protein: 6, fat: 2, cost: 550, ingredients: ['흑미', '쌀'], isTrendy: false },
        { id: 'm4', name: '잡곡밥', type: 'rice', amount: 200, calories: 290, carbs: 60, protein: 7, fat: 2, cost: 600, ingredients: ['보리', '수수', '콩', '쌀'], isTrendy: false },
        { id: 'm5', name: '봄동비빔밥', type: 'rice', amount: 350, calories: 450, carbs: 75, protein: 12, fat: 10, cost: 1500, ingredients: ['쌀', '봄동', '고추장', '참기름'], isTrendy: true },
        { id: 'm6', name: '마라볶음밥', type: 'rice', amount: 300, calories: 500, carbs: 60, protein: 15, fat: 20, cost: 1800, ingredients: ['쌀', '마라소스', '돼지고기', '파'], isTrendy: true },

        // SOUP
        { id: 's1', name: '소고기미역국', type: 'soup', amount: 250, calories: 150, carbs: 10, protein: 12, fat: 5, cost: 1200, ingredients: ['소고기', '미역', '참기름'], isTrendy: false },
        { id: 's2', name: '된장찌개', type: 'soup', amount: 250, calories: 120, carbs: 15, protein: 8, fat: 3, cost: 800, ingredients: ['두부', '애호박', '된장'], isTrendy: false },
        { id: 's3', name: '콩나물국', type: 'soup', amount: 250, calories: 50, carbs: 5, protein: 3, fat: 1, cost: 300, ingredients: ['콩나물', '파'], isTrendy: false },
        { id: 's4', name: '마라탕(미니)', type: 'soup', amount: 300, calories: 350, carbs: 20, protein: 15, fat: 25, cost: 2500, ingredients: ['마라소스', '청경채', '건두부', '소고기'], isTrendy: true },
        { id: 's5', name: '크림스프', type: 'soup', amount: 200, calories: 180, carbs: 15, protein: 4, fat: 12, cost: 700, ingredients: ['우유', '버터', '밀가루'], isTrendy: false },

        // MAIN
        { id: 'ma1', name: '제육볶음', type: 'main1', amount: 150, calories: 450, carbs: 20, protein: 30, fat: 25, cost: 2500, ingredients: ['돼지고기', '양파', '고추장'], isTrendy: false },
        { id: 'ma2', name: '닭갈비', type: 'main1', amount: 150, calories: 400, carbs: 25, protein: 28, fat: 20, cost: 2300, ingredients: ['닭고기', '양배추', '고구마'], isTrendy: false },
        { id: 'ma3', name: '가자미구이', type: 'main1', amount: 120, calories: 250, carbs: 0, protein: 25, fat: 15, cost: 1800, ingredients: ['가자미', '소금'], isTrendy: false },
        { id: 'ma4', name: '수제돈까스', type: 'main1', amount: 180, calories: 600, carbs: 40, protein: 25, fat: 35, cost: 3000, ingredients: ['돼지고기', '밀가루', '계란', '빵가루'], isTrendy: false },
        { id: 'ma5', name: '로제찜닭', type: 'main1', amount: 200, calories: 550, carbs: 35, protein: 30, fat: 25, cost: 3200, ingredients: ['닭고기', '우유', '고추장', '당면'], isTrendy: true },
        { id: 'ma6', name: '꿔바로우', type: 'main1', amount: 150, calories: 480, carbs: 45, protein: 20, fat: 22, cost: 2800, ingredients: ['돼지고기', '전분', '식초', '설탕'], isTrendy: true },

        // SIDE
        { id: 'si1', name: '시금치나물', type: 'side2', amount: 50, calories: 60, carbs: 5, protein: 3, fat: 4, cost: 500, ingredients: ['시금치', '참기름', '마늘'], isTrendy: false },
        { id: 'si2', name: '계란말이', type: 'side2', amount: 80, calories: 150, carbs: 2, protein: 10, fat: 12, cost: 800, ingredients: ['계란', '파', '당근'], isTrendy: false },
        { id: 'si3', name: '멸치볶음', type: 'side2', amount: 30, calories: 120, carbs: 10, protein: 15, fat: 5, cost: 700, ingredients: ['잔멸치', '간장', '물엿'], isTrendy: false },
        { id: 'si4', name: '두부조림', type: 'side2', amount: 80, calories: 140, carbs: 8, protein: 12, fat: 8, cost: 600, ingredients: ['두부', '간장', '파'], isTrendy: false },
        { id: 'si5', name: '어묵볶음', type: 'side2', amount: 60, calories: 110, carbs: 12, protein: 8, fat: 5, cost: 400, ingredients: ['어묵', '간장', '양파'], isTrendy: false },
        { id: 'si6', name: '진미채무침', type: 'side2', amount: 40, calories: 130, carbs: 15, protein: 10, fat: 4, cost: 900, ingredients: ['진미채', '고추장', '물엿'], isTrendy: false },
        { id: 'si7', name: '감자채볶음', type: 'side2', amount: 70, calories: 90, carbs: 18, protein: 2, fat: 3, cost: 450, ingredients: ['감자', '당근', '소금'], isTrendy: false },
        { id: 'si8', name: '콘샐러드', type: 'side2', amount: 80, calories: 160, carbs: 15, protein: 3, fat: 10, cost: 650, ingredients: ['옥수수', '마요네즈', '당근'], isTrendy: false },
        { id: 'si9', name: '연두부샐러드', type: 'side2', amount: 100, calories: 80, carbs: 4, protein: 8, fat: 4, cost: 550, ingredients: ['연두부', '어린잎', '오리엔탈드레싱'], isTrendy: true },
        { id: 'si10', name: '타코야끼', type: 'side2', amount: 90, calories: 210, carbs: 25, protein: 6, fat: 10, cost: 1100, ingredients: ['밀가루', '문어', '가쓰오부시', '마요네즈'], isTrendy: true },

        // KIMCHI
        { id: 'k1', name: '배추김치', type: 'kimchi', amount: 40, calories: 20, carbs: 4, protein: 1, fat: 0, cost: 300, ingredients: ['배추', '고춧가루', '마늘'], isTrendy: false },
        { id: 'k2', name: '깍두기', type: 'kimchi', amount: 40, calories: 25, carbs: 5, protein: 1, fat: 0, cost: 350, ingredients: ['무', '고춧가루'], isTrendy: false },
        { id: 'k3', name: '열무김치', type: 'kimchi', amount: 40, calories: 18, carbs: 3, protein: 1, fat: 0, cost: 320, ingredients: ['열무', '고춧가루'], isTrendy: false },
        { id: 'k4', name: '오이소박이', type: 'kimchi', amount: 50, calories: 30, carbs: 6, protein: 1, fat: 0, cost: 400, ingredients: ['오이', '부추', '고춧가루'], isTrendy: false },

        // DESSERT (New Category)
        { id: 'd1', name: '두쫀쿠', type: 'dessert', amount: 70, calories: 320, carbs: 40, protein: 4, fat: 16, cost: 1500, ingredients: ['두바이초콜릿', '밀가루', '버터', '설탕'], isTrendy: true },
        { id: 'd2', name: '요구르트', type: 'dessert', amount: 65, calories: 50, carbs: 12, protein: 1, fat: 0, cost: 200, ingredients: ['우유', '유산균'], isTrendy: false },
        { id: 'd3', name: '제철과일(사과)', type: 'dessert', amount: 100, calories: 57, carbs: 15, protein: 0, fat: 0, cost: 600, ingredients: ['사과'], isTrendy: false },
        { id: 'd4', name: '탕후루(딸기)', type: 'dessert', amount: 50, calories: 150, carbs: 35, protein: 1, fat: 0, cost: 1200, ingredients: ['딸기', '설탕', '물엿'], isTrendy: true },
        { id: 'd5', name: '매실차', type: 'dessert', amount: 150, calories: 40, carbs: 10, protein: 0, fat: 0, cost: 300, ingredients: ['매실청', '물'], isTrendy: false }
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
    dessert: data.menuDB.find(m => m.id === 'd1') // Added dessert
};

// Export for module usage or attach to window for simple script tags
if (typeof window !== 'undefined') {
    window.appData = data;
}
