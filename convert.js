const fs = require('fs');
global.window = {};
const code = fs.readFileSync('data.js', 'utf8');
eval(code);

const menuDB = window.appData.menuDB;
let csv = "메뉴명,구분,가격(원),제철(월),1회제공량(g),HOT여부(Y/N),Kcal,탄수화물(g),단백질(g),지방(g),중복방지태그,알러지번호\n";

menuDB.forEach(item => {
    let seasonality = "";
    let isTrendy = item.isTrendy ? "Y" : "N";
    let dedup = item.name;
    let allergy = "";
    csv += `${item.name},${item.type},${item.cost},${seasonality},${item.amount},${isTrendy},${item.calories},${item.carbs},${item.protein},${item.fat},${dedup},${allergy}\n`;
});

fs.writeFileSync('menu_data.csv', csv);
console.log("Converted to menu_data.csv");
