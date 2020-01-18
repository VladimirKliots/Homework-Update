import '../../../images/check.svg';

export const displayUser = (ip, name) => {
    const userOnlineView = document.getElementById('viewUsers');

    const view__item = document.createElement('div');

    view__item.classList.add('view__item', 'item', 'item--online');
    view__item.id = ip;
    const userNick = document.createElement('p');

    userNick.className = 'item__nameUser';
    userNick.innerHTML = name;
    const itemOnline__img = document.createElement('img');

    itemOnline__img.className = 'item--online__img';
    itemOnline__img.src = '../../../images/check.svg';

    userOnlineView.append(view__item);
    view__item.append(userNick);
    view__item.append(itemOnline__img);

};