const playerData = {
    gk: {
        position: "門將 (Goalkeeper)",
        tactics: "作為球隊的最後一道防線，負責守住球門，組織後場防守，並在必要時快速出擊解圍。需要與後衛密切配合，確保防守區域不被對方滲透。",
        technical: "撲救（快速反應撲出射門）、反應速度（迅速判斷球路）、手抛球（發動快速反擊）、腳下技術（現代門將需參與短傳組織）。",
        attributes: "撲救: 90, 反應: 92, 傳球: 70, 速度: 55, 力量: 80",
        attack: "留在禁區內，提供最後一道防線；在角球或任意球時，偶爾上前參與進攻（例如比賽末段落後時）。",
        defense: "守住球門，快速出擊解圍單刀球，指揮後衛站位，確保防線穩定。",
        example: "曼努埃爾·諾伊爾 (Manuel Neuer) - 德國拜仁慕尼黑門將，被譽為現代「掃蕩型門將」的代表，腳下技術出色，經常參與後場組織。"
    },
    cb1: {
        position: "左中後衛 (Left Center Back)",
        tactics: "負責防守左側區域，與左翼衛配合，補位中路或邊路漏洞。需要有良好的位置感和預判能力，防止對方從左路滲透。",
        technical: "搶斷（精準攔截對方傳球）、頭球（防守和進攻定位球）、長傳（發動反擊）、盯人（緊跟對方前鋒）。",
        attributes: "防守: 85, 力量: 88, 傳球: 75, 速度: 68, 頭球: 90",
        attack: "適時上前助攻，參與角球或任意球進攻，利用頭球威脅對方球門。",
        defense: "緊盯對方前鋒或邊鋒，保持防線穩定，協助左翼衛防守邊路進攻。",
        example: "維吉爾·范戴克 (Virgil van Dijk) - 荷蘭利物浦中後衛，以出色的防守意識、頭球能力和領導力聞名。"
    },
    cb2: {
        position: "中後衛 (Center Back)",
        tactics: "作為防線核心，負責指揮後衛站位，盯防對方中鋒或進攻核心。需要具備領導能力和冷靜的頭腦，確保防線整體協調。",
        technical: "搶斷（攔截對方傳球）、攔截（切斷進攻路線）、頭球（防守高空球）、短傳（穩定後場出球）。",
        attributes: "防守: 88, 力量: 90, 傳球: 70, 速度: 65, 頭球: 92",
        attack: "參與定位球進攻，利用身高和頭球能力製造威脅。",
        defense: "組織防線，防止對方中路滲透，與雙後腰協作保護禁區前沿。",
        example: "塞爾吉奧·拉莫斯 (Sergio Ramos) - 西班牙前皇馬中後衛，以強硬防守、進攻能力和關鍵時刻的頭球進球著稱。"
    },
    cb3: {
        position: "右中後衛 (Right Center Back)",
        tactics: "負責防守右側區域，與右翼衛配合，補位中路或邊路。需要在防守和支援進攻之間找到平衡，保持右路穩定。",
        technical: "搶斷（快速斷球）、頭球（防守高空球）、短傳（穩定出球）、跑位（補位意識）。",
        attributes: "防守: 85, 力量: 87, 傳球: 72, 速度: 70, 頭球: 88",
        attack: "適時上前助攻，利用長傳或頭球參與進攻。",
        defense: "緊盯對方左邊鋒或前鋒，協助右翼衛防守邊路，防止對方切入禁區。",
        example: "卡洛斯·普約爾 (Carles Puyol) - 西班牙前巴塞隆拿中後衛，以堅韌防守和領導力聞名，防守範圍廣泛。"
    },
    cm1: {
        position: "左後腰 (Left Defensive Midfielder)",
        tactics: "防守中場核心，負責串聯後場與前場，阻斷對方進攻並保護後防。需要在防守與進攻中找到平衡，提供中場硬度和穩定性。",
        technical: "傳球（短傳和長傳組織）、攔截（切斷對方傳球路線）、跑動（覆蓋中場區域）、搶斷（奪回球權）。",
        attributes: "傳球: 82, 防守: 80, 體力: 90, 速度: 72, 力量: 85",
        attack: "前插支援進攻，提供傳球選擇，偶爾遠射試探對方門將。",
        defense: "回防中場，阻斷對方進攻，壓迫對手中場球員，協助後衛防守。",
        example: "恩戈洛·坎特 (N'Golo Kanté) - 法國切爾西中場，以驚人的跑動能力、攔截和防守覆蓋範圍聞名。"
    },
    cm2: {
        position: "右後腰 (Right Defensive Midfielder)",
        tactics: "與左後腰配合，保護後防線，負責中場防守和過渡。需要在防守時壓迫對方，進攻時提供支援，保持中場控制力。",
        technical: "傳球（穩定出球）、搶斷（奪回球權）、位置感（保持站位）、遠射（進攻威脅）。",
        attributes: "傳球: 80, 防守: 82, 體力: 88, 速度: 70, 力量: 80",
        attack: "支援前場，提供中距離射門或關鍵傳球，參與進攻組織。",
        defense: "協助後衛防守，壓迫對方中場，保護禁區前沿不被突破。",
        example: "塞爾吉奧·布斯克茨 (Sergio Busquets) - 西班牙巴塞隆拿中場，以出色的位置感和傳球能力穩定中場防守。"
    },
    lm: {
        position: "左翼衛 (Left Wing Back)",
        tactics: "負責左路進攻與防守，提供邊路寬度，下底傳中或內切製造威脅。需要在攻防轉換中快速切換角色。",
        technical: "盤帶（突破對方邊衛）、傳中（精準傳球給前鋒）、速度（上下奔跑）、防守（回防攔截）。",
        attributes: "速度: 88, 盤帶: 85, 傳球: 80, 防守: 75, 體力: 90",
        attack: "下底傳中支援前鋒，內切射門或與中場配合製造機會。",
        defense: "回防左路，限制對方右邊鋒，協助左中後衛防守邊路。",
        example: "阿方索·戴維斯 (Alphonso Davies) - 加拿大拜仁慕尼黑左翼衛，以驚人速度和攻防能力聞名。"
    },
    rm: {
        position: "右翼衛 (Right Wing Back)",
        tactics: "負責右路進攻與防守，提供邊路深度，通過傳中或內切威脅對方防線。需要在攻防之間保持高強度跑動。",
        technical: "盤帶（突破防守）、傳中（支援前鋒）、速度（快速推進）、搶斷（防守回追）。",
        attributes: "速度: 87, 盤帶: 84, 傳球: 78, 防守: 74, 體力: 88",
        attack: "下底傳中，內切射門或與中場配合，製造進攻機會。",
        defense: "回防右路，限制對方左邊鋒，協助右中後衛防守邊路。",
        example: "特倫特·亞歷山大-阿諾德 (Trent Alexander-Arnold) - 英格兰利物浦右翼衛，以精準傳中和進攻創造力著稱。"
    },
    am: {
        position: "進攻中場 (Attacking Midfielder)",
        tactics: "作為進攻核心，負責組織進攻、創造得分機會，通過傳球或個人能力撕開對方防線。需要在關鍵時刻承擔責任。",
        technical: "傳球（關鍵直塞）、射門（遠射和禁區內終結）、視野（洞察比賽）、盤帶（突破防守）。",
        attributes: "傳球: 88, 射門: 85, 盤帶: 87, 速度: 78, 視野: 90",
        attack: "前插禁區製造威脅，提供致命傳球或直接射門得分。",
        defense: "適度回防，壓迫對方中場，協助後腰減輕防守壓力。",
        example: "凱文·德布魯內 (Kevin De Bruyne) - 比利時曼城中場，以出色的傳球視野和遠射能力聞名全球。"
    },
    st1: {
        position: "左前鋒 (Left Striker)",
        tactics: "負責進球和牽制後衛，通過跑位拉開對方防線，為隊友創造空間。需要在禁區內保持冷靜，抓住機會得分。",
        technical: "射門（精準終結）、跑位（脫離防守）、頭球（搶點得分）、盤帶（單兵作戰）。",
        attributes: "射門: 90, 速度: 85, 力量: 87, 盤帶: 80, 頭球: 85",
        attack: "衝擊禁區，尋找射門機會，與右前鋒或進攻中場配合。",
        defense: "壓迫對方後衛，參與高位逼搶，阻斷對方後場出球。",
        example: "羅伯特·萊萬多夫斯基 (Robert Lewandowski) - 波蘭拜仁慕尼黑前鋒，以高效射門和全面能力成為頂級中鋒。"
    },
    st2: {
        position: "右前鋒 (Right Striker)",
        tactics: "負責進球並拉開防守，利用速度或技術突破對方防線。需要與左前鋒形成默契，製造進攻多樣性。",
        technical: "射門（禁區內終結）、跑位（靈活脫離防守）、盤帶（突破後衛）、速度（快速反擊）。",
        attributes: "射門: 89, 速度: 90, 力量: 82, 盤帶: 85, 頭球: 80",
        attack: "衝擊禁區，配合隊友完成進攻，尋找空位射門或傳球。",
        defense: "壓迫對方後衛，參與高位逼搶，幫助球隊在前場保持壓力。",
        example: "基利安·姆巴佩 (Kylian Mbappé) - 法國巴黎聖日耳曼前鋒，以驚人速度和得分能力成為新一代巨星。"
    }
};

function showPlayerInfo(playerId) {
    const data = playerData[playerId];
    document.getElementById("player-position").innerText = data.position;
    document.getElementById("position").innerText = data.position;
    document.getElementById("tactics").innerText = data.tactics;
    document.getElementById("technical").innerText = data.technical;
    document.getElementById("attributes").innerText = data.attributes;
    document.getElementById("attack").innerText = data.attack;
    document.getElementById("defense").innerText = data.defense;
    document.getElementById("example").innerText = data.example;
}
