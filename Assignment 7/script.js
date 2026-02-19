const prices = {
    milk: 4.25,
    bread: 3.10,
    eggs: 5.75,
    rice: 10.50,
    apples: 2.25,
    chicken: 12.99
};

const ids = Object.keys(prices);

const totalE1 = document.getElementById("totalAmount");
const receiptE1 = document.getElementById("receipt");

let timer = null;
const INACTIVITY_MS = 15000;

function money(n) {
    return `$${n.toFixed(2)}`;
}

function formatDataTime(d) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    let h = d.getHours();               // number
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    if (h === 0) h = 12;
    const hh = String(h).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss} ${ampm}`;
}

function getQty(id) {
    const v = document.getElementById(id).value;
    if (v === "") {
        return 0;
    }
    const n = Number(v);
    if (isNaN(n) || n < 0) {
        return 0;
    }
    return Math.floor(n);
}

function calculateTotal() {
    resetInactivityTimer();
    let total = 0;
    let any = false;
    for (const id of ids) {
        const qty = getQty(id);
        if (qty > 0) {
            total += prices[id] * qty;
            any = true;
        };
    }
    if (!any) {
        totalE1.textContent = "$0.00";
        receiptE1.textContent = "Cart is empty.";
        return 0;
    }
    totalE1.textContent = money(total);
    receiptE1.textContent = "Total calculated. Click 'Generate Receipt' to see details.";
    return total;
}

function printReceipt() {
    resetInactivityTimer();

    const now = new Date();
    let line = [];
    line.push("Joshua Grocery Store")
    line.push(`Date/Time: ${formatDataTime(now)}`);
    line.push("------------------------------");

    let total = 0;
    let any = false;
    for (const id of ids) {
        const qty = getQty(id);
        if (qty === 0) {
            continue;
        };
        any = true;
        const lineTotal = prices[id] * qty;
        total += lineTotal;
        const name = id.charAt(0).toUpperCase() + id.slice(1);
        line.push(`${name} x ${qty} @ ${money(prices[id])} = ${money(lineTotal)}`);
    }

    if (!any) {
        totalE1.textContent = "$0.00";
        receiptE1.textContent = "cart is empty.";
        return;
    }
    line.push("------------------------------");
    line.push(`Total: ${money(total)}`);

    totalE1.textContent = money(total);
    receiptE1.textContent = line.join("\n");
}

function resetCart(message = "Cart reset.") {
    resetInactivityTimer();

    for (const id of ids) {
        document.getElementById(id).value = "";
    }
    totalE1.textContent = "$0.00";
    receiptE1.textContent = message;
}

function resetInactivityTimer() {
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        for (const id of ids) {
            document.getElementById(id).value = "";
        }
        totalE1.textContent = "$0.00";
        receiptE1.textContent = "Cart reset due to inactivity.";
    }, INACTIVITY_MS);

}

document.getElementById("btnTotal").addEventListener("click", calculateTotal);
document.getElementById("btnReceipt").addEventListener("click", printReceipt);
document.getElementById("btnReset").addEventListener("click", () => resetCart("Cart reset by user."));

for (const id of ids) {
    document.getElementById(id).addEventListener("input", (e) => {
        if (e.target.value !== "" && Number(e.target.value) < 0) {
            e.target.value = "0";
        }
        resetInactivityTimer();
    });
}

resetInactivityTimer();
