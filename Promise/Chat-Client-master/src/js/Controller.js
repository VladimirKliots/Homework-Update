/* eslint-disable no-prototype-builtins */
import {onSendClick} from './mainChat/onSendClick';
import WSocket from './WSocket';
import {userRename} from './modals/userRename/userRename.js';
import {getIp} from './GetIp/getIp';
import {displayMessage} from './mainChat/displayMessage';
import {changeUserState} from './modals/usersDisplay/changeUserState';
import {onlineValue} from './header/onlineValue';
import {putUser, putMessage, getUsers, getMessages, putChangeUserName, putChangeUserState} from './REST';
import {clearAllMsg} from './mainChat/clearAllmessages';
import {displayUserName} from './header/displayUserName';
import uniqid from 'uniqid';
import {emptyInputSend, emptyInputSendClose} from './mainChat/EmptyInputSend';

class Controller {
    constructor(view) {
        this._view = view;
        this._ws = new WSocket();
        this._ip = null;
        this._id = null;
        this._name = null;
        this._spamBox = [1, 2, 3];

        getIp(this.setIp);
    }
    
    init = () => {
        this.createUniqId();
        clearAllMsg();
        this.sendUser();
        
        getMessages().then(this.onLoadShowAllMessages);
        onSendClick(this.checkSpam);
        userRename(this.renameUser);
        this.watchDisconectUser();

        this.getFromWS();
        this.echoWs();
    }

    setIp = (ip) => {
        this._ip = ip;
        this._name = ip;
        this.init();
        displayUserName(this._name);
    }

    createUniqId = () => {
        if (localStorage.getItem('myid') === null){
            let id = uniqid();

            this._id = id;
            localStorage.setItem('myid', id);
        } else {
            this._id = localStorage.getItem('myid');
        }
        
    }

    checkSpam = (text) => {
        const s = this._spamBox;
        
        s.push(text);
        if ((s[1] == s[2]) && (s[1] == s[3])) {
            if ((s[2] == s[3]) && s[0] == s[3] ) {
                emptyInputSend('Don\'t spam');
                setTimeout(() => {
                    emptyInputSendClose();
                }, 3000);

            } else {
                this.sendedText(text);
            }
        } else {
            this.sendedText(text);
        }
        
        if (s.length > 2) {
            s.splice(0, 1);
        }
    
        this._spamBox = s;
    }

    sendedText = (text) => {
        putMessage({text: text, id: this._id});
        this.sendToWS({
            text: text, 
            name: this._name,
            time: new Date().getTime(),
            ip: this._ip,
            id: this._id
        });
        //записал вытащил всех
    };

    sendUser = () => { //только зашел 
        
        putUser({id: this._id}).then(name => { //ждет от базы
            if (name != 0) {
                this._name = name;
                putChangeUserState({state: true, id: this._id});  
            } 
            this.sendToWS({
                name: this._name,
                ip: this._ip,
                id: this._id,
                state: true
            });
            getUsers().then(this.onLoadShowUsers);
        }); //если нету фолс, есть - имя

    }

    sendToWS = (data) => {
        try {
            this._ws.sendMessage(data);
        } catch (error) {
            setTimeout(() => {
                this.sendToWS(data);
            }, 100);
        }
    }

    getFromWS = () => {
        this._ws.getMessage((data) => {
            
            if (data.hasOwnProperty('text')) {
                this.showMessages(data);
            }
            if (data.hasOwnProperty('state')) {
                
                this.showUserStats(data);
            }
            
            if (data.hasOwnProperty('reload')) {
                this.pageReload();
            }
        });
    }
  
    showMessages = (message) => {
        if (message != 'echo') {
            if (message.id == this._id) {
                displayMessage(message.text, message.name, (new Date(message.time).toLocaleTimeString()).substr(0, 5), true);
            } else {
                displayMessage(message.text, message.name, (new Date(message.time).toLocaleTimeString()).substr(0, 5), false);
            }
        }
    }

    onLoadShowAllMessages = (messages) => {
        messages.forEach(element => {
            this.showMessages(element);
        });
    }

    showUserStats = (user) => {

        if (user.state === true) {
            if (user.id ==  this._id) {
                displayUserName(user.name);
            }
            changeUserState(user.id, user.name, true);
            
        } else {
            if ((new Date().getTime() - user.state) < 3600000) {
                changeUserState(user.id, user.name, false, (new Date(user.state).toLocaleTimeString()).substr(0, 5));
            }           
        }
        onlineValue();
    }

    onLoadShowUsers = (users) => {
        users.forEach(element => {
            this.showUserStats(element);
        });
    }

    renameUser = (name) => {
       
        const newUser = {
            name: name, 
            id: this._id
        };

        //changeUserState(this._ip, this._name, true);

        putChangeUserName(newUser).then(name  => {
            if (name !== false) {
                this._name = name;
                this.sendToWS({
                    id: this._id,
                    name: this._name,
                    ip: this._ip,
                    state: true
                });
                this.sendToWS({
                    reload: 'reload'
                });
                document.getElementById('emptyNick').innerHTML = '';
                document.getElementById('inputName').value = '';
            } else {
                document.getElementById('emptyNick').innerHTML = 'This name is already in use';
            }
        });
         
    }

    watchDisconectUser = () => {
        window.onbeforeunload = () => {
            putChangeUserState({ 
                state: false,
                id: this._id
            });
            this.sendToWS({
                id: this._id,
                ip: this._ip,
                name: this._name, 
                state: new Date().getTime()
            });
        };
    }

    echoWs = () => {
        this.sendToWS('echo');
        setTimeout(() => {
            this.echoWs();
        }, 30000);
    }

    pageReload = () => {
        location.reload();
    }
}

export default Controller;