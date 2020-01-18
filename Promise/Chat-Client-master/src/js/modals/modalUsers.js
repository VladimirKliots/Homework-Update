import '../../images/close-button.svg';

export const modalUsers = () => {
    const modals__usersList = document.createElement('div');

    modals__usersList.classList.add('modals__usersList', 'usersList');
    modals__usersList.id = 'modalUsers';

    const usersList__closeBtn = document.createElement('div');

    usersList__closeBtn.classList.add('usersList__closeBtn', 'closeBtn');
    usersList__closeBtn.id = 'CloseBtn1';
    modals__usersList.append(usersList__closeBtn);
    const closeBtn__img = document.createElement('img');

    closeBtn__img.classList.add('closeBtn__img');
    closeBtn__img.src = './images/close-button.svg';
    usersList__closeBtn.append(closeBtn__img);

    const usersList__title = document.createElement('div');

    usersList__title.classList.add('usersList__title', 'title');
    modals__usersList.append(usersList__title);

    const title__users = document.createElement('div');

    title__users.className = 'title__users';
    title__users.innerHTML = 'Users list:';
    usersList__title.append(title__users);
    const usersList__view = document.createElement('div');

    usersList__view.classList.add('usersList__view', 'view');
    usersList__view.id = 'viewUsers';
    modals__usersList.append(usersList__view);

    return modals__usersList;
};