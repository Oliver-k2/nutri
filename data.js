const data = {
    // 1. Menu Database (밥, 국, 메인1, 보조2, 김치, 후식)
    menuDB: [
        {
                "id": "r1",
                "name": "쌀밥",
                "type": "rice",
                "amount": 200,
                "calories": 319,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r2",
                "name": "현미밥",
                "type": "rice",
                "amount": 200,
                "calories": 283,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r3",
                "name": "흑미밥",
                "type": "rice",
                "amount": 200,
                "calories": 297,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r4",
                "name": "잡곡밥",
                "type": "rice",
                "amount": 200,
                "calories": 313,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r5",
                "name": "보리밥",
                "type": "rice",
                "amount": 200,
                "calories": 329,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r6",
                "name": "기장밥",
                "type": "rice",
                "amount": 200,
                "calories": 272,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r7",
                "name": "차조밥",
                "type": "rice",
                "amount": 200,
                "calories": 322,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r8",
                "name": "수수밥",
                "type": "rice",
                "amount": 200,
                "calories": 270,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r9",
                "name": "콩밥",
                "type": "rice",
                "amount": 200,
                "calories": 286,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r10",
                "name": "완두콩밥",
                "type": "rice",
                "amount": 200,
                "calories": 285,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r11",
                "name": "팥밥",
                "type": "rice",
                "amount": 200,
                "calories": 314,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r12",
                "name": "영양굴밥",
                "type": "rice",
                "amount": 200,
                "calories": 313,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r13",
                "name": "콩나물밥",
                "type": "rice",
                "amount": 200,
                "calories": 307,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r14",
                "name": "무밥",
                "type": "rice",
                "amount": 200,
                "calories": 292,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r15",
                "name": "버섯밥",
                "type": "rice",
                "amount": 200,
                "calories": 305,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r16",
                "name": "곤드레밥",
                "type": "rice",
                "amount": 200,
                "calories": 288,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r17",
                "name": "취나물밥",
                "type": "rice",
                "amount": 200,
                "calories": 288,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r18",
                "name": "우엉밥",
                "type": "rice",
                "amount": 200,
                "calories": 306,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r19",
                "name": "연잎밥",
                "type": "rice",
                "amount": 200,
                "calories": 271,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r20",
                "name": "대나무통밥",
                "type": "rice",
                "amount": 200,
                "calories": 296,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r21",
                "name": "김치볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 474,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1610,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r22",
                "name": "새우볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 405,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1590,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r23",
                "name": "계란볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 437,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r24",
                "name": "햄야채볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 455,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r25",
                "name": "마늘볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 460,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1580,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r26",
                "name": "카레볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 484,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1440,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r27",
                "name": "소고기볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 415,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1600,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r28",
                "name": "베이컨볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 490,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1580,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r29",
                "name": "참치볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 479,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1390,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r30",
                "name": "날치알볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 428,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1590,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r31",
                "name": "게살볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 417,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1380,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r32",
                "name": "파인애플볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 445,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1440,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r33",
                "name": "나시고랭",
                "type": "rice",
                "amount": 250,
                "calories": 456,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r34",
                "name": "마라볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 434,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r35",
                "name": "제육덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 540,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2180,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r36",
                "name": "오징어덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 615,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r37",
                "name": "낙지덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 544,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r38",
                "name": "불고기덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 628,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2110,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r39",
                "name": "마파두부덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 568,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2180,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r40",
                "name": "카레라이스",
                "type": "rice",
                "amount": 350,
                "calories": 617,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1900,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r41",
                "name": "하이라이스",
                "type": "rice",
                "amount": 350,
                "calories": 557,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1880,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r42",
                "name": "짜장밥",
                "type": "rice",
                "amount": 350,
                "calories": 593,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1960,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r43",
                "name": "마파두부밥",
                "type": "rice",
                "amount": 350,
                "calories": 607,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1880,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r44",
                "name": "잡채밥",
                "type": "rice",
                "amount": 350,
                "calories": 597,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2000,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r45",
                "name": "유산슬밥",
                "type": "rice",
                "amount": 350,
                "calories": 600,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2040,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r46",
                "name": "새우볶음밥",
                "type": "rice",
                "amount": 350,
                "calories": 629,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1880,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r47",
                "name": "가츠동",
                "type": "rice",
                "amount": 350,
                "calories": 629,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2100,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r48",
                "name": "규동",
                "type": "rice",
                "amount": 350,
                "calories": 604,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r49",
                "name": "오야꼬동",
                "type": "rice",
                "amount": 350,
                "calories": 640,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2130,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r50",
                "name": "텐동",
                "type": "rice",
                "amount": 350,
                "calories": 542,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1890,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r51",
                "name": "마요덮밥(참치)",
                "type": "rice",
                "amount": 350,
                "calories": 573,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1930,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r52",
                "name": "마요덮밥(스팸)",
                "type": "rice",
                "amount": 350,
                "calories": 580,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r53",
                "name": "봄동비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 606,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2100,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r54",
                "name": "산채비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 567,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2100,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r55",
                "name": "육회비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 587,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r56",
                "name": "돌솥비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 571,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1940,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r57",
                "name": "새싹비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 612,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r58",
                "name": "쌀밥",
                "type": "rice",
                "amount": 200,
                "calories": 270,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r59",
                "name": "현미밥",
                "type": "rice",
                "amount": 200,
                "calories": 285,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r60",
                "name": "흑미밥",
                "type": "rice",
                "amount": 200,
                "calories": 326,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r61",
                "name": "잡곡밥",
                "type": "rice",
                "amount": 200,
                "calories": 317,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r62",
                "name": "보리밥",
                "type": "rice",
                "amount": 200,
                "calories": 281,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r63",
                "name": "기장밥",
                "type": "rice",
                "amount": 200,
                "calories": 271,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r64",
                "name": "차조밥",
                "type": "rice",
                "amount": 200,
                "calories": 276,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r65",
                "name": "수수밥",
                "type": "rice",
                "amount": 200,
                "calories": 324,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r66",
                "name": "콩밥",
                "type": "rice",
                "amount": 200,
                "calories": 273,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r67",
                "name": "완두콩밥",
                "type": "rice",
                "amount": 200,
                "calories": 302,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r68",
                "name": "팥밥",
                "type": "rice",
                "amount": 200,
                "calories": 290,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r69",
                "name": "영양굴밥",
                "type": "rice",
                "amount": 200,
                "calories": 275,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r70",
                "name": "콩나물밥",
                "type": "rice",
                "amount": 200,
                "calories": 309,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r71",
                "name": "무밥",
                "type": "rice",
                "amount": 200,
                "calories": 271,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r72",
                "name": "버섯밥",
                "type": "rice",
                "amount": 200,
                "calories": 301,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r73",
                "name": "곤드레밥",
                "type": "rice",
                "amount": 200,
                "calories": 284,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r74",
                "name": "취나물밥",
                "type": "rice",
                "amount": 200,
                "calories": 283,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r75",
                "name": "우엉밥",
                "type": "rice",
                "amount": 200,
                "calories": 321,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r76",
                "name": "연잎밥",
                "type": "rice",
                "amount": 200,
                "calories": 281,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r77",
                "name": "대나무통밥",
                "type": "rice",
                "amount": 200,
                "calories": 286,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r78",
                "name": "김치볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 483,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1580,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r79",
                "name": "새우볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 444,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1550,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r80",
                "name": "계란볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 491,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1410,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r81",
                "name": "햄야채볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 478,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1430,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r82",
                "name": "마늘볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 483,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r83",
                "name": "카레볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 435,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1370,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r84",
                "name": "소고기볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 428,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1380,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r85",
                "name": "베이컨볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 408,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1570,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r86",
                "name": "참치볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 411,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1610,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r87",
                "name": "날치알볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 493,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r88",
                "name": "게살볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 451,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1430,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r89",
                "name": "파인애플볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 445,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r90",
                "name": "나시고랭",
                "type": "rice",
                "amount": 250,
                "calories": 469,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1440,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r91",
                "name": "마라볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 412,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r92",
                "name": "제육덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 544,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2140,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r93",
                "name": "오징어덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 619,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r94",
                "name": "낙지덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 635,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2000,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r95",
                "name": "불고기덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 547,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2110,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r96",
                "name": "마파두부덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 636,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2090,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r97",
                "name": "카레라이스",
                "type": "rice",
                "amount": 350,
                "calories": 658,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2040,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r98",
                "name": "하이라이스",
                "type": "rice",
                "amount": 350,
                "calories": 567,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1910,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r99",
                "name": "짜장밥",
                "type": "rice",
                "amount": 350,
                "calories": 558,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2000,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r100",
                "name": "마파두부밥",
                "type": "rice",
                "amount": 350,
                "calories": 636,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r101",
                "name": "잡채밥",
                "type": "rice",
                "amount": 350,
                "calories": 648,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r102",
                "name": "유산슬밥",
                "type": "rice",
                "amount": 350,
                "calories": 590,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2100,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r103",
                "name": "새우볶음밥",
                "type": "rice",
                "amount": 350,
                "calories": 570,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r104",
                "name": "가츠동",
                "type": "rice",
                "amount": 350,
                "calories": 590,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1990,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r105",
                "name": "규동",
                "type": "rice",
                "amount": 350,
                "calories": 568,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1970,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r106",
                "name": "오야꼬동",
                "type": "rice",
                "amount": 350,
                "calories": 540,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2130,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r107",
                "name": "텐동",
                "type": "rice",
                "amount": 350,
                "calories": 649,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r108",
                "name": "마요덮밥(참치)",
                "type": "rice",
                "amount": 350,
                "calories": 629,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1880,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r109",
                "name": "마요덮밥(스팸)",
                "type": "rice",
                "amount": 350,
                "calories": 586,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1950,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r110",
                "name": "봄동비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 651,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r111",
                "name": "산채비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 560,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2000,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r112",
                "name": "육회비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 541,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2100,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r113",
                "name": "돌솥비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 659,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r114",
                "name": "새싹비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 628,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1900,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r115",
                "name": "쌀밥",
                "type": "rice",
                "amount": 200,
                "calories": 287,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r116",
                "name": "현미밥",
                "type": "rice",
                "amount": 200,
                "calories": 319,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r117",
                "name": "흑미밥",
                "type": "rice",
                "amount": 200,
                "calories": 301,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r118",
                "name": "잡곡밥",
                "type": "rice",
                "amount": 200,
                "calories": 329,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r119",
                "name": "보리밥",
                "type": "rice",
                "amount": 200,
                "calories": 301,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r120",
                "name": "기장밥",
                "type": "rice",
                "amount": 200,
                "calories": 324,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r121",
                "name": "차조밥",
                "type": "rice",
                "amount": 200,
                "calories": 301,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r122",
                "name": "수수밥",
                "type": "rice",
                "amount": 200,
                "calories": 310,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r123",
                "name": "콩밥",
                "type": "rice",
                "amount": 200,
                "calories": 285,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r124",
                "name": "완두콩밥",
                "type": "rice",
                "amount": 200,
                "calories": 317,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r125",
                "name": "팥밥",
                "type": "rice",
                "amount": 200,
                "calories": 317,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r126",
                "name": "영양굴밥",
                "type": "rice",
                "amount": 200,
                "calories": 301,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r127",
                "name": "콩나물밥",
                "type": "rice",
                "amount": 200,
                "calories": 297,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r128",
                "name": "무밥",
                "type": "rice",
                "amount": 200,
                "calories": 320,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r129",
                "name": "버섯밥",
                "type": "rice",
                "amount": 200,
                "calories": 275,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r130",
                "name": "곤드레밥",
                "type": "rice",
                "amount": 200,
                "calories": 304,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r131",
                "name": "취나물밥",
                "type": "rice",
                "amount": 200,
                "calories": 274,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r132",
                "name": "우엉밥",
                "type": "rice",
                "amount": 200,
                "calories": 321,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r133",
                "name": "연잎밥",
                "type": "rice",
                "amount": 200,
                "calories": 314,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r134",
                "name": "대나무통밥",
                "type": "rice",
                "amount": 200,
                "calories": 329,
                "carbs": 65,
                "protein": 6,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r135",
                "name": "김치볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 486,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1580,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r136",
                "name": "새우볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 427,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r137",
                "name": "계란볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 472,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r138",
                "name": "햄야채볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 485,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r139",
                "name": "마늘볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 472,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1400,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r140",
                "name": "카레볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 433,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r141",
                "name": "소고기볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 435,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1600,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r142",
                "name": "베이컨볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 484,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1420,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r143",
                "name": "참치볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 435,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r144",
                "name": "날치알볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 451,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r145",
                "name": "게살볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 465,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r146",
                "name": "파인애플볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 473,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1400,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r147",
                "name": "나시고랭",
                "type": "rice",
                "amount": 250,
                "calories": 494,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r148",
                "name": "마라볶음밥",
                "type": "rice",
                "amount": 250,
                "calories": 488,
                "carbs": 70,
                "protein": 10,
                "fat": 15,
                "cost": 1470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r149",
                "name": "제육덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 657,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2040,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r150",
                "name": "오징어덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 558,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2190,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r151",
                "name": "낙지덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 561,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r152",
                "name": "불고기덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 574,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r153",
                "name": "마파두부덮밥",
                "type": "rice",
                "amount": 350,
                "calories": 593,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2080,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r154",
                "name": "카레라이스",
                "type": "rice",
                "amount": 350,
                "calories": 638,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1890,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r155",
                "name": "하이라이스",
                "type": "rice",
                "amount": 350,
                "calories": 570,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1900,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r156",
                "name": "짜장밥",
                "type": "rice",
                "amount": 350,
                "calories": 574,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r157",
                "name": "마파두부밥",
                "type": "rice",
                "amount": 350,
                "calories": 581,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2120,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r158",
                "name": "잡채밥",
                "type": "rice",
                "amount": 350,
                "calories": 626,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r159",
                "name": "유산슬밥",
                "type": "rice",
                "amount": 350,
                "calories": 572,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r160",
                "name": "새우볶음밥",
                "type": "rice",
                "amount": 350,
                "calories": 555,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r161",
                "name": "가츠동",
                "type": "rice",
                "amount": 350,
                "calories": 561,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r162",
                "name": "규동",
                "type": "rice",
                "amount": 350,
                "calories": 647,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1970,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r163",
                "name": "오야꼬동",
                "type": "rice",
                "amount": 350,
                "calories": 641,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2040,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r164",
                "name": "텐동",
                "type": "rice",
                "amount": 350,
                "calories": 560,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r165",
                "name": "마요덮밥(참치)",
                "type": "rice",
                "amount": 350,
                "calories": 557,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r166",
                "name": "마요덮밥(스팸)",
                "type": "rice",
                "amount": 350,
                "calories": 582,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r167",
                "name": "봄동비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 609,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "r168",
                "name": "산채비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 559,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1900,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r169",
                "name": "육회비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 583,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2030,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r170",
                "name": "돌솥비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 652,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 1880,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "r171",
                "name": "새싹비빔밥",
                "type": "rice",
                "amount": 350,
                "calories": 594,
                "carbs": 85,
                "protein": 15,
                "fat": 20,
                "cost": 2120,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s172",
                "name": "된장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 144,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s173",
                "name": "김치찌개",
                "type": "soup",
                "amount": 250,
                "calories": 141,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s174",
                "name": "순두부찌개",
                "type": "soup",
                "amount": 250,
                "calories": 139,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s175",
                "name": "부대찌개",
                "type": "soup",
                "amount": 250,
                "calories": 156,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s176",
                "name": "동태찌개",
                "type": "soup",
                "amount": 250,
                "calories": 163,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s177",
                "name": "참치김치찌개",
                "type": "soup",
                "amount": 250,
                "calories": 141,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s178",
                "name": "돼지고기김치찌개",
                "type": "soup",
                "amount": 250,
                "calories": 146,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s179",
                "name": "차돌된장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 143,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s180",
                "name": "해물된장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 158,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s181",
                "name": "청국장",
                "type": "soup",
                "amount": 250,
                "calories": 152,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s182",
                "name": "비지찌개",
                "type": "soup",
                "amount": 250,
                "calories": 146,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s183",
                "name": "고추장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 164,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s184",
                "name": "애호박찌개",
                "type": "soup",
                "amount": 250,
                "calories": 151,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s185",
                "name": "콩나물국",
                "type": "soup",
                "amount": 250,
                "calories": 86,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s186",
                "name": "무국",
                "type": "soup",
                "amount": 250,
                "calories": 76,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s187",
                "name": "소고기무국",
                "type": "soup",
                "amount": 250,
                "calories": 78,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s188",
                "name": "미역국",
                "type": "soup",
                "amount": 250,
                "calories": 73,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s189",
                "name": "소고기미역국",
                "type": "soup",
                "amount": 250,
                "calories": 82,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s190",
                "name": "홍합미역국",
                "type": "soup",
                "amount": 250,
                "calories": 83,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s191",
                "name": "조개미역국",
                "type": "soup",
                "amount": 250,
                "calories": 83,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s192",
                "name": "황태국",
                "type": "soup",
                "amount": 250,
                "calories": 85,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s193",
                "name": "북어국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s194",
                "name": "시금치국",
                "type": "soup",
                "amount": 250,
                "calories": 74,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s195",
                "name": "아욱국",
                "type": "soup",
                "amount": 250,
                "calories": 84,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s196",
                "name": "근대국",
                "type": "soup",
                "amount": 250,
                "calories": 73,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s197",
                "name": "배추국",
                "type": "soup",
                "amount": 250,
                "calories": 85,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s198",
                "name": "얼갈이된장국",
                "type": "soup",
                "amount": 250,
                "calories": 84,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s199",
                "name": "어묵국",
                "type": "soup",
                "amount": 250,
                "calories": 77,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s200",
                "name": "계란국",
                "type": "soup",
                "amount": 250,
                "calories": 77,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s201",
                "name": "만두국",
                "type": "soup",
                "amount": 250,
                "calories": 84,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s202",
                "name": "떡국",
                "type": "soup",
                "amount": 250,
                "calories": 75,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s203",
                "name": "떡만두국",
                "type": "soup",
                "amount": 250,
                "calories": 74,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s204",
                "name": "수제비국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s205",
                "name": "칼국수",
                "type": "soup",
                "amount": 250,
                "calories": 85,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s206",
                "name": "우동국물",
                "type": "soup",
                "amount": 250,
                "calories": 84,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s207",
                "name": "잔치국수",
                "type": "soup",
                "amount": 250,
                "calories": 83,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s208",
                "name": "맑은감자국",
                "type": "soup",
                "amount": 250,
                "calories": 80,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s209",
                "name": "맑은순두부국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s210",
                "name": "재첩국",
                "type": "soup",
                "amount": 250,
                "calories": 87,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s211",
                "name": "올갱이국",
                "type": "soup",
                "amount": 250,
                "calories": 72,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s212",
                "name": "육개장",
                "type": "soup",
                "amount": 300,
                "calories": 363,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s213",
                "name": "닭개장",
                "type": "soup",
                "amount": 300,
                "calories": 368,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2680,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s214",
                "name": "갈비탕",
                "type": "soup",
                "amount": 300,
                "calories": 337,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s215",
                "name": "설렁탕",
                "type": "soup",
                "amount": 300,
                "calories": 371,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2340,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s216",
                "name": "곰탕",
                "type": "soup",
                "amount": 300,
                "calories": 323,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2420,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s217",
                "name": "꼬리곰탕",
                "type": "soup",
                "amount": 300,
                "calories": 379,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2360,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s218",
                "name": "도가니탕",
                "type": "soup",
                "amount": 300,
                "calories": 332,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s219",
                "name": "삼계탕",
                "type": "soup",
                "amount": 300,
                "calories": 368,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s220",
                "name": "반계탕",
                "type": "soup",
                "amount": 300,
                "calories": 323,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2420,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s221",
                "name": "오리탕",
                "type": "soup",
                "amount": 300,
                "calories": 340,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2420,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s222",
                "name": "추어탕",
                "type": "soup",
                "amount": 300,
                "calories": 319,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2380,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s223",
                "name": "감자탕",
                "type": "soup",
                "amount": 300,
                "calories": 369,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s224",
                "name": "뼈해장국",
                "type": "soup",
                "amount": 300,
                "calories": 324,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s225",
                "name": "순대국",
                "type": "soup",
                "amount": 300,
                "calories": 371,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2390,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s226",
                "name": "돼지국밥",
                "type": "soup",
                "amount": 300,
                "calories": 330,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2590,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s227",
                "name": "소머리국밥",
                "type": "soup",
                "amount": 300,
                "calories": 329,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2610,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s228",
                "name": "내장탕",
                "type": "soup",
                "amount": 300,
                "calories": 365,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s229",
                "name": "선지해장국",
                "type": "soup",
                "amount": 300,
                "calories": 337,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s230",
                "name": "우거지해장국",
                "type": "soup",
                "amount": 300,
                "calories": 325,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s231",
                "name": "마라탕",
                "type": "soup",
                "amount": 300,
                "calories": 329,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s232",
                "name": "짬뽕국",
                "type": "soup",
                "amount": 300,
                "calories": 339,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s233",
                "name": "마라짬뽕",
                "type": "soup",
                "amount": 300,
                "calories": 326,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s234",
                "name": "나가사키짬뽕",
                "type": "soup",
                "amount": 300,
                "calories": 320,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2560,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s235",
                "name": "크림스프",
                "type": "soup",
                "amount": 200,
                "calories": 212,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 920,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s236",
                "name": "양송이스프",
                "type": "soup",
                "amount": 200,
                "calories": 193,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 920,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s237",
                "name": "콘스프",
                "type": "soup",
                "amount": 200,
                "calories": 192,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 1000,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s238",
                "name": "단호박스프",
                "type": "soup",
                "amount": 200,
                "calories": 214,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 950,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s239",
                "name": "브로콜리스프",
                "type": "soup",
                "amount": 200,
                "calories": 212,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 1010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s240",
                "name": "토마토스프",
                "type": "soup",
                "amount": 200,
                "calories": 182,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 920,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s241",
                "name": "어니언스프",
                "type": "soup",
                "amount": 200,
                "calories": 200,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 950,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s242",
                "name": "클램차우더",
                "type": "soup",
                "amount": 200,
                "calories": 192,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 960,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s243",
                "name": "굴라쉬",
                "type": "soup",
                "amount": 200,
                "calories": 193,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 1020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s244",
                "name": "된장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 139,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s245",
                "name": "김치찌개",
                "type": "soup",
                "amount": 250,
                "calories": 136,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s246",
                "name": "순두부찌개",
                "type": "soup",
                "amount": 250,
                "calories": 152,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s247",
                "name": "부대찌개",
                "type": "soup",
                "amount": 250,
                "calories": 155,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s248",
                "name": "동태찌개",
                "type": "soup",
                "amount": 250,
                "calories": 146,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s249",
                "name": "참치김치찌개",
                "type": "soup",
                "amount": 250,
                "calories": 149,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s250",
                "name": "돼지고기김치찌개",
                "type": "soup",
                "amount": 250,
                "calories": 141,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s251",
                "name": "차돌된장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 163,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s252",
                "name": "해물된장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 159,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s253",
                "name": "청국장",
                "type": "soup",
                "amount": 250,
                "calories": 135,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s254",
                "name": "비지찌개",
                "type": "soup",
                "amount": 250,
                "calories": 147,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s255",
                "name": "고추장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 152,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s256",
                "name": "애호박찌개",
                "type": "soup",
                "amount": 250,
                "calories": 144,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s257",
                "name": "콩나물국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s258",
                "name": "무국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s259",
                "name": "소고기무국",
                "type": "soup",
                "amount": 250,
                "calories": 78,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s260",
                "name": "미역국",
                "type": "soup",
                "amount": 250,
                "calories": 86,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s261",
                "name": "소고기미역국",
                "type": "soup",
                "amount": 250,
                "calories": 86,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s262",
                "name": "홍합미역국",
                "type": "soup",
                "amount": 250,
                "calories": 74,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s263",
                "name": "조개미역국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s264",
                "name": "황태국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s265",
                "name": "북어국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s266",
                "name": "시금치국",
                "type": "soup",
                "amount": 250,
                "calories": 79,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s267",
                "name": "아욱국",
                "type": "soup",
                "amount": 250,
                "calories": 83,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s268",
                "name": "근대국",
                "type": "soup",
                "amount": 250,
                "calories": 73,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s269",
                "name": "배추국",
                "type": "soup",
                "amount": 250,
                "calories": 76,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s270",
                "name": "얼갈이된장국",
                "type": "soup",
                "amount": 250,
                "calories": 78,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s271",
                "name": "어묵국",
                "type": "soup",
                "amount": 250,
                "calories": 84,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s272",
                "name": "계란국",
                "type": "soup",
                "amount": 250,
                "calories": 74,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s273",
                "name": "만두국",
                "type": "soup",
                "amount": 250,
                "calories": 83,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s274",
                "name": "떡국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s275",
                "name": "떡만두국",
                "type": "soup",
                "amount": 250,
                "calories": 86,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s276",
                "name": "수제비국",
                "type": "soup",
                "amount": 250,
                "calories": 78,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s277",
                "name": "칼국수",
                "type": "soup",
                "amount": 250,
                "calories": 82,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s278",
                "name": "우동국물",
                "type": "soup",
                "amount": 250,
                "calories": 87,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s279",
                "name": "잔치국수",
                "type": "soup",
                "amount": 250,
                "calories": 84,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s280",
                "name": "맑은감자국",
                "type": "soup",
                "amount": 250,
                "calories": 80,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s281",
                "name": "맑은순두부국",
                "type": "soup",
                "amount": 250,
                "calories": 78,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s282",
                "name": "재첩국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s283",
                "name": "올갱이국",
                "type": "soup",
                "amount": 250,
                "calories": 74,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s284",
                "name": "육개장",
                "type": "soup",
                "amount": 300,
                "calories": 319,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s285",
                "name": "닭개장",
                "type": "soup",
                "amount": 300,
                "calories": 351,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2370,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s286",
                "name": "갈비탕",
                "type": "soup",
                "amount": 300,
                "calories": 333,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2590,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s287",
                "name": "설렁탕",
                "type": "soup",
                "amount": 300,
                "calories": 377,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2560,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s288",
                "name": "곰탕",
                "type": "soup",
                "amount": 300,
                "calories": 323,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2340,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s289",
                "name": "꼬리곰탕",
                "type": "soup",
                "amount": 300,
                "calories": 349,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2250,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s290",
                "name": "도가니탕",
                "type": "soup",
                "amount": 300,
                "calories": 333,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s291",
                "name": "삼계탕",
                "type": "soup",
                "amount": 300,
                "calories": 343,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s292",
                "name": "반계탕",
                "type": "soup",
                "amount": 300,
                "calories": 345,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2640,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s293",
                "name": "오리탕",
                "type": "soup",
                "amount": 300,
                "calories": 322,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2380,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s294",
                "name": "추어탕",
                "type": "soup",
                "amount": 300,
                "calories": 331,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2670,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s295",
                "name": "감자탕",
                "type": "soup",
                "amount": 300,
                "calories": 315,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s296",
                "name": "뼈해장국",
                "type": "soup",
                "amount": 300,
                "calories": 372,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2400,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s297",
                "name": "순대국",
                "type": "soup",
                "amount": 300,
                "calories": 324,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s298",
                "name": "돼지국밥",
                "type": "soup",
                "amount": 300,
                "calories": 325,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2650,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s299",
                "name": "소머리국밥",
                "type": "soup",
                "amount": 300,
                "calories": 373,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2250,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s300",
                "name": "내장탕",
                "type": "soup",
                "amount": 300,
                "calories": 342,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2260,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s301",
                "name": "선지해장국",
                "type": "soup",
                "amount": 300,
                "calories": 317,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s302",
                "name": "우거지해장국",
                "type": "soup",
                "amount": 300,
                "calories": 348,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2420,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s303",
                "name": "마라탕",
                "type": "soup",
                "amount": 300,
                "calories": 318,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s304",
                "name": "짬뽕국",
                "type": "soup",
                "amount": 300,
                "calories": 335,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2370,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s305",
                "name": "마라짬뽕",
                "type": "soup",
                "amount": 300,
                "calories": 369,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2580,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s306",
                "name": "나가사키짬뽕",
                "type": "soup",
                "amount": 300,
                "calories": 363,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2690,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s307",
                "name": "크림스프",
                "type": "soup",
                "amount": 200,
                "calories": 195,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 960,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s308",
                "name": "양송이스프",
                "type": "soup",
                "amount": 200,
                "calories": 197,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 1090,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s309",
                "name": "콘스프",
                "type": "soup",
                "amount": 200,
                "calories": 218,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 930,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s310",
                "name": "단호박스프",
                "type": "soup",
                "amount": 200,
                "calories": 189,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 970,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s311",
                "name": "브로콜리스프",
                "type": "soup",
                "amount": 200,
                "calories": 193,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 900,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s312",
                "name": "토마토스프",
                "type": "soup",
                "amount": 200,
                "calories": 211,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 1010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s313",
                "name": "어니언스프",
                "type": "soup",
                "amount": 200,
                "calories": 203,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 910,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s314",
                "name": "클램차우더",
                "type": "soup",
                "amount": 200,
                "calories": 200,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 1090,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s315",
                "name": "굴라쉬",
                "type": "soup",
                "amount": 200,
                "calories": 214,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 1060,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s316",
                "name": "된장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 153,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s317",
                "name": "김치찌개",
                "type": "soup",
                "amount": 250,
                "calories": 141,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s318",
                "name": "순두부찌개",
                "type": "soup",
                "amount": 250,
                "calories": 146,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s319",
                "name": "부대찌개",
                "type": "soup",
                "amount": 250,
                "calories": 138,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s320",
                "name": "동태찌개",
                "type": "soup",
                "amount": 250,
                "calories": 135,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s321",
                "name": "참치김치찌개",
                "type": "soup",
                "amount": 250,
                "calories": 139,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s322",
                "name": "돼지고기김치찌개",
                "type": "soup",
                "amount": 250,
                "calories": 155,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s323",
                "name": "차돌된장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 137,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s324",
                "name": "해물된장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 159,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s325",
                "name": "청국장",
                "type": "soup",
                "amount": 250,
                "calories": 140,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s326",
                "name": "비지찌개",
                "type": "soup",
                "amount": 250,
                "calories": 135,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s327",
                "name": "고추장찌개",
                "type": "soup",
                "amount": 250,
                "calories": 160,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s328",
                "name": "애호박찌개",
                "type": "soup",
                "amount": 250,
                "calories": 155,
                "carbs": 10,
                "protein": 8,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s329",
                "name": "콩나물국",
                "type": "soup",
                "amount": 250,
                "calories": 78,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s330",
                "name": "무국",
                "type": "soup",
                "amount": 250,
                "calories": 82,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s331",
                "name": "소고기무국",
                "type": "soup",
                "amount": 250,
                "calories": 73,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s332",
                "name": "미역국",
                "type": "soup",
                "amount": 250,
                "calories": 75,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s333",
                "name": "소고기미역국",
                "type": "soup",
                "amount": 250,
                "calories": 75,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s334",
                "name": "홍합미역국",
                "type": "soup",
                "amount": 250,
                "calories": 87,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s335",
                "name": "조개미역국",
                "type": "soup",
                "amount": 250,
                "calories": 84,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s336",
                "name": "황태국",
                "type": "soup",
                "amount": 250,
                "calories": 75,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s337",
                "name": "북어국",
                "type": "soup",
                "amount": 250,
                "calories": 78,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s338",
                "name": "시금치국",
                "type": "soup",
                "amount": 250,
                "calories": 77,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s339",
                "name": "아욱국",
                "type": "soup",
                "amount": 250,
                "calories": 72,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s340",
                "name": "근대국",
                "type": "soup",
                "amount": 250,
                "calories": 86,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s341",
                "name": "배추국",
                "type": "soup",
                "amount": 250,
                "calories": 76,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s342",
                "name": "얼갈이된장국",
                "type": "soup",
                "amount": 250,
                "calories": 79,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s343",
                "name": "어묵국",
                "type": "soup",
                "amount": 250,
                "calories": 76,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s344",
                "name": "계란국",
                "type": "soup",
                "amount": 250,
                "calories": 73,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s345",
                "name": "만두국",
                "type": "soup",
                "amount": 250,
                "calories": 75,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s346",
                "name": "떡국",
                "type": "soup",
                "amount": 250,
                "calories": 72,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s347",
                "name": "떡만두국",
                "type": "soup",
                "amount": 250,
                "calories": 73,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s348",
                "name": "수제비국",
                "type": "soup",
                "amount": 250,
                "calories": 79,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s349",
                "name": "칼국수",
                "type": "soup",
                "amount": 250,
                "calories": 78,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s350",
                "name": "우동국물",
                "type": "soup",
                "amount": 250,
                "calories": 73,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s351",
                "name": "잔치국수",
                "type": "soup",
                "amount": 250,
                "calories": 76,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s352",
                "name": "맑은감자국",
                "type": "soup",
                "amount": 250,
                "calories": 86,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s353",
                "name": "맑은순두부국",
                "type": "soup",
                "amount": 250,
                "calories": 79,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s354",
                "name": "재첩국",
                "type": "soup",
                "amount": 250,
                "calories": 81,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s355",
                "name": "올갱이국",
                "type": "soup",
                "amount": 250,
                "calories": 72,
                "carbs": 10,
                "protein": 5,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s356",
                "name": "육개장",
                "type": "soup",
                "amount": 300,
                "calories": 378,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s357",
                "name": "닭개장",
                "type": "soup",
                "amount": 300,
                "calories": 340,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2620,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s358",
                "name": "갈비탕",
                "type": "soup",
                "amount": 300,
                "calories": 354,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s359",
                "name": "설렁탕",
                "type": "soup",
                "amount": 300,
                "calories": 348,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s360",
                "name": "곰탕",
                "type": "soup",
                "amount": 300,
                "calories": 315,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s361",
                "name": "꼬리곰탕",
                "type": "soup",
                "amount": 300,
                "calories": 359,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s362",
                "name": "도가니탕",
                "type": "soup",
                "amount": 300,
                "calories": 343,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2420,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s363",
                "name": "삼계탕",
                "type": "soup",
                "amount": 300,
                "calories": 333,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2350,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s364",
                "name": "반계탕",
                "type": "soup",
                "amount": 300,
                "calories": 351,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2440,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s365",
                "name": "오리탕",
                "type": "soup",
                "amount": 300,
                "calories": 326,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2620,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s366",
                "name": "추어탕",
                "type": "soup",
                "amount": 300,
                "calories": 350,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s367",
                "name": "감자탕",
                "type": "soup",
                "amount": 300,
                "calories": 349,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2340,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s368",
                "name": "뼈해장국",
                "type": "soup",
                "amount": 300,
                "calories": 316,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s369",
                "name": "순대국",
                "type": "soup",
                "amount": 300,
                "calories": 372,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s370",
                "name": "돼지국밥",
                "type": "soup",
                "amount": 300,
                "calories": 357,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s371",
                "name": "소머리국밥",
                "type": "soup",
                "amount": 300,
                "calories": 319,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2430,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s372",
                "name": "내장탕",
                "type": "soup",
                "amount": 300,
                "calories": 361,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2620,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s373",
                "name": "선지해장국",
                "type": "soup",
                "amount": 300,
                "calories": 375,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s374",
                "name": "우거지해장국",
                "type": "soup",
                "amount": 300,
                "calories": 347,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2410,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s375",
                "name": "마라탕",
                "type": "soup",
                "amount": 300,
                "calories": 340,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2670,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s376",
                "name": "짬뽕국",
                "type": "soup",
                "amount": 300,
                "calories": 331,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2400,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s377",
                "name": "마라짬뽕",
                "type": "soup",
                "amount": 300,
                "calories": 380,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2430,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s378",
                "name": "나가사키짬뽕",
                "type": "soup",
                "amount": 300,
                "calories": 384,
                "carbs": 20,
                "protein": 15,
                "fat": 15,
                "cost": 2380,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s379",
                "name": "크림스프",
                "type": "soup",
                "amount": 200,
                "calories": 218,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s380",
                "name": "양송이스프",
                "type": "soup",
                "amount": 200,
                "calories": 198,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 940,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s381",
                "name": "콘스프",
                "type": "soup",
                "amount": 200,
                "calories": 202,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 1040,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s382",
                "name": "단호박스프",
                "type": "soup",
                "amount": 200,
                "calories": 199,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 910,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s383",
                "name": "브로콜리스프",
                "type": "soup",
                "amount": 200,
                "calories": 204,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 970,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s384",
                "name": "토마토스프",
                "type": "soup",
                "amount": 200,
                "calories": 182,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 990,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s385",
                "name": "어니언스프",
                "type": "soup",
                "amount": 200,
                "calories": 185,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 1060,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s386",
                "name": "클램차우더",
                "type": "soup",
                "amount": 200,
                "calories": 186,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 920,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s387",
                "name": "굴라쉬",
                "type": "soup",
                "amount": 200,
                "calories": 206,
                "carbs": 15,
                "protein": 5,
                "fat": 10,
                "cost": 1000,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m388",
                "name": "제육볶음",
                "type": "main1",
                "amount": 150,
                "calories": 454,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2680,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m389",
                "name": "간장제육볶음",
                "type": "main1",
                "amount": 150,
                "calories": 463,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2680,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m390",
                "name": "고추장불고기",
                "type": "main1",
                "amount": 150,
                "calories": 442,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m391",
                "name": "간장불고기",
                "type": "main1",
                "amount": 150,
                "calories": 453,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2590,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m392",
                "name": "소불고기",
                "type": "main1",
                "amount": 150,
                "calories": 421,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2340,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m393",
                "name": "뚝배기불고기",
                "type": "main1",
                "amount": 150,
                "calories": 444,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m394",
                "name": "돼지갈비찜",
                "type": "main1",
                "amount": 150,
                "calories": 446,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m395",
                "name": "소갈비찜",
                "type": "main1",
                "amount": 150,
                "calories": 471,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m396",
                "name": "매운갈비찜",
                "type": "main1",
                "amount": 150,
                "calories": 421,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2690,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m397",
                "name": "닭갈비",
                "type": "main1",
                "amount": 150,
                "calories": 456,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2350,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m398",
                "name": "치즈닭갈비",
                "type": "main1",
                "amount": 150,
                "calories": 413,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2260,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m399",
                "name": "찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 492,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m400",
                "name": "안동찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 448,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m401",
                "name": "매운찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 447,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m402",
                "name": "로제찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 488,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m403",
                "name": "닭도리탕",
                "type": "main1",
                "amount": 150,
                "calories": 415,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2400,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m404",
                "name": "닭볶음탕",
                "type": "main1",
                "amount": 150,
                "calories": 450,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m405",
                "name": "묵은지닭볶음탕",
                "type": "main1",
                "amount": 150,
                "calories": 469,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m406",
                "name": "수육",
                "type": "main1",
                "amount": 150,
                "calories": 406,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2680,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m407",
                "name": "보쌈",
                "type": "main1",
                "amount": 150,
                "calories": 411,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2430,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m408",
                "name": "족발",
                "type": "main1",
                "amount": 150,
                "calories": 411,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2660,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m409",
                "name": "불족발",
                "type": "main1",
                "amount": 150,
                "calories": 436,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2560,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m410",
                "name": "동파육",
                "type": "main1",
                "amount": 150,
                "calories": 429,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m411",
                "name": "탕수육",
                "type": "main1",
                "amount": 150,
                "calories": 412,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m412",
                "name": "사천탕수육",
                "type": "main1",
                "amount": 150,
                "calories": 420,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2700,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m413",
                "name": "꿔바로우",
                "type": "main1",
                "amount": 150,
                "calories": 450,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2260,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m414",
                "name": "유린기",
                "type": "main1",
                "amount": 150,
                "calories": 458,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2250,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m415",
                "name": "깐풍기",
                "type": "main1",
                "amount": 150,
                "calories": 492,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2660,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m416",
                "name": "라조기",
                "type": "main1",
                "amount": 150,
                "calories": 471,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2340,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m417",
                "name": "고추잡채",
                "type": "main1",
                "amount": 150,
                "calories": 469,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m418",
                "name": "마파두부",
                "type": "main1",
                "amount": 150,
                "calories": 489,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2560,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m419",
                "name": "돈까스",
                "type": "main1",
                "amount": 150,
                "calories": 427,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m420",
                "name": "치즈돈까스",
                "type": "main1",
                "amount": 150,
                "calories": 489,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m421",
                "name": "고구마치즈돈까스",
                "type": "main1",
                "amount": 150,
                "calories": 475,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m422",
                "name": "생선까스",
                "type": "main1",
                "amount": 150,
                "calories": 460,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2560,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m423",
                "name": "치킨까스",
                "type": "main1",
                "amount": 150,
                "calories": 406,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m424",
                "name": "함박스테이크",
                "type": "main1",
                "amount": 150,
                "calories": 476,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m425",
                "name": "미트볼",
                "type": "main1",
                "amount": 150,
                "calories": 476,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m426",
                "name": "찹스테이크",
                "type": "main1",
                "amount": 150,
                "calories": 487,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2260,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m427",
                "name": "돈까스나베",
                "type": "main1",
                "amount": 150,
                "calories": 421,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m428",
                "name": "가츠나베",
                "type": "main1",
                "amount": 150,
                "calories": 454,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m429",
                "name": "김치돈까스나베",
                "type": "main1",
                "amount": 150,
                "calories": 417,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m430",
                "name": "오징어볶음",
                "type": "main1",
                "amount": 120,
                "calories": 286,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1910,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m431",
                "name": "낙지볶음",
                "type": "main1",
                "amount": 120,
                "calories": 302,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m432",
                "name": "주꾸미볶음",
                "type": "main1",
                "amount": 120,
                "calories": 305,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m433",
                "name": "해물찜",
                "type": "main1",
                "amount": 120,
                "calories": 289,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m434",
                "name": "아구찜",
                "type": "main1",
                "amount": 120,
                "calories": 327,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1890,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m435",
                "name": "코다리찜",
                "type": "main1",
                "amount": 120,
                "calories": 292,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m436",
                "name": "고등어조림",
                "type": "main1",
                "amount": 120,
                "calories": 302,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2030,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m437",
                "name": "갈치조림",
                "type": "main1",
                "amount": 120,
                "calories": 292,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2040,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m438",
                "name": "꽁치조림",
                "type": "main1",
                "amount": 120,
                "calories": 271,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2140,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m439",
                "name": "가자미조림",
                "type": "main1",
                "amount": 120,
                "calories": 294,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2090,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m440",
                "name": "삼치조림",
                "type": "main1",
                "amount": 120,
                "calories": 309,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1930,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m441",
                "name": "고등어구이",
                "type": "main1",
                "amount": 120,
                "calories": 312,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1970,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m442",
                "name": "갈치구이",
                "type": "main1",
                "amount": 120,
                "calories": 325,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m443",
                "name": "꽁치구이",
                "type": "main1",
                "amount": 120,
                "calories": 316,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2190,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m444",
                "name": "가자미구이",
                "type": "main1",
                "amount": 120,
                "calories": 273,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m445",
                "name": "삼치구이",
                "type": "main1",
                "amount": 120,
                "calories": 276,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2100,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m446",
                "name": "조기구이",
                "type": "main1",
                "amount": 120,
                "calories": 315,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1880,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m447",
                "name": "굴비구이",
                "type": "main1",
                "amount": 120,
                "calories": 309,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2090,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m448",
                "name": "연어구이",
                "type": "main1",
                "amount": 120,
                "calories": 294,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1890,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m449",
                "name": "장어구이",
                "type": "main1",
                "amount": 120,
                "calories": 326,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2190,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m450",
                "name": "새우튀김",
                "type": "main1",
                "amount": 120,
                "calories": 290,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2140,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m451",
                "name": "오징어튀김",
                "type": "main1",
                "amount": 120,
                "calories": 292,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m452",
                "name": "김말이튀김",
                "type": "main1",
                "amount": 120,
                "calories": 316,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2160,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m453",
                "name": "고구마튀김",
                "type": "main1",
                "amount": 120,
                "calories": 308,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m454",
                "name": "야채튀김",
                "type": "main1",
                "amount": 120,
                "calories": 280,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2130,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m455",
                "name": "단호박튀김",
                "type": "main1",
                "amount": 120,
                "calories": 270,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m456",
                "name": "모둠튀김",
                "type": "main1",
                "amount": 120,
                "calories": 270,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m457",
                "name": "깐쇼새우",
                "type": "main1",
                "amount": 120,
                "calories": 288,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1920,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m458",
                "name": "칠리새우",
                "type": "main1",
                "amount": 120,
                "calories": 323,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2050,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m459",
                "name": "크림새우",
                "type": "main1",
                "amount": 120,
                "calories": 321,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m460",
                "name": "팔보채",
                "type": "main1",
                "amount": 120,
                "calories": 297,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2040,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m461",
                "name": "양장피",
                "type": "main1",
                "amount": 120,
                "calories": 327,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2080,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m462",
                "name": "해물파전",
                "type": "main1",
                "amount": 120,
                "calories": 289,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2090,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m463",
                "name": "오징어파전",
                "type": "main1",
                "amount": 120,
                "calories": 314,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2180,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m464",
                "name": "동태전",
                "type": "main1",
                "amount": 120,
                "calories": 293,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1910,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m465",
                "name": "생선전",
                "type": "main1",
                "amount": 120,
                "calories": 324,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2060,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m466",
                "name": "제육볶음",
                "type": "main1",
                "amount": 150,
                "calories": 419,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2360,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m467",
                "name": "간장제육볶음",
                "type": "main1",
                "amount": 150,
                "calories": 480,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m468",
                "name": "고추장불고기",
                "type": "main1",
                "amount": 150,
                "calories": 474,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2700,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m469",
                "name": "간장불고기",
                "type": "main1",
                "amount": 150,
                "calories": 455,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2560,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m470",
                "name": "소불고기",
                "type": "main1",
                "amount": 150,
                "calories": 447,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m471",
                "name": "뚝배기불고기",
                "type": "main1",
                "amount": 150,
                "calories": 469,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m472",
                "name": "돼지갈비찜",
                "type": "main1",
                "amount": 150,
                "calories": 456,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2250,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m473",
                "name": "소갈비찜",
                "type": "main1",
                "amount": 150,
                "calories": 443,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2590,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m474",
                "name": "매운갈비찜",
                "type": "main1",
                "amount": 150,
                "calories": 476,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2550,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m475",
                "name": "닭갈비",
                "type": "main1",
                "amount": 150,
                "calories": 459,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2650,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m476",
                "name": "치즈닭갈비",
                "type": "main1",
                "amount": 150,
                "calories": 409,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2570,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m477",
                "name": "찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 432,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m478",
                "name": "안동찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 405,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2440,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m479",
                "name": "매운찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 444,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2670,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m480",
                "name": "로제찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 457,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m481",
                "name": "닭도리탕",
                "type": "main1",
                "amount": 150,
                "calories": 459,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2330,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m482",
                "name": "닭볶음탕",
                "type": "main1",
                "amount": 150,
                "calories": 442,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m483",
                "name": "묵은지닭볶음탕",
                "type": "main1",
                "amount": 150,
                "calories": 475,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2590,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m484",
                "name": "수육",
                "type": "main1",
                "amount": 150,
                "calories": 427,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2590,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m485",
                "name": "보쌈",
                "type": "main1",
                "amount": 150,
                "calories": 473,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2340,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m486",
                "name": "족발",
                "type": "main1",
                "amount": 150,
                "calories": 439,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2440,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m487",
                "name": "불족발",
                "type": "main1",
                "amount": 150,
                "calories": 455,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m488",
                "name": "동파육",
                "type": "main1",
                "amount": 150,
                "calories": 415,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m489",
                "name": "탕수육",
                "type": "main1",
                "amount": 150,
                "calories": 494,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2700,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m490",
                "name": "사천탕수육",
                "type": "main1",
                "amount": 150,
                "calories": 433,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m491",
                "name": "꿔바로우",
                "type": "main1",
                "amount": 150,
                "calories": 477,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2550,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m492",
                "name": "유린기",
                "type": "main1",
                "amount": 150,
                "calories": 405,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m493",
                "name": "깐풍기",
                "type": "main1",
                "amount": 150,
                "calories": 437,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2690,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m494",
                "name": "라조기",
                "type": "main1",
                "amount": 150,
                "calories": 433,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2420,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m495",
                "name": "고추잡채",
                "type": "main1",
                "amount": 150,
                "calories": 405,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2610,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m496",
                "name": "마파두부",
                "type": "main1",
                "amount": 150,
                "calories": 493,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m497",
                "name": "돈까스",
                "type": "main1",
                "amount": 150,
                "calories": 424,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m498",
                "name": "치즈돈까스",
                "type": "main1",
                "amount": 150,
                "calories": 421,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m499",
                "name": "고구마치즈돈까스",
                "type": "main1",
                "amount": 150,
                "calories": 484,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m500",
                "name": "생선까스",
                "type": "main1",
                "amount": 150,
                "calories": 409,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2250,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m501",
                "name": "치킨까스",
                "type": "main1",
                "amount": 150,
                "calories": 472,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2600,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m502",
                "name": "함박스테이크",
                "type": "main1",
                "amount": 150,
                "calories": 493,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m503",
                "name": "미트볼",
                "type": "main1",
                "amount": 150,
                "calories": 444,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m504",
                "name": "찹스테이크",
                "type": "main1",
                "amount": 150,
                "calories": 424,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2360,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m505",
                "name": "돈까스나베",
                "type": "main1",
                "amount": 150,
                "calories": 477,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2440,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m506",
                "name": "가츠나베",
                "type": "main1",
                "amount": 150,
                "calories": 442,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m507",
                "name": "김치돈까스나베",
                "type": "main1",
                "amount": 150,
                "calories": 474,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m508",
                "name": "오징어볶음",
                "type": "main1",
                "amount": 120,
                "calories": 280,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1900,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m509",
                "name": "낙지볶음",
                "type": "main1",
                "amount": 120,
                "calories": 298,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2100,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m510",
                "name": "주꾸미볶음",
                "type": "main1",
                "amount": 120,
                "calories": 319,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2050,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m511",
                "name": "해물찜",
                "type": "main1",
                "amount": 120,
                "calories": 309,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m512",
                "name": "아구찜",
                "type": "main1",
                "amount": 120,
                "calories": 308,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2190,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m513",
                "name": "코다리찜",
                "type": "main1",
                "amount": 120,
                "calories": 310,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1950,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m514",
                "name": "고등어조림",
                "type": "main1",
                "amount": 120,
                "calories": 300,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2030,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m515",
                "name": "갈치조림",
                "type": "main1",
                "amount": 120,
                "calories": 321,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m516",
                "name": "꽁치조림",
                "type": "main1",
                "amount": 120,
                "calories": 290,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2080,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m517",
                "name": "가자미조림",
                "type": "main1",
                "amount": 120,
                "calories": 327,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1880,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m518",
                "name": "삼치조림",
                "type": "main1",
                "amount": 120,
                "calories": 311,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2110,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m519",
                "name": "고등어구이",
                "type": "main1",
                "amount": 120,
                "calories": 288,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m520",
                "name": "갈치구이",
                "type": "main1",
                "amount": 120,
                "calories": 272,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m521",
                "name": "꽁치구이",
                "type": "main1",
                "amount": 120,
                "calories": 312,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1880,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m522",
                "name": "가자미구이",
                "type": "main1",
                "amount": 120,
                "calories": 308,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1970,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m523",
                "name": "삼치구이",
                "type": "main1",
                "amount": 120,
                "calories": 325,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1890,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m524",
                "name": "조기구이",
                "type": "main1",
                "amount": 120,
                "calories": 272,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m525",
                "name": "굴비구이",
                "type": "main1",
                "amount": 120,
                "calories": 277,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2120,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m526",
                "name": "연어구이",
                "type": "main1",
                "amount": 120,
                "calories": 289,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2150,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m527",
                "name": "장어구이",
                "type": "main1",
                "amount": 120,
                "calories": 270,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m528",
                "name": "새우튀김",
                "type": "main1",
                "amount": 120,
                "calories": 301,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m529",
                "name": "오징어튀김",
                "type": "main1",
                "amount": 120,
                "calories": 288,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m530",
                "name": "김말이튀김",
                "type": "main1",
                "amount": 120,
                "calories": 276,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2110,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m531",
                "name": "고구마튀김",
                "type": "main1",
                "amount": 120,
                "calories": 304,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m532",
                "name": "야채튀김",
                "type": "main1",
                "amount": 120,
                "calories": 289,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2100,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m533",
                "name": "단호박튀김",
                "type": "main1",
                "amount": 120,
                "calories": 287,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m534",
                "name": "모둠튀김",
                "type": "main1",
                "amount": 120,
                "calories": 295,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m535",
                "name": "깐쇼새우",
                "type": "main1",
                "amount": 120,
                "calories": 280,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1910,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m536",
                "name": "칠리새우",
                "type": "main1",
                "amount": 120,
                "calories": 305,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m537",
                "name": "크림새우",
                "type": "main1",
                "amount": 120,
                "calories": 300,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m538",
                "name": "팔보채",
                "type": "main1",
                "amount": 120,
                "calories": 315,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2180,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m539",
                "name": "양장피",
                "type": "main1",
                "amount": 120,
                "calories": 283,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2000,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m540",
                "name": "해물파전",
                "type": "main1",
                "amount": 120,
                "calories": 289,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m541",
                "name": "오징어파전",
                "type": "main1",
                "amount": 120,
                "calories": 301,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2150,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m542",
                "name": "동태전",
                "type": "main1",
                "amount": 120,
                "calories": 312,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1910,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m543",
                "name": "생선전",
                "type": "main1",
                "amount": 120,
                "calories": 276,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m544",
                "name": "제육볶음",
                "type": "main1",
                "amount": 150,
                "calories": 467,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2260,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m545",
                "name": "간장제육볶음",
                "type": "main1",
                "amount": 150,
                "calories": 493,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m546",
                "name": "고추장불고기",
                "type": "main1",
                "amount": 150,
                "calories": 445,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m547",
                "name": "간장불고기",
                "type": "main1",
                "amount": 150,
                "calories": 457,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2330,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m548",
                "name": "소불고기",
                "type": "main1",
                "amount": 150,
                "calories": 449,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m549",
                "name": "뚝배기불고기",
                "type": "main1",
                "amount": 150,
                "calories": 450,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m550",
                "name": "돼지갈비찜",
                "type": "main1",
                "amount": 150,
                "calories": 435,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2660,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m551",
                "name": "소갈비찜",
                "type": "main1",
                "amount": 150,
                "calories": 434,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2380,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m552",
                "name": "매운갈비찜",
                "type": "main1",
                "amount": 150,
                "calories": 467,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2640,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m553",
                "name": "닭갈비",
                "type": "main1",
                "amount": 150,
                "calories": 482,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2330,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m554",
                "name": "치즈닭갈비",
                "type": "main1",
                "amount": 150,
                "calories": 441,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2430,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m555",
                "name": "찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 429,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m556",
                "name": "안동찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 470,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2590,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m557",
                "name": "매운찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 480,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m558",
                "name": "로제찜닭",
                "type": "main1",
                "amount": 150,
                "calories": 413,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2660,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m559",
                "name": "닭도리탕",
                "type": "main1",
                "amount": 150,
                "calories": 472,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2550,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m560",
                "name": "닭볶음탕",
                "type": "main1",
                "amount": 150,
                "calories": 451,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2440,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m561",
                "name": "묵은지닭볶음탕",
                "type": "main1",
                "amount": 150,
                "calories": 436,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m562",
                "name": "수육",
                "type": "main1",
                "amount": 150,
                "calories": 425,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m563",
                "name": "보쌈",
                "type": "main1",
                "amount": 150,
                "calories": 485,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2430,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m564",
                "name": "족발",
                "type": "main1",
                "amount": 150,
                "calories": 448,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m565",
                "name": "불족발",
                "type": "main1",
                "amount": 150,
                "calories": 431,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2570,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m566",
                "name": "동파육",
                "type": "main1",
                "amount": 150,
                "calories": 494,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m567",
                "name": "탕수육",
                "type": "main1",
                "amount": 150,
                "calories": 452,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m568",
                "name": "사천탕수육",
                "type": "main1",
                "amount": 150,
                "calories": 443,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m569",
                "name": "꿔바로우",
                "type": "main1",
                "amount": 150,
                "calories": 425,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2250,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m570",
                "name": "유린기",
                "type": "main1",
                "amount": 150,
                "calories": 491,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m571",
                "name": "깐풍기",
                "type": "main1",
                "amount": 150,
                "calories": 414,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2380,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m572",
                "name": "라조기",
                "type": "main1",
                "amount": 150,
                "calories": 410,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2420,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m573",
                "name": "고추잡채",
                "type": "main1",
                "amount": 150,
                "calories": 494,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m574",
                "name": "마파두부",
                "type": "main1",
                "amount": 150,
                "calories": 442,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2260,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m575",
                "name": "돈까스",
                "type": "main1",
                "amount": 150,
                "calories": 488,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2650,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m576",
                "name": "치즈돈까스",
                "type": "main1",
                "amount": 150,
                "calories": 436,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m577",
                "name": "고구마치즈돈까스",
                "type": "main1",
                "amount": 150,
                "calories": 463,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2360,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m578",
                "name": "생선까스",
                "type": "main1",
                "amount": 150,
                "calories": 413,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2680,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m579",
                "name": "치킨까스",
                "type": "main1",
                "amount": 150,
                "calories": 453,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2550,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m580",
                "name": "함박스테이크",
                "type": "main1",
                "amount": 150,
                "calories": 460,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m581",
                "name": "미트볼",
                "type": "main1",
                "amount": 150,
                "calories": 484,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2410,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m582",
                "name": "찹스테이크",
                "type": "main1",
                "amount": 150,
                "calories": 451,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2670,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m583",
                "name": "돈까스나베",
                "type": "main1",
                "amount": 150,
                "calories": 431,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m584",
                "name": "가츠나베",
                "type": "main1",
                "amount": 150,
                "calories": 482,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2700,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m585",
                "name": "김치돈까스나베",
                "type": "main1",
                "amount": 150,
                "calories": 410,
                "carbs": 20,
                "protein": 25,
                "fat": 20,
                "cost": 2740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "m586",
                "name": "오징어볶음",
                "type": "main1",
                "amount": 120,
                "calories": 277,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1920,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m587",
                "name": "낙지볶음",
                "type": "main1",
                "amount": 120,
                "calories": 299,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1890,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m588",
                "name": "주꾸미볶음",
                "type": "main1",
                "amount": 120,
                "calories": 300,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m589",
                "name": "해물찜",
                "type": "main1",
                "amount": 120,
                "calories": 284,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2090,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m590",
                "name": "아구찜",
                "type": "main1",
                "amount": 120,
                "calories": 315,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2150,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m591",
                "name": "코다리찜",
                "type": "main1",
                "amount": 120,
                "calories": 312,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m592",
                "name": "고등어조림",
                "type": "main1",
                "amount": 120,
                "calories": 286,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2030,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m593",
                "name": "갈치조림",
                "type": "main1",
                "amount": 120,
                "calories": 298,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1910,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m594",
                "name": "꽁치조림",
                "type": "main1",
                "amount": 120,
                "calories": 327,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2130,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m595",
                "name": "가자미조림",
                "type": "main1",
                "amount": 120,
                "calories": 285,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m596",
                "name": "삼치조림",
                "type": "main1",
                "amount": 120,
                "calories": 277,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m597",
                "name": "고등어구이",
                "type": "main1",
                "amount": 120,
                "calories": 300,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m598",
                "name": "갈치구이",
                "type": "main1",
                "amount": 120,
                "calories": 320,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2080,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m599",
                "name": "꽁치구이",
                "type": "main1",
                "amount": 120,
                "calories": 307,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1990,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m600",
                "name": "가자미구이",
                "type": "main1",
                "amount": 120,
                "calories": 311,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m601",
                "name": "삼치구이",
                "type": "main1",
                "amount": 120,
                "calories": 294,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1940,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m602",
                "name": "조기구이",
                "type": "main1",
                "amount": 120,
                "calories": 293,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1960,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m603",
                "name": "굴비구이",
                "type": "main1",
                "amount": 120,
                "calories": 291,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2100,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m604",
                "name": "연어구이",
                "type": "main1",
                "amount": 120,
                "calories": 288,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2130,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m605",
                "name": "장어구이",
                "type": "main1",
                "amount": 120,
                "calories": 286,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2140,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m606",
                "name": "새우튀김",
                "type": "main1",
                "amount": 120,
                "calories": 283,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2060,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m607",
                "name": "오징어튀김",
                "type": "main1",
                "amount": 120,
                "calories": 324,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2140,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m608",
                "name": "김말이튀김",
                "type": "main1",
                "amount": 120,
                "calories": 283,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m609",
                "name": "고구마튀김",
                "type": "main1",
                "amount": 120,
                "calories": 290,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1960,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m610",
                "name": "야채튀김",
                "type": "main1",
                "amount": 120,
                "calories": 322,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2170,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m611",
                "name": "단호박튀김",
                "type": "main1",
                "amount": 120,
                "calories": 322,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2060,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m612",
                "name": "모둠튀김",
                "type": "main1",
                "amount": 120,
                "calories": 280,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1920,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m613",
                "name": "깐쇼새우",
                "type": "main1",
                "amount": 120,
                "calories": 312,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m614",
                "name": "칠리새우",
                "type": "main1",
                "amount": 120,
                "calories": 322,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m615",
                "name": "크림새우",
                "type": "main1",
                "amount": 120,
                "calories": 274,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m616",
                "name": "팔보채",
                "type": "main1",
                "amount": 120,
                "calories": 279,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2170,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m617",
                "name": "양장피",
                "type": "main1",
                "amount": 120,
                "calories": 302,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m618",
                "name": "해물파전",
                "type": "main1",
                "amount": 120,
                "calories": 303,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m619",
                "name": "오징어파전",
                "type": "main1",
                "amount": 120,
                "calories": 310,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 2020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m620",
                "name": "동태전",
                "type": "main1",
                "amount": 120,
                "calories": 285,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "m621",
                "name": "생선전",
                "type": "main1",
                "amount": 120,
                "calories": 288,
                "carbs": 15,
                "protein": 20,
                "fat": 15,
                "cost": 1880,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s622",
                "name": "시금치나물",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s623",
                "name": "콩나물무침",
                "type": "side2",
                "amount": 50,
                "calories": 55,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s624",
                "name": "숙주나물",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s625",
                "name": "고사리나물",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s626",
                "name": "도라지나물",
                "type": "side2",
                "amount": 50,
                "calories": 55,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s627",
                "name": "취나물",
                "type": "side2",
                "amount": 50,
                "calories": 64,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s628",
                "name": "참나물",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s629",
                "name": "비름나물",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s630",
                "name": "유채나물",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s631",
                "name": "방풍나물",
                "type": "side2",
                "amount": 50,
                "calories": 62,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s632",
                "name": "세발나물",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s633",
                "name": "얼갈이무침",
                "type": "side2",
                "amount": 50,
                "calories": 55,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s634",
                "name": "가지무침",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s635",
                "name": "가지볶음",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s636",
                "name": "애호박볶음",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s637",
                "name": "버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 62,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s638",
                "name": "느타리버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 62,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s639",
                "name": "표고버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s640",
                "name": "팽이버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s641",
                "name": "감자채볶음",
                "type": "side2",
                "amount": 50,
                "calories": 63,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s642",
                "name": "감자조림",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s643",
                "name": "당근볶음",
                "type": "side2",
                "amount": 50,
                "calories": 61,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s644",
                "name": "양파볶음",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s645",
                "name": "마늘쫑볶음",
                "type": "side2",
                "amount": 50,
                "calories": 61,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s646",
                "name": "마늘쫑무침",
                "type": "side2",
                "amount": 50,
                "calories": 64,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s647",
                "name": "우엉조림",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s648",
                "name": "연근조림",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s649",
                "name": "도토리묵무침",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s650",
                "name": "청포묵무침",
                "type": "side2",
                "amount": 50,
                "calories": 63,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s651",
                "name": "오이무침",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s652",
                "name": "오이도라지무침",
                "type": "side2",
                "amount": 50,
                "calories": 63,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s653",
                "name": "미역줄기볶음",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s654",
                "name": "파래무침",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s655",
                "name": "미역초무침",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s656",
                "name": "무생채",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s657",
                "name": "무나물",
                "type": "side2",
                "amount": 50,
                "calories": 65,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s658",
                "name": "더덕구이",
                "type": "side2",
                "amount": 50,
                "calories": 55,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s659",
                "name": "더덕무침",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s660",
                "name": "도라지구이",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s661",
                "name": "브로콜리숙회",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s662",
                "name": "양배추찜",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s663",
                "name": "호박잎찜",
                "type": "side2",
                "amount": 50,
                "calories": 55,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s664",
                "name": "깻잎찜",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s665",
                "name": "깻잎순볶음",
                "type": "side2",
                "amount": 50,
                "calories": 61,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s666",
                "name": "계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 155,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s667",
                "name": "야채계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 135,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s668",
                "name": "치즈계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 138,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s669",
                "name": "명란계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s670",
                "name": "계란찜",
                "type": "side2",
                "amount": 80,
                "calories": 138,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s671",
                "name": "뚝배기계란찜",
                "type": "side2",
                "amount": 80,
                "calories": 154,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s672",
                "name": "푸딩계란찜",
                "type": "side2",
                "amount": 80,
                "calories": 151,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s673",
                "name": "계란후라이",
                "type": "side2",
                "amount": 80,
                "calories": 157,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s674",
                "name": "스크램블에그",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s675",
                "name": "메추리알장조림",
                "type": "side2",
                "amount": 80,
                "calories": 155,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s676",
                "name": "소고기장조림",
                "type": "side2",
                "amount": 80,
                "calories": 164,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s677",
                "name": "돼지고기장조림",
                "type": "side2",
                "amount": 80,
                "calories": 158,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s678",
                "name": "두부구이",
                "type": "side2",
                "amount": 80,
                "calories": 143,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s679",
                "name": "두부조림",
                "type": "side2",
                "amount": 80,
                "calories": 158,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s680",
                "name": "두부김치",
                "type": "side2",
                "amount": 80,
                "calories": 144,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s681",
                "name": "마파두부",
                "type": "side2",
                "amount": 80,
                "calories": 157,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s682",
                "name": "연두부",
                "type": "side2",
                "amount": 80,
                "calories": 139,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s683",
                "name": "연두부샐러드",
                "type": "side2",
                "amount": 80,
                "calories": 140,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s684",
                "name": "순두부양념장",
                "type": "side2",
                "amount": 80,
                "calories": 138,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s685",
                "name": "건두부무침",
                "type": "side2",
                "amount": 80,
                "calories": 143,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s686",
                "name": "어묵볶음",
                "type": "side2",
                "amount": 80,
                "calories": 164,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s687",
                "name": "간장어묵볶음",
                "type": "side2",
                "amount": 80,
                "calories": 156,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s688",
                "name": "매운어묵볶음",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s689",
                "name": "어묵조림",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s690",
                "name": "비엔나소시지볶음",
                "type": "side2",
                "amount": 80,
                "calories": 162,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s691",
                "name": "소시지야채볶음",
                "type": "side2",
                "amount": 80,
                "calories": 137,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s692",
                "name": "햄구이",
                "type": "side2",
                "amount": 80,
                "calories": 141,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s693",
                "name": "스팸구이",
                "type": "side2",
                "amount": 80,
                "calories": 143,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s694",
                "name": "동그랑땡",
                "type": "side2",
                "amount": 80,
                "calories": 145,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s695",
                "name": "너비아니",
                "type": "side2",
                "amount": 80,
                "calories": 162,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s696",
                "name": "떡갈비",
                "type": "side2",
                "amount": 80,
                "calories": 140,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s697",
                "name": "미트볼조림",
                "type": "side2",
                "amount": 80,
                "calories": 160,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s698",
                "name": "장어강정",
                "type": "side2",
                "amount": 80,
                "calories": 144,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s699",
                "name": "치킨너겟",
                "type": "side2",
                "amount": 80,
                "calories": 135,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s700",
                "name": "용가리치킨",
                "type": "side2",
                "amount": 80,
                "calories": 146,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s701",
                "name": "팝콘치킨",
                "type": "side2",
                "amount": 80,
                "calories": 157,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s702",
                "name": "탕수만두",
                "type": "side2",
                "amount": 80,
                "calories": 143,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s703",
                "name": "군만두",
                "type": "side2",
                "amount": 80,
                "calories": 145,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s704",
                "name": "물만두",
                "type": "side2",
                "amount": 80,
                "calories": 136,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s705",
                "name": "찐만두",
                "type": "side2",
                "amount": 80,
                "calories": 153,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s706",
                "name": "타코야끼",
                "type": "side2",
                "amount": 80,
                "calories": 152,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s707",
                "name": "멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 102,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 700,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s708",
                "name": "잔멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 105,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s709",
                "name": "호두멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 92,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 660,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s710",
                "name": "아몬드멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 97,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 650,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s711",
                "name": "꽈리고추멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 108,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s712",
                "name": "진미채볶음",
                "type": "side2",
                "amount": 30,
                "calories": 109,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s713",
                "name": "진미채무침",
                "type": "side2",
                "amount": 30,
                "calories": 102,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 670,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s714",
                "name": "오징어채볶음",
                "type": "side2",
                "amount": 30,
                "calories": 90,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s715",
                "name": "쥐포볶음",
                "type": "side2",
                "amount": 30,
                "calories": 103,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s716",
                "name": "뱅어포구이",
                "type": "side2",
                "amount": 30,
                "calories": 109,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 700,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s717",
                "name": "새우볶음",
                "type": "side2",
                "amount": 30,
                "calories": 103,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 700,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s718",
                "name": "건새우볶음",
                "type": "side2",
                "amount": 30,
                "calories": 98,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 690,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s719",
                "name": "마늘쫑건새우볶음",
                "type": "side2",
                "amount": 30,
                "calories": 91,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s720",
                "name": "땅콩조림",
                "type": "side2",
                "amount": 30,
                "calories": 108,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s721",
                "name": "검은콩조림",
                "type": "side2",
                "amount": 30,
                "calories": 100,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 640,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s722",
                "name": "김가루무침",
                "type": "side2",
                "amount": 30,
                "calories": 109,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 660,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s723",
                "name": "김자반",
                "type": "side2",
                "amount": 30,
                "calories": 108,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 700,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s724",
                "name": "조미김",
                "type": "side2",
                "amount": 30,
                "calories": 90,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s725",
                "name": "파래김",
                "type": "side2",
                "amount": 30,
                "calories": 100,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 670,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s726",
                "name": "돌김",
                "type": "side2",
                "amount": 30,
                "calories": 95,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 650,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s727",
                "name": "감태",
                "type": "side2",
                "amount": 30,
                "calories": 102,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 670,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s728",
                "name": "야채샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 126,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s729",
                "name": "그린샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 123,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s730",
                "name": "양상추샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 130,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1060,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s731",
                "name": "케이준치킨샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 113,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1090,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s732",
                "name": "리코타치즈샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 120,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1080,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s733",
                "name": "단호박샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 109,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1000,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s734",
                "name": "고구마샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 108,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s735",
                "name": "감자샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 115,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 960,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s736",
                "name": "마카로니샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 127,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 920,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s737",
                "name": "콘샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 122,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1030,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s738",
                "name": "게살샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 129,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1000,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s739",
                "name": "연어샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 122,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1060,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s740",
                "name": "토마토카프레제",
                "type": "side2",
                "amount": 100,
                "calories": 130,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1050,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s741",
                "name": "과일샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 120,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s742",
                "name": "사과샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 121,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1040,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s743",
                "name": "오리엔탈샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 121,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1030,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s744",
                "name": "흑임자샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 113,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1050,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s745",
                "name": "요거트샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 122,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s746",
                "name": "발사믹샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 113,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1000,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s747",
                "name": "시금치나물",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s748",
                "name": "콩나물무침",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s749",
                "name": "숙주나물",
                "type": "side2",
                "amount": 50,
                "calories": 64,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s750",
                "name": "고사리나물",
                "type": "side2",
                "amount": 50,
                "calories": 65,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s751",
                "name": "도라지나물",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s752",
                "name": "취나물",
                "type": "side2",
                "amount": 50,
                "calories": 65,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s753",
                "name": "참나물",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s754",
                "name": "비름나물",
                "type": "side2",
                "amount": 50,
                "calories": 55,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s755",
                "name": "유채나물",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s756",
                "name": "방풍나물",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s757",
                "name": "세발나물",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s758",
                "name": "얼갈이무침",
                "type": "side2",
                "amount": 50,
                "calories": 61,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s759",
                "name": "가지무침",
                "type": "side2",
                "amount": 50,
                "calories": 63,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s760",
                "name": "가지볶음",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s761",
                "name": "애호박볶음",
                "type": "side2",
                "amount": 50,
                "calories": 55,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s762",
                "name": "버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 55,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s763",
                "name": "느타리버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s764",
                "name": "표고버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s765",
                "name": "팽이버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 64,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s766",
                "name": "감자채볶음",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s767",
                "name": "감자조림",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s768",
                "name": "당근볶음",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s769",
                "name": "양파볶음",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s770",
                "name": "마늘쫑볶음",
                "type": "side2",
                "amount": 50,
                "calories": 63,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s771",
                "name": "마늘쫑무침",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s772",
                "name": "우엉조림",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s773",
                "name": "연근조림",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s774",
                "name": "도토리묵무침",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s775",
                "name": "청포묵무침",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s776",
                "name": "오이무침",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s777",
                "name": "오이도라지무침",
                "type": "side2",
                "amount": 50,
                "calories": 62,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s778",
                "name": "미역줄기볶음",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s779",
                "name": "파래무침",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s780",
                "name": "미역초무침",
                "type": "side2",
                "amount": 50,
                "calories": 65,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s781",
                "name": "무생채",
                "type": "side2",
                "amount": 50,
                "calories": 62,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s782",
                "name": "무나물",
                "type": "side2",
                "amount": 50,
                "calories": 55,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s783",
                "name": "더덕구이",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s784",
                "name": "더덕무침",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s785",
                "name": "도라지구이",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s786",
                "name": "브로콜리숙회",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s787",
                "name": "양배추찜",
                "type": "side2",
                "amount": 50,
                "calories": 64,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s788",
                "name": "호박잎찜",
                "type": "side2",
                "amount": 50,
                "calories": 62,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s789",
                "name": "깻잎찜",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s790",
                "name": "깻잎순볶음",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s791",
                "name": "계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 142,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s792",
                "name": "야채계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 144,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s793",
                "name": "치즈계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 135,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s794",
                "name": "명란계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 136,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s795",
                "name": "계란찜",
                "type": "side2",
                "amount": 80,
                "calories": 143,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s796",
                "name": "뚝배기계란찜",
                "type": "side2",
                "amount": 80,
                "calories": 151,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s797",
                "name": "푸딩계란찜",
                "type": "side2",
                "amount": 80,
                "calories": 154,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s798",
                "name": "계란후라이",
                "type": "side2",
                "amount": 80,
                "calories": 145,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s799",
                "name": "스크램블에그",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s800",
                "name": "메추리알장조림",
                "type": "side2",
                "amount": 80,
                "calories": 164,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s801",
                "name": "소고기장조림",
                "type": "side2",
                "amount": 80,
                "calories": 139,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s802",
                "name": "돼지고기장조림",
                "type": "side2",
                "amount": 80,
                "calories": 149,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s803",
                "name": "두부구이",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s804",
                "name": "두부조림",
                "type": "side2",
                "amount": 80,
                "calories": 160,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s805",
                "name": "두부김치",
                "type": "side2",
                "amount": 80,
                "calories": 144,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s806",
                "name": "마파두부",
                "type": "side2",
                "amount": 80,
                "calories": 159,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s807",
                "name": "연두부",
                "type": "side2",
                "amount": 80,
                "calories": 139,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s808",
                "name": "연두부샐러드",
                "type": "side2",
                "amount": 80,
                "calories": 164,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s809",
                "name": "순두부양념장",
                "type": "side2",
                "amount": 80,
                "calories": 158,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s810",
                "name": "건두부무침",
                "type": "side2",
                "amount": 80,
                "calories": 137,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s811",
                "name": "어묵볶음",
                "type": "side2",
                "amount": 80,
                "calories": 151,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s812",
                "name": "간장어묵볶음",
                "type": "side2",
                "amount": 80,
                "calories": 144,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s813",
                "name": "매운어묵볶음",
                "type": "side2",
                "amount": 80,
                "calories": 158,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s814",
                "name": "어묵조림",
                "type": "side2",
                "amount": 80,
                "calories": 148,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s815",
                "name": "비엔나소시지볶음",
                "type": "side2",
                "amount": 80,
                "calories": 152,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s816",
                "name": "소시지야채볶음",
                "type": "side2",
                "amount": 80,
                "calories": 148,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s817",
                "name": "햄구이",
                "type": "side2",
                "amount": 80,
                "calories": 158,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s818",
                "name": "스팸구이",
                "type": "side2",
                "amount": 80,
                "calories": 151,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s819",
                "name": "동그랑땡",
                "type": "side2",
                "amount": 80,
                "calories": 149,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s820",
                "name": "너비아니",
                "type": "side2",
                "amount": 80,
                "calories": 160,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s821",
                "name": "떡갈비",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s822",
                "name": "미트볼조림",
                "type": "side2",
                "amount": 80,
                "calories": 140,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s823",
                "name": "장어강정",
                "type": "side2",
                "amount": 80,
                "calories": 162,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s824",
                "name": "치킨너겟",
                "type": "side2",
                "amount": 80,
                "calories": 139,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s825",
                "name": "용가리치킨",
                "type": "side2",
                "amount": 80,
                "calories": 136,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s826",
                "name": "팝콘치킨",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s827",
                "name": "탕수만두",
                "type": "side2",
                "amount": 80,
                "calories": 143,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s828",
                "name": "군만두",
                "type": "side2",
                "amount": 80,
                "calories": 142,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s829",
                "name": "물만두",
                "type": "side2",
                "amount": 80,
                "calories": 152,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s830",
                "name": "찐만두",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s831",
                "name": "타코야끼",
                "type": "side2",
                "amount": 80,
                "calories": 135,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s832",
                "name": "멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 101,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 640,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s833",
                "name": "잔멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 108,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 690,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s834",
                "name": "호두멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 93,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 660,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s835",
                "name": "아몬드멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 98,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s836",
                "name": "꽈리고추멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 96,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 680,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s837",
                "name": "진미채볶음",
                "type": "side2",
                "amount": 30,
                "calories": 98,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s838",
                "name": "진미채무침",
                "type": "side2",
                "amount": 30,
                "calories": 105,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s839",
                "name": "오징어채볶음",
                "type": "side2",
                "amount": 30,
                "calories": 96,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s840",
                "name": "쥐포볶음",
                "type": "side2",
                "amount": 30,
                "calories": 91,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s841",
                "name": "뱅어포구이",
                "type": "side2",
                "amount": 30,
                "calories": 90,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s842",
                "name": "새우볶음",
                "type": "side2",
                "amount": 30,
                "calories": 90,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 690,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s843",
                "name": "건새우볶음",
                "type": "side2",
                "amount": 30,
                "calories": 105,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 640,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s844",
                "name": "마늘쫑건새우볶음",
                "type": "side2",
                "amount": 30,
                "calories": 95,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s845",
                "name": "땅콩조림",
                "type": "side2",
                "amount": 30,
                "calories": 94,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s846",
                "name": "검은콩조림",
                "type": "side2",
                "amount": 30,
                "calories": 94,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s847",
                "name": "김가루무침",
                "type": "side2",
                "amount": 30,
                "calories": 99,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 650,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s848",
                "name": "김자반",
                "type": "side2",
                "amount": 30,
                "calories": 101,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s849",
                "name": "조미김",
                "type": "side2",
                "amount": 30,
                "calories": 101,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 680,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s850",
                "name": "파래김",
                "type": "side2",
                "amount": 30,
                "calories": 92,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s851",
                "name": "돌김",
                "type": "side2",
                "amount": 30,
                "calories": 105,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 680,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s852",
                "name": "감태",
                "type": "side2",
                "amount": 30,
                "calories": 106,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 680,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s853",
                "name": "야채샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 124,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 930,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s854",
                "name": "그린샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 117,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s855",
                "name": "양상추샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 123,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 990,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s856",
                "name": "케이준치킨샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 110,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 900,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s857",
                "name": "리코타치즈샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 110,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 970,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s858",
                "name": "단호박샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 126,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1090,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s859",
                "name": "고구마샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 120,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 950,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s860",
                "name": "감자샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 125,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 940,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s861",
                "name": "마카로니샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 121,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 970,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s862",
                "name": "콘샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 120,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s863",
                "name": "게살샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 123,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s864",
                "name": "연어샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 125,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s865",
                "name": "토마토카프레제",
                "type": "side2",
                "amount": 100,
                "calories": 130,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 920,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s866",
                "name": "과일샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 110,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s867",
                "name": "사과샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 110,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s868",
                "name": "오리엔탈샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 129,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 900,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s869",
                "name": "흑임자샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 124,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s870",
                "name": "요거트샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 109,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 970,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s871",
                "name": "발사믹샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 111,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1060,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s872",
                "name": "시금치나물",
                "type": "side2",
                "amount": 50,
                "calories": 63,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s873",
                "name": "콩나물무침",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s874",
                "name": "숙주나물",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s875",
                "name": "고사리나물",
                "type": "side2",
                "amount": 50,
                "calories": 61,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s876",
                "name": "도라지나물",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s877",
                "name": "취나물",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s878",
                "name": "참나물",
                "type": "side2",
                "amount": 50,
                "calories": 63,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s879",
                "name": "비름나물",
                "type": "side2",
                "amount": 50,
                "calories": 65,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s880",
                "name": "유채나물",
                "type": "side2",
                "amount": 50,
                "calories": 62,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s881",
                "name": "방풍나물",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s882",
                "name": "세발나물",
                "type": "side2",
                "amount": 50,
                "calories": 61,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s883",
                "name": "얼갈이무침",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s884",
                "name": "가지무침",
                "type": "side2",
                "amount": 50,
                "calories": 65,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s885",
                "name": "가지볶음",
                "type": "side2",
                "amount": 50,
                "calories": 55,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s886",
                "name": "애호박볶음",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s887",
                "name": "버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 61,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s888",
                "name": "느타리버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 64,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s889",
                "name": "표고버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 65,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s890",
                "name": "팽이버섯볶음",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s891",
                "name": "감자채볶음",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s892",
                "name": "감자조림",
                "type": "side2",
                "amount": 50,
                "calories": 61,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s893",
                "name": "당근볶음",
                "type": "side2",
                "amount": 50,
                "calories": 64,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 500,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s894",
                "name": "양파볶음",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s895",
                "name": "마늘쫑볶음",
                "type": "side2",
                "amount": 50,
                "calories": 61,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s896",
                "name": "마늘쫑무침",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s897",
                "name": "우엉조림",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s898",
                "name": "연근조림",
                "type": "side2",
                "amount": 50,
                "calories": 61,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s899",
                "name": "도토리묵무침",
                "type": "side2",
                "amount": 50,
                "calories": 63,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 510,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s900",
                "name": "청포묵무침",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s901",
                "name": "오이무침",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s902",
                "name": "오이도라지무침",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 480,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s903",
                "name": "미역줄기볶음",
                "type": "side2",
                "amount": 50,
                "calories": 60,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s904",
                "name": "파래무침",
                "type": "side2",
                "amount": 50,
                "calories": 64,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s905",
                "name": "미역초무침",
                "type": "side2",
                "amount": 50,
                "calories": 57,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s906",
                "name": "무생채",
                "type": "side2",
                "amount": 50,
                "calories": 62,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 520,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s907",
                "name": "무나물",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 470,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s908",
                "name": "더덕구이",
                "type": "side2",
                "amount": 50,
                "calories": 54,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s909",
                "name": "더덕무침",
                "type": "side2",
                "amount": 50,
                "calories": 65,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s910",
                "name": "도라지구이",
                "type": "side2",
                "amount": 50,
                "calories": 65,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s911",
                "name": "브로콜리숙회",
                "type": "side2",
                "amount": 50,
                "calories": 59,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 450,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s912",
                "name": "양배추찜",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 490,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s913",
                "name": "호박잎찜",
                "type": "side2",
                "amount": 50,
                "calories": 56,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 540,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s914",
                "name": "깻잎찜",
                "type": "side2",
                "amount": 50,
                "calories": 63,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 460,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s915",
                "name": "깻잎순볶음",
                "type": "side2",
                "amount": 50,
                "calories": 58,
                "carbs": 8,
                "protein": 3,
                "fat": 2,
                "cost": 530,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s916",
                "name": "계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 161,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s917",
                "name": "야채계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 155,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s918",
                "name": "치즈계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 139,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s919",
                "name": "명란계란말이",
                "type": "side2",
                "amount": 80,
                "calories": 160,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s920",
                "name": "계란찜",
                "type": "side2",
                "amount": 80,
                "calories": 139,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s921",
                "name": "뚝배기계란찜",
                "type": "side2",
                "amount": 80,
                "calories": 136,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s922",
                "name": "푸딩계란찜",
                "type": "side2",
                "amount": 80,
                "calories": 142,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s923",
                "name": "계란후라이",
                "type": "side2",
                "amount": 80,
                "calories": 146,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s924",
                "name": "스크램블에그",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s925",
                "name": "메추리알장조림",
                "type": "side2",
                "amount": 80,
                "calories": 149,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s926",
                "name": "소고기장조림",
                "type": "side2",
                "amount": 80,
                "calories": 156,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s927",
                "name": "돼지고기장조림",
                "type": "side2",
                "amount": 80,
                "calories": 164,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s928",
                "name": "두부구이",
                "type": "side2",
                "amount": 80,
                "calories": 155,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s929",
                "name": "두부조림",
                "type": "side2",
                "amount": 80,
                "calories": 139,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s930",
                "name": "두부김치",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s931",
                "name": "마파두부",
                "type": "side2",
                "amount": 80,
                "calories": 149,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s932",
                "name": "연두부",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s933",
                "name": "연두부샐러드",
                "type": "side2",
                "amount": 80,
                "calories": 159,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s934",
                "name": "순두부양념장",
                "type": "side2",
                "amount": 80,
                "calories": 137,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s935",
                "name": "건두부무침",
                "type": "side2",
                "amount": 80,
                "calories": 143,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s936",
                "name": "어묵볶음",
                "type": "side2",
                "amount": 80,
                "calories": 152,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s937",
                "name": "간장어묵볶음",
                "type": "side2",
                "amount": 80,
                "calories": 149,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s938",
                "name": "매운어묵볶음",
                "type": "side2",
                "amount": 80,
                "calories": 158,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s939",
                "name": "어묵조림",
                "type": "side2",
                "amount": 80,
                "calories": 136,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s940",
                "name": "비엔나소시지볶음",
                "type": "side2",
                "amount": 80,
                "calories": 150,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s941",
                "name": "소시지야채볶음",
                "type": "side2",
                "amount": 80,
                "calories": 163,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s942",
                "name": "햄구이",
                "type": "side2",
                "amount": 80,
                "calories": 159,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s943",
                "name": "스팸구이",
                "type": "side2",
                "amount": 80,
                "calories": 143,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s944",
                "name": "동그랑땡",
                "type": "side2",
                "amount": 80,
                "calories": 147,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s945",
                "name": "너비아니",
                "type": "side2",
                "amount": 80,
                "calories": 150,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s946",
                "name": "떡갈비",
                "type": "side2",
                "amount": 80,
                "calories": 148,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s947",
                "name": "미트볼조림",
                "type": "side2",
                "amount": 80,
                "calories": 152,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s948",
                "name": "장어강정",
                "type": "side2",
                "amount": 80,
                "calories": 136,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s949",
                "name": "치킨너겟",
                "type": "side2",
                "amount": 80,
                "calories": 149,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s950",
                "name": "용가리치킨",
                "type": "side2",
                "amount": 80,
                "calories": 147,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s951",
                "name": "팝콘치킨",
                "type": "side2",
                "amount": 80,
                "calories": 143,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s952",
                "name": "탕수만두",
                "type": "side2",
                "amount": 80,
                "calories": 150,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s953",
                "name": "군만두",
                "type": "side2",
                "amount": 80,
                "calories": 135,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s954",
                "name": "물만두",
                "type": "side2",
                "amount": 80,
                "calories": 164,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s955",
                "name": "찐만두",
                "type": "side2",
                "amount": 80,
                "calories": 148,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s956",
                "name": "타코야끼",
                "type": "side2",
                "amount": 80,
                "calories": 142,
                "carbs": 5,
                "protein": 10,
                "fat": 8,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s957",
                "name": "멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 98,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 700,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s958",
                "name": "잔멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 94,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 690,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s959",
                "name": "호두멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 108,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s960",
                "name": "아몬드멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 96,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 630,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s961",
                "name": "꽈리고추멸치볶음",
                "type": "side2",
                "amount": 30,
                "calories": 107,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s962",
                "name": "진미채볶음",
                "type": "side2",
                "amount": 30,
                "calories": 101,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 640,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s963",
                "name": "진미채무침",
                "type": "side2",
                "amount": 30,
                "calories": 102,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s964",
                "name": "오징어채볶음",
                "type": "side2",
                "amount": 30,
                "calories": 104,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 690,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s965",
                "name": "쥐포볶음",
                "type": "side2",
                "amount": 30,
                "calories": 104,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s966",
                "name": "뱅어포구이",
                "type": "side2",
                "amount": 30,
                "calories": 98,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 690,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s967",
                "name": "새우볶음",
                "type": "side2",
                "amount": 30,
                "calories": 96,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s968",
                "name": "건새우볶음",
                "type": "side2",
                "amount": 30,
                "calories": 99,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 680,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s969",
                "name": "마늘쫑건새우볶음",
                "type": "side2",
                "amount": 30,
                "calories": 100,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s970",
                "name": "땅콩조림",
                "type": "side2",
                "amount": 30,
                "calories": 97,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s971",
                "name": "검은콩조림",
                "type": "side2",
                "amount": 30,
                "calories": 93,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s972",
                "name": "김가루무침",
                "type": "side2",
                "amount": 30,
                "calories": 101,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 660,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s973",
                "name": "김자반",
                "type": "side2",
                "amount": 30,
                "calories": 91,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s974",
                "name": "조미김",
                "type": "side2",
                "amount": 30,
                "calories": 106,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s975",
                "name": "파래김",
                "type": "side2",
                "amount": 30,
                "calories": 105,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s976",
                "name": "돌김",
                "type": "side2",
                "amount": 30,
                "calories": 100,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s977",
                "name": "감태",
                "type": "side2",
                "amount": 30,
                "calories": 92,
                "carbs": 10,
                "protein": 5,
                "fat": 3,
                "cost": 710,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s978",
                "name": "야채샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 131,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1040,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s979",
                "name": "그린샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 118,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 930,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s980",
                "name": "양상추샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 115,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1050,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s981",
                "name": "케이준치킨샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 130,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 950,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s982",
                "name": "리코타치즈샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 118,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 900,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "s983",
                "name": "단호박샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 117,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s984",
                "name": "고구마샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 119,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s985",
                "name": "감자샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 109,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 940,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s986",
                "name": "마카로니샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 110,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s987",
                "name": "콘샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 129,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 960,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s988",
                "name": "게살샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 123,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 950,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s989",
                "name": "연어샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 109,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1080,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s990",
                "name": "토마토카프레제",
                "type": "side2",
                "amount": 100,
                "calories": 131,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1020,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s991",
                "name": "과일샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 115,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s992",
                "name": "사과샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 123,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 980,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s993",
                "name": "오리엔탈샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 128,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1070,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s994",
                "name": "흑임자샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 115,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 940,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s995",
                "name": "요거트샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 115,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 910,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "s996",
                "name": "발사믹샐러드",
                "type": "side2",
                "amount": 100,
                "calories": 127,
                "carbs": 15,
                "protein": 2,
                "fat": 8,
                "cost": 1010,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k997",
                "name": "배추김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k998",
                "name": "포기김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k999",
                "name": "겉절이",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1000",
                "name": "묵은지",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1001",
                "name": "볶음김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1002",
                "name": "백김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1003",
                "name": "동치미",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1004",
                "name": "나박김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 22,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1005",
                "name": "물김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 27,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1006",
                "name": "깍두기",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1007",
                "name": "섞박지",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1008",
                "name": "총각김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1009",
                "name": "알타리김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1010",
                "name": "열무김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1011",
                "name": "열무물김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1012",
                "name": "파김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 27,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1013",
                "name": "갓김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1014",
                "name": "부추김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1015",
                "name": "오이소박이",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1016",
                "name": "오이깍두기",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1017",
                "name": "무말랭이무침",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1018",
                "name": "깻잎장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1019",
                "name": "마늘장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1020",
                "name": "마늘쫑장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1021",
                "name": "양파장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1022",
                "name": "고추장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1023",
                "name": "매실장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 22,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1024",
                "name": "명이나물",
                "type": "kimchi",
                "amount": 40,
                "calories": 27,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1025",
                "name": "단무지",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1026",
                "name": "치킨무",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1027",
                "name": "피클",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1028",
                "name": "할라피뇨",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1029",
                "name": "락교",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1030",
                "name": "초생강",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1031",
                "name": "배추김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1032",
                "name": "포기김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1033",
                "name": "겉절이",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1034",
                "name": "묵은지",
                "type": "kimchi",
                "amount": 40,
                "calories": 22,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1035",
                "name": "볶음김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1036",
                "name": "백김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1037",
                "name": "동치미",
                "type": "kimchi",
                "amount": 40,
                "calories": 22,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1038",
                "name": "나박김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1039",
                "name": "물김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1040",
                "name": "깍두기",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1041",
                "name": "섞박지",
                "type": "kimchi",
                "amount": 40,
                "calories": 22,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1042",
                "name": "총각김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 22,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1043",
                "name": "알타리김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1044",
                "name": "열무김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1045",
                "name": "열무물김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1046",
                "name": "파김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1047",
                "name": "갓김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1048",
                "name": "부추김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1049",
                "name": "오이소박이",
                "type": "kimchi",
                "amount": 40,
                "calories": 22,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1050",
                "name": "오이깍두기",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1051",
                "name": "무말랭이무침",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1052",
                "name": "깻잎장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1053",
                "name": "마늘장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1054",
                "name": "마늘쫑장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1055",
                "name": "양파장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1056",
                "name": "고추장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1057",
                "name": "매실장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1058",
                "name": "명이나물",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1059",
                "name": "단무지",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1060",
                "name": "치킨무",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1061",
                "name": "피클",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1062",
                "name": "할라피뇨",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1063",
                "name": "락교",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1064",
                "name": "초생강",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1065",
                "name": "배추김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1066",
                "name": "포기김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1067",
                "name": "겉절이",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1068",
                "name": "묵은지",
                "type": "kimchi",
                "amount": 40,
                "calories": 27,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1069",
                "name": "볶음김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1070",
                "name": "백김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 22,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1071",
                "name": "동치미",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1072",
                "name": "나박김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1073",
                "name": "물김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1074",
                "name": "깍두기",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1075",
                "name": "섞박지",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1076",
                "name": "총각김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 24,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1077",
                "name": "알타리김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 22,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1078",
                "name": "열무김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1079",
                "name": "열무물김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 300,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1080",
                "name": "파김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 22,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1081",
                "name": "갓김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1082",
                "name": "부추김치",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1083",
                "name": "오이소박이",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1084",
                "name": "오이깍두기",
                "type": "kimchi",
                "amount": 40,
                "calories": 23,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1085",
                "name": "무말랭이무침",
                "type": "kimchi",
                "amount": 40,
                "calories": 27,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1086",
                "name": "깻잎장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1087",
                "name": "마늘장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1088",
                "name": "마늘쫑장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 27,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1089",
                "name": "양파장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1090",
                "name": "고추장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1091",
                "name": "매실장아찌",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 310,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1092",
                "name": "명이나물",
                "type": "kimchi",
                "amount": 40,
                "calories": 27,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1093",
                "name": "단무지",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1094",
                "name": "치킨무",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1095",
                "name": "피클",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 280,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1096",
                "name": "할라피뇨",
                "type": "kimchi",
                "amount": 40,
                "calories": 25,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 270,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1097",
                "name": "락교",
                "type": "kimchi",
                "amount": 40,
                "calories": 27,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 320,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "k1098",
                "name": "초생강",
                "type": "kimchi",
                "amount": 40,
                "calories": 26,
                "carbs": 5,
                "protein": 1,
                "fat": 0,
                "cost": 290,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1099",
                "name": "사과",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1100",
                "name": "배",
                "type": "dessert",
                "amount": 100,
                "calories": 160,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1101",
                "name": "포도",
                "type": "dessert",
                "amount": 100,
                "calories": 157,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1102",
                "name": "귤",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1103",
                "name": "오렌지",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1104",
                "name": "바나나",
                "type": "dessert",
                "amount": 100,
                "calories": 155,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1105",
                "name": "수박",
                "type": "dessert",
                "amount": 100,
                "calories": 162,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1106",
                "name": "참외",
                "type": "dessert",
                "amount": 100,
                "calories": 156,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1107",
                "name": "복숭아",
                "type": "dessert",
                "amount": 100,
                "calories": 144,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1108",
                "name": "자두",
                "type": "dessert",
                "amount": 100,
                "calories": 149,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1109",
                "name": "딸기",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1110",
                "name": "토마토",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1111",
                "name": "방울토마토",
                "type": "dessert",
                "amount": 100,
                "calories": 137,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1112",
                "name": "파인애플",
                "type": "dessert",
                "amount": 100,
                "calories": 143,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1113",
                "name": "키위",
                "type": "dessert",
                "amount": 100,
                "calories": 150,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1114",
                "name": "망고",
                "type": "dessert",
                "amount": 100,
                "calories": 152,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1115",
                "name": "메론",
                "type": "dessert",
                "amount": 100,
                "calories": 151,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1116",
                "name": "블루베리",
                "type": "dessert",
                "amount": 100,
                "calories": 135,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1117",
                "name": "감",
                "type": "dessert",
                "amount": 100,
                "calories": 161,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1118",
                "name": "단감",
                "type": "dessert",
                "amount": 100,
                "calories": 150,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1119",
                "name": "홍시",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1120",
                "name": "곶감",
                "type": "dessert",
                "amount": 100,
                "calories": 164,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1121",
                "name": "요구르트",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1122",
                "name": "마시는요구르트",
                "type": "dessert",
                "amount": 100,
                "calories": 143,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1123",
                "name": "떠먹는요구르트",
                "type": "dessert",
                "amount": 100,
                "calories": 155,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1124",
                "name": "플레인요거트",
                "type": "dessert",
                "amount": 100,
                "calories": 152,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1125",
                "name": "딸기요거트",
                "type": "dessert",
                "amount": 100,
                "calories": 138,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1126",
                "name": "블루베리요거트",
                "type": "dessert",
                "amount": 100,
                "calories": 150,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1127",
                "name": "우유",
                "type": "dessert",
                "amount": 100,
                "calories": 151,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1128",
                "name": "초코우유",
                "type": "dessert",
                "amount": 100,
                "calories": 145,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1129",
                "name": "딸기우유",
                "type": "dessert",
                "amount": 100,
                "calories": 142,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1130",
                "name": "바나나우유",
                "type": "dessert",
                "amount": 100,
                "calories": 138,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1131",
                "name": "커피우유",
                "type": "dessert",
                "amount": 100,
                "calories": 142,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1132",
                "name": "두유",
                "type": "dessert",
                "amount": 100,
                "calories": 144,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1133",
                "name": "검은콩두유",
                "type": "dessert",
                "amount": 100,
                "calories": 154,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1134",
                "name": "주스",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1135",
                "name": "오렌지주스",
                "type": "dessert",
                "amount": 100,
                "calories": 155,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1136",
                "name": "포도주스",
                "type": "dessert",
                "amount": 100,
                "calories": 141,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1137",
                "name": "사과주스",
                "type": "dessert",
                "amount": 100,
                "calories": 152,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1138",
                "name": "토마토주스",
                "type": "dessert",
                "amount": 100,
                "calories": 155,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1139",
                "name": "망고주스",
                "type": "dessert",
                "amount": 100,
                "calories": 141,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1140",
                "name": "알로에주스",
                "type": "dessert",
                "amount": 100,
                "calories": 135,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1141",
                "name": "매실차",
                "type": "dessert",
                "amount": 100,
                "calories": 150,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1142",
                "name": "오미자차",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1143",
                "name": "유자차",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1144",
                "name": "생강차",
                "type": "dessert",
                "amount": 100,
                "calories": 135,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1145",
                "name": "모과차",
                "type": "dessert",
                "amount": 100,
                "calories": 153,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1146",
                "name": "레몬차",
                "type": "dessert",
                "amount": 100,
                "calories": 136,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1147",
                "name": "자몽차",
                "type": "dessert",
                "amount": 100,
                "calories": 163,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1148",
                "name": "녹차",
                "type": "dessert",
                "amount": 100,
                "calories": 152,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1149",
                "name": "홍차",
                "type": "dessert",
                "amount": 100,
                "calories": 136,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1150",
                "name": "둥굴레차",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1151",
                "name": "보리차",
                "type": "dessert",
                "amount": 100,
                "calories": 147,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1152",
                "name": "결명자차",
                "type": "dessert",
                "amount": 100,
                "calories": 155,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1153",
                "name": "옥수수수염차",
                "type": "dessert",
                "amount": 100,
                "calories": 163,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1154",
                "name": "루이보스차",
                "type": "dessert",
                "amount": 100,
                "calories": 143,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1155",
                "name": "캐모마일차",
                "type": "dessert",
                "amount": 100,
                "calories": 157,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1156",
                "name": "페퍼민트차",
                "type": "dessert",
                "amount": 100,
                "calories": 162,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1157",
                "name": "식혜",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1158",
                "name": "수정과",
                "type": "dessert",
                "amount": 100,
                "calories": 155,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1159",
                "name": "미숫가루",
                "type": "dessert",
                "amount": 100,
                "calories": 137,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1160",
                "name": "화채",
                "type": "dessert",
                "amount": 100,
                "calories": 156,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1161",
                "name": "수박화채",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1162",
                "name": "과일화채",
                "type": "dessert",
                "amount": 100,
                "calories": 144,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1163",
                "name": "아이스크림",
                "type": "dessert",
                "amount": 100,
                "calories": 164,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1164",
                "name": "바닐라아이스크림",
                "type": "dessert",
                "amount": 100,
                "calories": 150,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1165",
                "name": "초코아이스크림",
                "type": "dessert",
                "amount": 100,
                "calories": 163,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1166",
                "name": "딸기아이스크림",
                "type": "dessert",
                "amount": 100,
                "calories": 140,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1167",
                "name": "녹차아이스크림",
                "type": "dessert",
                "amount": 100,
                "calories": 137,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1168",
                "name": "팥빙수",
                "type": "dessert",
                "amount": 100,
                "calories": 138,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1169",
                "name": "과일빙수",
                "type": "dessert",
                "amount": 100,
                "calories": 163,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1170",
                "name": "케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1171",
                "name": "조각케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 156,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1172",
                "name": "치즈케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 161,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "d1173",
                "name": "초코케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 150,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1174",
                "name": "고구마케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 151,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1175",
                "name": "생크림케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 136,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1176",
                "name": "롤케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 164,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1177",
                "name": "카스텔라",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1178",
                "name": "마카롱",
                "type": "dessert",
                "amount": 100,
                "calories": 157,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1179",
                "name": "쿠키",
                "type": "dessert",
                "amount": 100,
                "calories": 135,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1180",
                "name": "초코칩쿠키",
                "type": "dessert",
                "amount": 100,
                "calories": 162,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1181",
                "name": "버터쿠키",
                "type": "dessert",
                "amount": 100,
                "calories": 139,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1182",
                "name": "브라우니",
                "type": "dessert",
                "amount": 100,
                "calories": 136,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1183",
                "name": "마들렌",
                "type": "dessert",
                "amount": 100,
                "calories": 153,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1184",
                "name": "휘낭시에",
                "type": "dessert",
                "amount": 100,
                "calories": 141,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1185",
                "name": "에그타르트",
                "type": "dessert",
                "amount": 100,
                "calories": 156,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1186",
                "name": "와플",
                "type": "dessert",
                "amount": 100,
                "calories": 150,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1187",
                "name": "팬케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1188",
                "name": "도넛",
                "type": "dessert",
                "amount": 100,
                "calories": 135,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1189",
                "name": "츄러스",
                "type": "dessert",
                "amount": 100,
                "calories": 162,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1190",
                "name": "호떡",
                "type": "dessert",
                "amount": 100,
                "calories": 137,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1191",
                "name": "붕어빵",
                "type": "dessert",
                "amount": 100,
                "calories": 135,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1192",
                "name": "국화빵",
                "type": "dessert",
                "amount": 100,
                "calories": 144,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1193",
                "name": "계란빵",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1194",
                "name": "호두과자",
                "type": "dessert",
                "amount": 100,
                "calories": 143,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1195",
                "name": "떡",
                "type": "dessert",
                "amount": 100,
                "calories": 163,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1196",
                "name": "꿀떡",
                "type": "dessert",
                "amount": 100,
                "calories": 157,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1197",
                "name": "바람떡",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1198",
                "name": "인절미",
                "type": "dessert",
                "amount": 100,
                "calories": 136,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1199",
                "name": "절편",
                "type": "dessert",
                "amount": 100,
                "calories": 164,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1200",
                "name": "가래떡",
                "type": "dessert",
                "amount": 100,
                "calories": 151,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1201",
                "name": "송편",
                "type": "dessert",
                "amount": 100,
                "calories": 164,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1202",
                "name": "시루떡",
                "type": "dessert",
                "amount": 100,
                "calories": 145,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1203",
                "name": "백설기",
                "type": "dessert",
                "amount": 100,
                "calories": 140,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1204",
                "name": "약식",
                "type": "dessert",
                "amount": 100,
                "calories": 147,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1205",
                "name": "두쫀쿠",
                "type": "dessert",
                "amount": 100,
                "calories": 162,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "d1206",
                "name": "탕후루",
                "type": "dessert",
                "amount": 100,
                "calories": 142,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "d1207",
                "name": "요아정",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "d1208",
                "name": "사과",
                "type": "dessert",
                "amount": 100,
                "calories": 155,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1209",
                "name": "배",
                "type": "dessert",
                "amount": 100,
                "calories": 157,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1210",
                "name": "포도",
                "type": "dessert",
                "amount": 100,
                "calories": 139,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1211",
                "name": "귤",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1212",
                "name": "오렌지",
                "type": "dessert",
                "amount": 100,
                "calories": 161,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1213",
                "name": "바나나",
                "type": "dessert",
                "amount": 100,
                "calories": 141,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1214",
                "name": "수박",
                "type": "dessert",
                "amount": 100,
                "calories": 150,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1215",
                "name": "참외",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1216",
                "name": "복숭아",
                "type": "dessert",
                "amount": 100,
                "calories": 154,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1217",
                "name": "자두",
                "type": "dessert",
                "amount": 100,
                "calories": 139,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1218",
                "name": "딸기",
                "type": "dessert",
                "amount": 100,
                "calories": 164,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1219",
                "name": "토마토",
                "type": "dessert",
                "amount": 100,
                "calories": 151,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1220",
                "name": "방울토마토",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1221",
                "name": "파인애플",
                "type": "dessert",
                "amount": 100,
                "calories": 154,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1222",
                "name": "키위",
                "type": "dessert",
                "amount": 100,
                "calories": 135,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1223",
                "name": "망고",
                "type": "dessert",
                "amount": 100,
                "calories": 162,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1224",
                "name": "메론",
                "type": "dessert",
                "amount": 100,
                "calories": 143,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1225",
                "name": "블루베리",
                "type": "dessert",
                "amount": 100,
                "calories": 140,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1226",
                "name": "감",
                "type": "dessert",
                "amount": 100,
                "calories": 158,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1227",
                "name": "단감",
                "type": "dessert",
                "amount": 100,
                "calories": 154,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1228",
                "name": "홍시",
                "type": "dessert",
                "amount": 100,
                "calories": 154,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1229",
                "name": "곶감",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1230",
                "name": "요구르트",
                "type": "dessert",
                "amount": 100,
                "calories": 142,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1231",
                "name": "마시는요구르트",
                "type": "dessert",
                "amount": 100,
                "calories": 143,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1232",
                "name": "떠먹는요구르트",
                "type": "dessert",
                "amount": 100,
                "calories": 152,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1233",
                "name": "플레인요거트",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1234",
                "name": "딸기요거트",
                "type": "dessert",
                "amount": 100,
                "calories": 153,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1235",
                "name": "블루베리요거트",
                "type": "dessert",
                "amount": 100,
                "calories": 151,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1236",
                "name": "우유",
                "type": "dessert",
                "amount": 100,
                "calories": 154,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1237",
                "name": "초코우유",
                "type": "dessert",
                "amount": 100,
                "calories": 150,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1238",
                "name": "딸기우유",
                "type": "dessert",
                "amount": 100,
                "calories": 151,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1239",
                "name": "바나나우유",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1240",
                "name": "커피우유",
                "type": "dessert",
                "amount": 100,
                "calories": 164,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1241",
                "name": "두유",
                "type": "dessert",
                "amount": 100,
                "calories": 160,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1242",
                "name": "검은콩두유",
                "type": "dessert",
                "amount": 100,
                "calories": 160,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1243",
                "name": "주스",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1244",
                "name": "오렌지주스",
                "type": "dessert",
                "amount": 100,
                "calories": 138,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1245",
                "name": "포도주스",
                "type": "dessert",
                "amount": 100,
                "calories": 163,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 840,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1246",
                "name": "사과주스",
                "type": "dessert",
                "amount": 100,
                "calories": 140,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1247",
                "name": "토마토주스",
                "type": "dessert",
                "amount": 100,
                "calories": 147,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1248",
                "name": "망고주스",
                "type": "dessert",
                "amount": 100,
                "calories": 137,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1249",
                "name": "알로에주스",
                "type": "dessert",
                "amount": 100,
                "calories": 137,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1250",
                "name": "매실차",
                "type": "dessert",
                "amount": 100,
                "calories": 162,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1251",
                "name": "오미자차",
                "type": "dessert",
                "amount": 100,
                "calories": 139,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1252",
                "name": "유자차",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 780,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1253",
                "name": "생강차",
                "type": "dessert",
                "amount": 100,
                "calories": 156,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1254",
                "name": "모과차",
                "type": "dessert",
                "amount": 100,
                "calories": 141,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1255",
                "name": "레몬차",
                "type": "dessert",
                "amount": 100,
                "calories": 138,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1256",
                "name": "자몽차",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1257",
                "name": "녹차",
                "type": "dessert",
                "amount": 100,
                "calories": 157,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1258",
                "name": "홍차",
                "type": "dessert",
                "amount": 100,
                "calories": 140,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1259",
                "name": "둥굴레차",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1260",
                "name": "보리차",
                "type": "dessert",
                "amount": 100,
                "calories": 139,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1261",
                "name": "결명자차",
                "type": "dessert",
                "amount": 100,
                "calories": 147,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1262",
                "name": "옥수수수염차",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1263",
                "name": "루이보스차",
                "type": "dessert",
                "amount": 100,
                "calories": 155,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1264",
                "name": "캐모마일차",
                "type": "dessert",
                "amount": 100,
                "calories": 153,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1265",
                "name": "페퍼민트차",
                "type": "dessert",
                "amount": 100,
                "calories": 149,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1266",
                "name": "식혜",
                "type": "dessert",
                "amount": 100,
                "calories": 156,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1267",
                "name": "수정과",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1268",
                "name": "미숫가루",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1269",
                "name": "화채",
                "type": "dessert",
                "amount": 100,
                "calories": 152,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1270",
                "name": "수박화채",
                "type": "dessert",
                "amount": 100,
                "calories": 139,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1271",
                "name": "과일화채",
                "type": "dessert",
                "amount": 100,
                "calories": 145,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1272",
                "name": "아이스크림",
                "type": "dessert",
                "amount": 100,
                "calories": 147,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1273",
                "name": "바닐라아이스크림",
                "type": "dessert",
                "amount": 100,
                "calories": 137,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1274",
                "name": "초코아이스크림",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1275",
                "name": "딸기아이스크림",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1276",
                "name": "녹차아이스크림",
                "type": "dessert",
                "amount": 100,
                "calories": 153,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1277",
                "name": "팥빙수",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1278",
                "name": "과일빙수",
                "type": "dessert",
                "amount": 100,
                "calories": 147,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1279",
                "name": "케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 150,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1280",
                "name": "조각케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 138,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1281",
                "name": "치즈케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 162,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "d1282",
                "name": "초코케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 139,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1283",
                "name": "고구마케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1284",
                "name": "생크림케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 141,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1285",
                "name": "롤케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 151,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1286",
                "name": "카스텔라",
                "type": "dessert",
                "amount": 100,
                "calories": 149,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1287",
                "name": "마카롱",
                "type": "dessert",
                "amount": 100,
                "calories": 160,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1288",
                "name": "쿠키",
                "type": "dessert",
                "amount": 100,
                "calories": 149,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1289",
                "name": "초코칩쿠키",
                "type": "dessert",
                "amount": 100,
                "calories": 141,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 850,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1290",
                "name": "버터쿠키",
                "type": "dessert",
                "amount": 100,
                "calories": 145,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1291",
                "name": "브라우니",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1292",
                "name": "마들렌",
                "type": "dessert",
                "amount": 100,
                "calories": 135,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 830,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1293",
                "name": "휘낭시에",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 810,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1294",
                "name": "에그타르트",
                "type": "dessert",
                "amount": 100,
                "calories": 157,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1295",
                "name": "와플",
                "type": "dessert",
                "amount": 100,
                "calories": 136,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 750,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1296",
                "name": "팬케이크",
                "type": "dessert",
                "amount": 100,
                "calories": 138,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1297",
                "name": "도넛",
                "type": "dessert",
                "amount": 100,
                "calories": 158,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 820,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1298",
                "name": "츄러스",
                "type": "dessert",
                "amount": 100,
                "calories": 146,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1299",
                "name": "호떡",
                "type": "dessert",
                "amount": 100,
                "calories": 156,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1300",
                "name": "붕어빵",
                "type": "dessert",
                "amount": 100,
                "calories": 151,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1301",
                "name": "국화빵",
                "type": "dessert",
                "amount": 100,
                "calories": 163,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1302",
                "name": "계란빵",
                "type": "dessert",
                "amount": 100,
                "calories": 136,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1303",
                "name": "호두과자",
                "type": "dessert",
                "amount": 100,
                "calories": 145,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1304",
                "name": "떡",
                "type": "dessert",
                "amount": 100,
                "calories": 142,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1305",
                "name": "꿀떡",
                "type": "dessert",
                "amount": 100,
                "calories": 162,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 740,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1306",
                "name": "바람떡",
                "type": "dessert",
                "amount": 100,
                "calories": 148,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1307",
                "name": "인절미",
                "type": "dessert",
                "amount": 100,
                "calories": 137,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 870,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1308",
                "name": "절편",
                "type": "dessert",
                "amount": 100,
                "calories": 157,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1309",
                "name": "가래떡",
                "type": "dessert",
                "amount": 100,
                "calories": 137,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1310",
                "name": "송편",
                "type": "dessert",
                "amount": 100,
                "calories": 147,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 790,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1311",
                "name": "시루떡",
                "type": "dessert",
                "amount": 100,
                "calories": 155,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 860,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1312",
                "name": "백설기",
                "type": "dessert",
                "amount": 100,
                "calories": 157,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 720,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1313",
                "name": "약식",
                "type": "dessert",
                "amount": 100,
                "calories": 157,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 760,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": false
        },
        {
                "id": "d1314",
                "name": "두쫀쿠",
                "type": "dessert",
                "amount": 100,
                "calories": 149,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 770,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "d1315",
                "name": "탕후루",
                "type": "dessert",
                "amount": 100,
                "calories": 162,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 730,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        },
        {
                "id": "d1316",
                "name": "요아정",
                "type": "dessert",
                "amount": 100,
                "calories": 159,
                "carbs": 30,
                "protein": 2,
                "fat": 5,
                "cost": 800,
                "ingredients": [
                        "재료1",
                        "재료2"
                ],
                "isTrendy": true
        }
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
