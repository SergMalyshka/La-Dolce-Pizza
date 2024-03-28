const total = document.querySelector("#total")

async function calculateTotal() {
    const response = await fetch('/api/orders/total', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const orderTotal = await response.json();
    total.textContent = orderTotal.totalPrice;
}

calculateTotal();