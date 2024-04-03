const orderDeleteHandler = async (event) => {
    event.preventDefault();

    const orderId = document.querySelector('#delete-btn').value;

    if(orderId) {
        const response = await fetch(`/api/orders/${orderId}`, {
            method: "DELETE",  
        });
        if (response.ok) {
            document.location.replace(`/dashboard`)
        } else {
            alert('did not delete')
        }
    };
};

document.querySelector('#delete-btn').addEventListener('click', orderDeleteHandler)