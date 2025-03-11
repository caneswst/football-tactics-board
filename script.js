// 假設這是從 Excel 轉換來的球員資料 (JSON 格式)
const playerPool = [
    { name: "Manuel Neuer", position: "GK" },
    { name: "Thibaut Courtois", position: "GK" },
    { name: "Virgil van Dijk", position: "CB" },
    { name: "Sergio Ramos", position: "CB" },
    { name: "Carles Puyol", position: "CB" },
    { name: "Kalidou Koulibaly", position: "CB" },
    { name: "N'Golo Kanté", position: "CM" },
    { name: "Sergio Busquets", position: "CM" },
    { name: "Toni Kroos", position: "CM" },
    { name: "Alphonso Davies", position: "LM" },
    { name: "Trent Alexander-Arnold", position: "RM" },
    { name: "Kevin De Bruyne", position: "AM" },
    { name: "Robert Lewandowski", position: "ST" },
    { name: "Kylian Mbappé", position: "ST" },
    { name: "Erling Haaland", position: "ST" }
];

// 352 陣型的固定位置
const positions = ["gk", "cb1", "cb2", "cb3", "cm1", "cm2", "lm", "rm", "am", "st1", "st2"];

// 初始化出場陣形和後備名單
function initializeTeamSelection() {
    const startingXiDiv = document.getElementById("starting-xi");
    const substitutesDiv = document.getElementById("substitutes");

    // 出場陣形選擇
    positions.forEach(pos => {
        const label = document.createElement("label");
        label.textContent = pos.toUpperCase() + ": ";
        const select = document.createElement("select");
        select.id = `select-${pos}`;
        select.innerHTML = '<option value="">選擇球員</option>';
        
        // 根據位置篩選球員
        playerPool
            .filter(player => player.position.toLowerCase() === pos.slice(0, -1) || (pos === "cb1" && player.position === "CB") || (pos === "cb2" && player.position === "CB") || (pos === "cb3" && player.position === "CB") || (pos === "st1" && player.position === "ST") || (pos === "st2" && player.position === "ST"))
            .forEach(player => {
                const option = document.createElement("option");
                option.value = player.name;
                option.textContent = player.name;
                select.appendChild(option);
            });

        startingXiDiv.appendChild(label);
        startingXiDiv.appendChild(select);
        startingXiDiv.appendChild(document.createElement("br"));
    });

    // 後備名單選擇（最多7人，示例）
    for (let i = 1; i <= 7; i++) {
        const label = document.createElement("label");
        label.textContent = `後備 ${i}: `;
        const select = document.createElement("select");
        select.id = `sub-${i}`;
        select.innerHTML = '<option value="">選擇球員</option>';

        playerPool.forEach(player => {
            const option = document.createElement("option");
            option.value = player.name;
            option.textContent = player.name;
            select.appendChild(option);
        });

        substitutesDiv.appendChild(label);
        substitutesDiv.appendChild(select);
        substitutesDiv.appendChild(document.createElement("br"));
    }
}

// 原有的 playerData（這裡省略，保持之前的詳細版本）
const playerData = { /* ... 你的完整 playerData ... */ };

// 顯示球員資訊
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

// 初始化頁面
window.onload = function() {
    initializeTeamSelection();
};
