const total = document.querySelector("#total")
const cancelCart = document.querySelector("#cancel-order")

async function calculateTotal() {
    const response = await fetch('/api/orders/total', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const orderTotal = await response.json();
    total.textContent = `Order total: ${orderTotal.totalPrice}`;
}

cancelCart.addEventListener('click', async function(event) {
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

calculateTotal();