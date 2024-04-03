const buttons = document.querySelectorAll('.add')

for (button of buttons) {
    button.addEventListener('click', async function (event) {
        const name = event.target.dataset.name;
        const price = event.target.dataset.price;
        const id = event.target.dataset.id;

        const response = await fetch('/api/orders/addToOrder', {
            method: 'POST',
            body: JSON.stringify({ name, price, id }),
            headers: { 'Content-Type': 'application/json' },
        });
    })
}