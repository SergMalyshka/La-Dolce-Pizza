const total = document.querySelector("#total")
const cancelCart = document.querySelector("#cancel-order")
const checkOut = document.querySelector('#checkoutBtn')
const successCLose = document.getElementById("successModalClose")
const cancelClose = document.getElementById("cancelModalClose")

async function calculateTotal() {
    const response = await fetch('/api/orders/total', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const orderTotal = await response.json();
    const formattedTotal = parseFloat(orderTotal.totalPrice).toFixed(2);
    total.textContent = `Order total: ${formattedTotal}`;
}

cancelCart.addEventListener('click', async function (event) {
    const response = await fetch('/api/orders/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        showModal("cancelModal")
    } else {
        alert('Failed to cancel order out.');
    }
});

checkOut.addEventListener('click', async function (event) {
    event.preventDefault();

    const totalResponse = await fetch('/api/orders/total', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const totalJson = await totalResponse.json()
    const orderTotal = totalJson.totalPrice;


    const address = document.querySelector('#address').value
    const phone = document.querySelector('#phone').value
    const paymentType = document.querySelector('#paymentType').value
    const instructions = document.querySelector('#instructions').value
    const orderType = document.querySelector('#orderType').value

    const response = await fetch('api/orders/checkout', {
        method: 'POST',
        body: JSON.stringify({ address, phone, paymentType, instructions, orderTotal, orderType }),
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.status === 400) {
        showModal("phoneModal")
    } else if (response.ok) {
        showModal("successModal")
    }
})

successCLose.addEventListener('click', () => {
    document.location.replace('/menu');
})

cancelClose.addEventListener('click', () => {
    document.location.replace('/menu');
})


calculateTotal();