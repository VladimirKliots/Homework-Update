export const userRename = (cb) => {
    const acceptNickName = document.getElementById('acceptName');
    const inputName = document.getElementById('inputName');
    const emptyNickNameModal = document.getElementById('emptyNick');

    acceptNickName.onclick = () => {
        if (inputName.value.replace(/\s/g, '') !== ''){
            cb(inputName.value);
            
            //inputName.value = '';
        } else {
            emptyNickNameModal.innerHTML = 'Enter your nickname please';
            
        }
    };

    inputName.onkeyup = (e) => {
        if (e.key === 'Enter') {
            acceptNickName.click();
        }
    };

};