const WebSocket = require("ws");
const mass = require("./messages").messages;
let answer;

const port = 5000;
const server = new WebSocket.Server({ port });

server.on("connection", ws => {
    ws.on("message", message => {
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                answer = mass[message];
                client.send(answer);
            }
        });
    });
});


