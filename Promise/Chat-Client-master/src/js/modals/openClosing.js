export const openCloseModals = () => {

    const settings1 = document.getElementById('settings');
    const onlineUsers = document.getElementById('userList');
    const modalSettings = document.getElementById('modalSetting');
    const wrapperModals = document.getElementById('modalBack');
    const closeSettingsBtn = document.getElementById('CloseBtn');
    const modalUsersList = document.getElementById('modalUsers');
    const closeUsersBtn = document.getElementById('CloseBtn1');
    const emptyNickNameModal = document.getElementById('emptyNick');

    settings1.onclick = () => {
        wrapperModals.classList.toggle('showModalWindows');
        modalSettings.classList.toggle('showModalWindows');
    };

    closeSettingsBtn.onclick = () => {
        modalSettings.classList.toggle('showModalWindows');
        wrapperModals.classList.toggle('showModalWindows');
        emptyNickNameModal.innerHTML = '';
    };

    onlineUsers.onclick = () => {
        wrapperModals.classList.toggle('showModalWindows');
        modalUsersList.classList.toggle('showModalWindows');
    };

    closeUsersBtn.onclick = () => {
        wrapperModals.classList.toggle('showModalWindows');
        modalUsersList.classList.toggle('showModalWindows');
    };

    wrapperModals.onclick = () => {
        wrapperModals.classList.remove('showModalWindows');
        modalSettings.classList.remove('showModalWindows');
        modalUsersList.classList.remove('showModalWindows');
        emptyNickNameModal.innerHTML = '';
    };

    modalSettings.onclick = (e) => {
        e.stopPropagation();
    };

    modalUsersList.onclick = (e) => {
        e.stopPropagation();
    };
};