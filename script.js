// 假設的球員名單（請替換為你的 Excel 資料）
const playerPool = [
    "Manuel Neuer", "Thibaut Courtois", "Virgil van Dijk", "Sergio Ramos",
    "Carles Puyol", "Kalidou Koulibaly", "N'Golo Kanté", "Sergio Busquets",
    "Toni Kroos", "Alphonso Davies", "Trent Alexander-Arnold", "Kevin De Bruyne",
    "Robert Lewandowski", "Kylian Mbappé", "Erling Haaland"
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

        // 所有球員都可選
        playerPool.forEach(player => {
            const option = document.createElement("option");
            option.value = player;
            option.textContent = player;
            select.appendChild(option);
        });

        // 當選擇改變時，更新戰術板上的名稱
        select.addEventListener("change", function() {
            const selectedPlayer = this.value;
            const nameElement = document.getElementById(`name-${pos}`);
            nameElement.textContent = selectedPlayer || pos.toUpperCase(); // 如果未選則顯示位置
        });

        startingXiDiv.appendChild(label);
        startingXiDiv.appendChild(select);
        startingXiDiv.appendChild(document.createElement("br"));
    });

    // 後備名單選擇（最多7人）
    for (let i = 1; i <= 7; i++) {
        const label = document.createElement("label");
        label.textContent = `後備 ${i}: `;
        const select = document.createElement("select");
        select.id = `sub-${i}`;
        select.innerHTML = '<option value="">選擇球員</option>';

        playerPool.forEach(player => {
            const option = document.createElement("option");
            option.value = player;
            option.textContent = player;
            select.appendChild(option);
        });

        substitutesDiv.appendChild(label);
        substitutesDiv.appendChild(select);
        substitutesDiv.appendChild(document.createElement("br"));
    });
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
