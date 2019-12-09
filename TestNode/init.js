var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


server.listen(5000);


app.get('/', function(request, respons) {
    respons.sendFile(__dirname + '/index.html');
});


connections = [];

io.sockets.on('connection', function(socket) {

    console.log("Успешное соединение");


    socket.on('disconnect', function(data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Отключились");
    });


    socket.on('send mess', function(data) {
        var time_now = new Date();
        console.log(data);
        io.sockets.emit('add mess', {mess: data.mess, className: data.className});

        if(data.mess == "Привет") {
            bot_message = () => {
                io.sockets.emit('add mess', {mess: "Здоровенькі були", className: "light"});
            }
            setTimeout(bot_message, 2000);
            // timeout = () => {
            //     io.sockets.emit('add mess', {mess: "Ты что там, уснул? Алоооооо", className: "light"});
            // }
            //  var myTimer = setTimeout(timeout, 10000);
        }

        else if(data.mess == "Как дела?"){
            bot_message1 = () => {
                // не знаю как пофиксить-----------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // clearTimeout(myTimer);
                io.sockets.emit('add mess', {mess: "Нормально, а ты как?", className: "light"});
                // clearTimeout(myTimer);
            }
            setTimeout(bot_message1, 2000);
        }

        else if(data.mess == "Кто тебя создал?") {
            bot_message2 = () => {
                io.sockets.emit('add mess', {mess: "Та есть там один лапоть...", className: "light"});
            }
            setTimeout(bot_message2, 2000);
        }

        else if(data.mess == "Какая сегодня погода?") {
            bot_message3 = () => {
                io.sockets.emit('add mess', {mess: "Куртку одень и не прогадаешь. Пар костей не ломит...", className: "light"});
            }
            setTimeout(bot_message3, 2000);
        }

        else if(data.mess == "Подскажи, который час?") {
            bot_message4 = () => {
                io.sockets.emit('add mess', {mess: time_now, className: "light"});
            }
            setTimeout(bot_message4, 2000);
        }
    });

});