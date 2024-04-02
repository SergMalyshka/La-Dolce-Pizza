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
    console.log(type)
    console.log(phone)
    console.log(address)
    console.log(status)
    console.log(instructions)
    console.log(paymentType)
    console.log(total)
    console.log(idValue)

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

const dishUpdateHandler = async(event) => {
    event.preventDefault


}

const dishRemoveHandler = async(event) => {
    event.preventDefault

}
document.querySelector('#submit-btn').addEventListener('click', orderUpdateHandler)