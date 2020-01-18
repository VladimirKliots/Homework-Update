import '../../images/close-button.svg';

export const modalSetting = () => {
    const modals__setting = document.createElement('div');

    modals__setting.classList.add('modals__setting', 'setting');
    modals__setting.id = 'modalSetting';

    const setting__closeBtn = document.createElement('div');
    const setting__titleNick = document.createElement('div');
    const setting__input = document.createElement('div');
    const setting__btn = document.createElement('div');
    const setting__ip = document.createElement('div');

    setting__closeBtn.classList.add('setting__closeBtn', 'closeBtn');
    const closeBtn__img = document.createElement('img');

    closeBtn__img.className = 'closeBtn__img';
    closeBtn__img.id = 'CloseBtn';
    closeBtn__img.src = './images/close-button.svg';
    closeBtn__img.alt = 'close button';
    setting__closeBtn.append(closeBtn__img);

    setting__titleNick.classList.add('setting__titleNick', 'titleNick');
    const nickName = document.createElement('p');

    nickName.innerHTML = 'Nickname:';
    setting__titleNick.append(nickName);
    setting__input.classList.add('setting__input', 'input');



    const input__nickname = document.createElement('input');

    input__nickname.className = 'input__nickname';
    input__nickname.id = 'inputName';
    input__nickname.placeholder = 'Enter your nickname';
    input__nickname.maxLength = 10;
    setting__input.append(input__nickname);

    const setting__emptyInput = document.createElement('div');

    setting__emptyInput.className = 'setting__emptyInput';
    setting__emptyInput.id = 'emptyNick';

    setting__btn.classList.add('setting__btn', 'acceptBtn');
    const acceptBtn__nickname = document.createElement('button');

    acceptBtn__nickname.className = 'acceptBtn__nickname';
    acceptBtn__nickname.id = 'acceptName';
    acceptBtn__nickname.innerHTML = 'Rename';
    setting__btn.append(acceptBtn__nickname);
    setting__ip.classList.add('setting__ip', 'ip');
    const ip__area = document.createElement('p');

    ip__area.className = 'ip__area';
    ip__area.id = 'myip';
    ip__area.innerHTML = 'loading...';
    setting__ip.append(ip__area);
    modals__setting.append(setting__closeBtn);
    modals__setting.append(setting__titleNick);
    modals__setting.append(setting__input);
    modals__setting.append(setting__emptyInput);
    modals__setting.append(setting__btn);
    modals__setting.append(setting__ip);

    return modals__setting;
};