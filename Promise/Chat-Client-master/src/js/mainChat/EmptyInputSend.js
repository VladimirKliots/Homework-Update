export const emptyInputSend = (text) => {
    const emptyModal = document.getElementById('emptyModal');
    const emptyModalError = document.getElementById('emptyModalError');

    emptyModal.style.display =  'flex';
    emptyModalError.innerHTML = text;

};
export const emptyInputSendClose = () => {
    const emptyModal = document.getElementById('emptyModal');

    emptyModal.style.display =  'none';
};