function setServerState(elem, value, color) {
    elem.innerHTML = value;
    elem.style.color = color;
}

function botMessages(value) {
    div = document.createElement('div');
    img = document.createElement('img');
    text = document.createElement('div');
    div.setAttribute('id', 'bot');
    img.setAttribute('class', 'bot-avatar');
    img.setAttribute('src', 'img/user.png');
    text.setAttribute('class', 'bot-text');
    div.appendChild(img);
    div.appendChild(text);
    messages.appendChild(div);
    text.innerHTML = value;
}

function clientMessages(value) {
    div = document.createElement('div');
    text = document.createElement('div');
    img = document.createElement('img');
    div.setAttribute('id', 'client');
    text.setAttribute('class', 'client-text');
    img.setAttribute('class', 'client-avatar');
    img.setAttribute('src', 'img/user.png');
    div.appendChild(text);
    div.appendChild(img);
    messages.appendChild(div);
    text.innerHTML = value;
}