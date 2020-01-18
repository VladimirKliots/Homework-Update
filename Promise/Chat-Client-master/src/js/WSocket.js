import Controller from './Controller';

class WSocket {
    constructor() {
        this._host = location.origin.replace(/^http/, 'ws');
        this._wsocket = new WebSocket(this._host); //this._wsocket = new WebSocket('ws://one-chat.eu-4.evennode.com/');
        
        this._wsocket.onopen = this.onOpen.bind(this);
        this._wsocket.onclose = this.onClose.bind(this);

    }

    onOpen = () => {
        console.log('...OPENING WS CONNECTION');
    }

    getMessage = callback => {
        this._wsocket.onmessage = message => {
            callback(JSON.parse(message.data));
        };
    }

    onClose = () => {
        console.log('...CLOSING OPENING WS CONNECTION');

        // new Controller().userDisconected();
    }

    sendMessage = data => {
        this._wsocket.send(JSON.stringify(data));
    }
}

export default WSocket;