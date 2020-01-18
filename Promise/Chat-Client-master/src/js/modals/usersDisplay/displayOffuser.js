export const displayOffUser = (ip, name, date) => {
    const userOnlineView = document.getElementById('viewUsers');

    const view__item = document.createElement('div');

    view__item.classList.add('view__item', 'item', 'item--offline');
    view__item.id = ip;
    const userNick = document.createElement('p');

    userNick.className = 'item__nameUser';
    userNick.innerHTML = name;
    const leftTimeArea = document.createElement('p');

    leftTimeArea.innerHTML = `${date}`;

    userOnlineView.append(view__item);
    view__item.append(userNick);
    view__item.append(leftTimeArea);

};