import {emptyInputSend} from './EmptyInputSend.js';
import {emptyInputSendClose} from './EmptyInputSend.js';

export const onSendClick = (cb) => {
    const send = document.getElementById('send');
    const input = document.getElementById('input');
    const smilesArea = document.getElementById('dropUp__gridId');

    send.onclick = () => {

        if (input.value.replace(/\s/g, '') !== '') {
            cb(input.value);
            input.value = '';
        }else{
            emptyInputSend('Cannot be empty');
            const p = new Promise(resolve => {
                setTimeout(() => {
                    emptyInputSendClose();
                    resolve();
                }, 4000);
            } );

            p.then();
        }
        smilesArea.classList.remove('showSmilesArea');
    };

    input.onkeydown = (e) => {

        if (e.key === 'Enter' && input.value.replace(/\s/g, '') !== '') {
            e.preventDefault();
            send.click();
            input.value = '';
        }else if (e.key === 'Enter' && input.value.replace(/\s/g, '') === ''){
            e.preventDefault();
            emptyInputSend('Cannot be empty');
            const p = new Promise(resolve => {
                setTimeout(() => {
                    emptyInputSendClose();
                    resolve();
                }, 4000);
            } );

            p.then();
        }
        smilesArea.classList.remove('showSmilesArea');
    };

};