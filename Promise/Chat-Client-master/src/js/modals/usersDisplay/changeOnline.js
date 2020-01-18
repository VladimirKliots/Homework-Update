import '../../../images/check.svg';

export const changeOnline = (ip, name) => {
    const userArea = document.getElementById(`${ip}`); 
    const img = document.createElement('img');

    userArea.classList.remove('view__item', 'item', 'item--offline');
    userArea.classList.add('view__item', 'item', 'item--online');
    userArea.childNodes[1].remove();
    img.src = '../../../images/check.svg';
    img.className = 'item--online__img';

    userArea.append(img);
    userArea.childNodes[0].innerHTML = name;
};