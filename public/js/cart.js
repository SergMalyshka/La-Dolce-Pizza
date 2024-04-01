const total = document.querySelector("#total")
const cancelCart = document.querySelector("#cancel-order")
const checkOut = document.querySelector('#checkout')


async function calculateTotal() {
    const response = await fetch('/api/orders/total', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const orderTotal = await response.json();
    total.textContent = `Order total: ${orderTotal.totalPrice}`;
}

cancelCart.addEventListener('click', async function (event) {
    const response = await fetch('/api/orders/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/menu');
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
    const paymentType = document.querySelector('#type').value
    const instructions = document.querySelector('#instructions').value

    const response = await fetch('api/orders/checkout', {
        method: 'POST',
        body: JSON.stringify({ address, phone, paymentType, instructions, orderTotal }),
        headers: { 'Content-Type': 'application/json' }
    })
})

calculateTotal();