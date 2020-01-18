export const clearAllMsg = () => {
    const main = document.getElementById('div');
    const msgWrapper = document.getElementById('messageArea');

    const cleanWrapper = document.createElement('div');

    cleanWrapper.className = 'div__message-area message-area';
    cleanWrapper.id = 'messageArea'; 

    main.replaceChild(cleanWrapper, msgWrapper);

};