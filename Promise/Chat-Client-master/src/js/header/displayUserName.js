export const displayUserName = (name) => {
    const headerOptions = document.getElementById('options');
    const options__users = document.getElementById('userList');
    const optionsUserName = document.createElement('div');

    optionsUserName.className = 'options__userName';
    optionsUserName.innerHTML = name;

    headerOptions.insertBefore(optionsUserName, options__users);

    if (headerOptions.children.length > 3){
        headerOptions.replaceChild(headerOptions.childNodes[1], headerOptions.childNodes[0]);
    }
};