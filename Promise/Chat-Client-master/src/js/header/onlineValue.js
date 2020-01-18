export const onlineValue = () => {
    const onlineUsers = document.getElementById('online');

    onlineUsers.innerHTML = `online: ${document.getElementsByClassName('item--online').length}`;
};