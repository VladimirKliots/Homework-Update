const ws = new WebSocket('ws://localhost:5000');
const afkMassage = [' ты тут?', 'через 3 секунды я уйду', 'Пока'];
const afkTime = [15000, 30000, 33000];
const timeOutId = [];
let inputValue;

ws.onopen = () => setServerState(serverState,'ONLINE', 'lime');
ws.onclose = () => setServerState(serverState,'DISCONNECTED','orange');


form.addEventListener('submit', e=>{
    e.preventDefault();
    for (let i = 0; i < 3; i++){
        clearTimeout(timeOutId[i]);
        timeOutId[i] = setTimeout(function () {
            botMessages(afkMassage[i]);
        }, afkTime[i])
    }
    clientMessages(input.value);
    inputValue = input.value;
    setTimeout( ()=> {
        ws.send(inputValue);
    }, 2000);
    input.value = '';
});

button.addEventListener('click', e=>{
    e.preventDefault();
    for (let i = 0; i < 3; i++){
        clearTimeout(timeOutId[i]);
        timeOutId[i] = setTimeout(function () {
            botMessages(afkMassage[i]);
        }, afkTime[i])
    }
    clientMessages(input.value);
    inputValue = input.value;
    setTimeout( ()=> {
        ws.send(inputValue);
    }, 2000);
    input.value = '';
});

ws.onmessage = (response) =>  {
    console.log(response);
    if(response.data === undefined){
        botMessages("<a target='_blank' style='text-decoration: none' href=http://google.com>Google.com</a>");
    }else{
        botMessages(response.data);
    }
};