import '../../images/smile.svg';
import '../../images/error.svg';

export const mainChat = () => {
    const main = document.createElement('div');

    main.className = 'main';

    const main__div = document.createElement('div');

    main__div.classList.add('main__div', 'div');
    main__div.name = 'div';
    main__div.id = 'div';

    main.append(main__div);

    const div__messageArea = document.createElement('div');

    div__messageArea.classList.add('div__message-area', 'message-area');
    div__messageArea.id = 'messageArea';

    main__div.append(div__messageArea);

    const div__inputArea = document.createElement('div');

    div__inputArea.classList.add('div__input-area', 'message');

    main__div.append(div__inputArea);
    const emptyModal =  document.createElement('div');

    emptyModal.classList.add('emptyModal');
    emptyModal.id = 'emptyModal';

    div__inputArea.append(emptyModal);

    const emptyModal__error = document.createElement('div');

    emptyModal__error.className = 'emptyModal__error';
    emptyModal__error.id = 'emptyModalError';

    emptyModal.append(emptyModal__error);
    const  emptyModal__img = document.createElement('img');

    emptyModal__img.className = 'emptyModal__img';
    emptyModal__img.src = './images/error.svg';
    emptyModal.append(emptyModal__img);

    const message__input = document.createElement('div');

    message__input.classList.add('message__input', 'input');

    div__inputArea.append(message__input);

    const input__area = document.createElement('textarea');

    input__area.className = 'input__area';
    input__area.id = 'input';
    input__area.placeholder = 'Enter your message:';
    input__area.wrap = 'hard';
    input__area.maxLength = '400';

    message__input.append(input__area);

    const message__dropUp = document.createElement('div');

    message__dropUp.classList.add('message__dropUp', 'dropUp');

    div__inputArea.append(message__dropUp);

    const dropUp__grid = document.createElement('div');

    dropUp__grid.classList.add('dropUp__grid', 'grid');
    dropUp__grid.id = 'dropUp__gridId';

    message__dropUp.append(dropUp__grid);

    const img1 = document.createElement('div');

    img1.className = 'grid__item';
    img1.id = 'smile1';
    img1.innerHTML = '😂';
    img1.value = '😂';

    dropUp__grid.append(img1);

    const img2 = document.createElement('div');

    img2.className = 'grid__item';
    img2.id = 'smile2';
    img2.innerHTML = '❤️';
    img2.value = '❤️';

    dropUp__grid.append(img2);

    const img3 = document.createElement('div');

    img3.className = 'grid__item';
    img3.id = 'smile3';
    img3.innerHTML = '😘';
    img3.value = '😘';

    dropUp__grid.append(img3);

    const img4 = document.createElement('div');

    img4.className = 'grid__item';
    img4.id = 'smile4';
    img4.innerHTML = '😭';
    img4.value = '😭';

    dropUp__grid.append(img4);

    const img5 = document.createElement('div');

    img5.className = 'grid__item';
    img5.id = 'smile5';
    img5.innerHTML = '😁';
    img5.value = '😁';

    dropUp__grid.append(img5);

    const img6 = document.createElement('div');

    img6.className = 'grid__item';
    img6.id = 'smile6';
    img6.innerHTML = '👍';
    img6.value = '👍';

    dropUp__grid.append(img6);

    const img7 = document.createElement('div');

    img7.className = 'grid__item';
    img7.id = 'smile7';
    img7.innerHTML = '🥰';
    img7.value = '🥰';

    dropUp__grid.append(img7);

    const img8 = document.createElement('div');

    img8.className = 'grid__item';
    img8.id = 'smile8';
    img8.innerHTML = '🤬';
    img8.value = '🤬';

    dropUp__grid.append(img8);

    const img9 = document.createElement('div');

    img9.className = 'grid__item';
    img9.id = 'smile9';
    img9.innerHTML = '💩';
    img9.value = '💩';

    dropUp__grid.append(img9);

    const dropUp__smiles = document.createElement('div');

    dropUp__smiles.classList.add('dropUp__smiles', 'smiles');
    dropUp__smiles.id = 'dropUp__smilesId';

    message__dropUp.append(dropUp__smiles);

    const smiles__img = document.createElement('img');

    smiles__img.className = 'smiles__img';
    smiles__img.src = '../images/smile.svg';

    dropUp__smiles.append(smiles__img);

    const message__sendBtn = document.createElement('button');

    message__sendBtn.className = 'message__send-btn';
    message__sendBtn.innerHTML = 'Send';
    message__sendBtn.id = 'send';

    div__inputArea.append(message__sendBtn);
    
    return(main);
};