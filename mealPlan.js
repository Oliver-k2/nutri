// [1] 구글 시트 데이터 URL 설정
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfie5Y4fmfLy08JljM5kZ2X8--QwptiH1WrXfz1X5PBIFX5nuEsaM52vK0MnAC8zh0HQkVO07Jbilm/pub?output=csv";

window.appData = { menuDB: [] }; // 데이터 저장소 초기화

// [2] 데이터 로드 및 매핑 함수
async function fetchMenuData() {
    try {
        const response = await fetch(GOOGLE_SHEET_URL);
        const csvText = await response.text();
        
        // CSV 파싱 (Papaparse 같은 라이브러리가 없다면 간단히 줄 단위로 분리)
        const rows = csvText.split('\n').map(row => row.split(','));
        const headers = rows[0].map(h => h.trim());
        
        const jsonData = rows.slice(1).map(row => {
            let item = {};
            row.forEach((cell, i) => {
                const header = headers[i];
                const value = cell ? cell.trim() : "";
                
                // [핵심] 한글 열 이름을 영어 변수명으로 강제 매핑
                if (header === '메뉴명') item.name = value;
                else if (header === '구분') item.type = value;
                else if (header === '가격') item.cost = parseInt(value) || 0;
                else if (header === 'Kcal') item.calories = parseInt(value) || 0;
                else if (header === '탄수화물') item.carbs = parseFloat(value) || 0;
                else if (header === '단백질') item.protein = parseFloat(value) || 0;
                else if (header === '지방') item.fat = parseFloat(value) || 0;
                else item[header] = value;
            });
            return item;
        }).filter(item => item.name); // 메뉴명이 있는 데이터만 추출

        window.appData.menuDB = jsonData;
        console.log("데이터 매핑 완료:", window.appData.menuDB);
        
        // 데이터 로드 완료 후 버튼 활성화 로직 호출 (기존 함수명에 맞춰 수정 필요)
        if (typeof initApp === "function") initApp();
        
    } catch (error) {
        console.error("데이터 로드 실패:", error);
        alert("데이터를 가져오는 데 실패했습니다.");
    }
}

// [3] 페이지 로드 시 즉각 실행
document.addEventListener('DOMContentLoaded', fetchMenuData);

// [4] 버튼 클릭 시 체크 로직 (기존 버튼 ID 확인 필요)
document.getElementById('generateBtn')?.addEventListener('click', (e) => {
    if (window.appData.menuDB.length === 0) {
        e.preventDefault();
        alert("데이터 로딩 중입니다. 잠시만 기다려 주세요.");
    }
});