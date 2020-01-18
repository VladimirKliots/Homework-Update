import '../../images/settings.svg';
import '../../images/logo.png';

export const header = () => {
    const header__container = document.createElement('div');
        
    header__container.classList.add('header__container', 'header');

    const header__logo = document.createElement('div');

    const logo_text = document.createElement('h1');

    const logo__img = document.createElement('img');
    
    logo_text.className = 'logo__text';
    logo_text.innerHTML = 'Chat';

    logo__img.className = 'logo__img';
    logo__img.src = './images/logo.png';

    header__logo.append(logo__img);
    header__logo.append(logo_text);
    
    header__logo.className = 'header__logo';

    const header__options = document.createElement('div');

    header__options.classList.add('header__options', 'options');
    header__options.id = 'options';

    const options__users = document.createElement('div');
    
    options__users.classList.add('options__users', 'users');
    options__users.id = 'userList';

    header__options.append(options__users);
    const users__online = document.createElement('p');

    users__online.className = 'users__online';
    users__online.innerHTML = 'online: 0';
    users__online.id = 'online';

    options__users.append(users__online);
    const options__setting = document.createElement('div');

    options__setting.id = 'settings';
    options__setting.classList.add('options__setting', 'settings');

    header__options.append(options__setting);

    const settings__img = document.createElement('img');

    settings__img.className = 'settings__img';
    settings__img.src = './images/settings.svg';
    settings__img.alt = 'settenigs';

    options__setting.append(settings__img);

    header__container.append(header__logo);
    header__container.append(header__options);

    return header__container;
};

