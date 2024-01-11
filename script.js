const currencies = {"10000円": 10000, "5000円": 5000, "2000円": 2000, "1000円": 1000, "500円": 500, "100円": 100, "50円": 50, "10円": 10, "5円": 5, "1円": 1};

window.onload = function() {
    const container = document.getElementById('currency-fields');
    for (const [currency, value] of Object.entries(currencies)) {
        const div = document.createElement('div');
        div.className = 'currency-row';
        div.innerHTML = `
            <span>${currency}</span>
            <button onclick="updateCurrency('${currency}', -1)">-1</button>
            <input type="number" id="${currency}" value="0" min="0" onchange="updateTotal()">
            <button onclick="updateCurrency('${currency}', 1)">+1</button>
        `;
        container.appendChild(div);
    }
};

function updateCurrency(currency, change) {
    const field = document.getElementById(currency);
    let currentValue = parseInt(field.value);
    currentValue = Math.max(currentValue + change, 0);
    field.value = currentValue;
    updateTotal();
}

function updateTotal() {
    let total = 0;
    for (const [currency, value] of Object.entries(currencies)) {
        const field = document.getElementById(currency);
        total += parseInt(field.value) * value;
    }
    document.getElementById('total').innerText = `合計金額: ${total}円`;
}

function reset() {
    for (const currency of Object.keys(currencies)) {
        document.getElementById(currency).value = 0;
    }
    updateTotal();
}
