let myModal;

function showModal(modalName) {
    myModal = new bootstrap.Modal(
        document.getElementById(modalName),
        {}
    );
    myModal.show();
}
