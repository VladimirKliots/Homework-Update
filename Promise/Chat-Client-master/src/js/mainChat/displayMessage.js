export const displayMessage = (text, name, time, isyour = false) => { // isyour = false for clients
    let classArea = 'message-area__messages message-area__messages--another messages';
    let classWrapper = 'messages__wrapper messagess messages__wrapper--another';
    let classTime = 'text__time text__time--another';
    let classAuthor = 'messagess__author messagess__author--another';
    let classTextWrapper = 'messagess__text messagess__text--another';

    if (isyour) {
        classArea = 'message-area__messages message-area__messages--yours messages';
        classWrapper = 'messages__wrapper messagess';
        classTime = 'text__time';
        classAuthor = 'messagess__author';
        classTextWrapper = 'messagess__text';
    } 

    const messagesArea = document.getElementById('messageArea');
    
    const messageArea = document.createElement('div');

    messageArea.className = classArea;

    const messageWrapper = document.createElement('div');

    messageWrapper.className = classWrapper;
   
    const messageAutor = document.createElement('div');

    messageAutor.className = classAuthor;
    messageAutor.innerHTML = name;
  
    const textTimeWrapper = document.createElement('div');

    textTimeWrapper.className = classTextWrapper;

    const messageText = document.createElement('div');

    messageText.className = 'text__content';
    messageText.innerHTML = text;

    const messageTime = document.createElement('div');

    messageTime.className = classTime;
    messageTime.innerHTML = time;

    messagesArea.append(messageArea);
    messageArea.append(messageWrapper);
    messageWrapper.append(messageAutor);
    messageWrapper.append(textTimeWrapper);

    if (!isyour) {
        messageAutor.style.justifyContent = 'flex-start';
        textTimeWrapper.append(messageTime);
        textTimeWrapper.append(messageText);
        messageTime.style.marginLeft = '0';
        messageTime.style.marginRight = '10px';

    }else {
        textTimeWrapper.append(messageText);
        textTimeWrapper.append(messageTime);
    }

    messagesArea.scrollTop = messagesArea.scrollHeight;
};