document.addEventListener('DOMContentLoaded', init);
const nameBlock = document.getElementsByClassName("user__name")[0];

function init() {
    let status = localStorage.getItem('status');
    let name = localStorage.getItem('Name');
    if (status == 'success') {
        nameBlock.innerHTML = name;
        localStorage.setItem("Name", "");
        localStorage.setItem("status", "");
    } else {
        window.location.href = 'http://onlinewproject.byethost4.com/';
    }
}