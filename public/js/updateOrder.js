const orderUpdateHandler = async (event) => {
    event.preventDefault();

    const type = document.querySelector('#order-type').value;
    const phone = document.querySelector('#phone').value.trim();
    const address = document.querySelector('#address').value.trim();
    const status = document.querySelector('#status').value;
    const instructions = document.querySelector('#instructions').value.trim();
    const paymentType = document.querySelector('#payment-type').value.trim();
    const total = document.querySelector('#order-total').value.trim();
    const idValue = document.querySelector('#submit-btn').value


    if (type && phone && address && status && instructions && paymentType && total) {
        const response = await fetch(`/api/orders/${idValue}`, {
            method: 'PUT',
            body: JSON.stringify({
                type,
                phone,
                address,
                status,
                instructions,
                paymentType,
                total
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)

        if (response.ok) {
            document.location.replace(`/dashboard/${idValue}`)
        } else {
            alert('failed to update')
        }
    }
}

// const orderListCreateHandler = async(event) => {
//     event.preventDefault

//     const menuItem = document.querySelector('#update-item').value.trim();
//     const orderId = document.querySelector('#add-item').value;
//     const quantity = document.querySelector('#quanity-select').value.trim();

//     console.log(menuItem)
//     console.log(orderId)
//     console.log(quantity)

//     if (menuItem && orderId && quantity) {
//         const response = await fetch('/api/order-list', {
//             method: 'POST',
//             body: JSON.stringify({
//                 orderId,
//                 menuItem,
//                 quantity
//             }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         console.log(response)
//         if (response.ok) {
//             document.location.replace(`/dashboard/${orderId}`)
//         } else {
//             alert('failed to update')
//         }
//     }
// }

// const dishRemoveHandler = async(event) => {
//     event.preventDefault

// }

// document.querySelector('#add-item').addEventListener('click', orderListCreateHandler)
document.querySelector('#submit-btn').addEventListener('click', orderUpdateHandler)