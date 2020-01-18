export const smilesAdd = () => {
    const smile1 = document.getElementById('smile1');
    const smile2 = document.getElementById('smile2');
    const smile3 = document.getElementById('smile3');
    const smile4 = document.getElementById('smile4');
    const smile5 = document.getElementById('smile5');
    const smile6 = document.getElementById('smile6');
    const smile7 = document.getElementById('smile7');
    const smile8 = document.getElementById('smile8');
    const smile9 = document.getElementById('smile9');
    const textarea = document.getElementById('input');

    smile1.onclick = () => {
        textarea.value += smile1.value;
    };
    smile2.onclick = () => {
        textarea.value += smile2.value;
    };
    smile3.onclick = () => {
        textarea.value += smile3.value;
    };
    smile4.onclick = () => {
        textarea.value += smile4.value;
    };
    smile5.onclick = () => {
        textarea.value += smile5.value;
    };
    smile6.onclick = () => {
        textarea.value += smile6.value;
    };
    smile7.onclick = () => {
        textarea.value += smile7.value;
    };
    smile8.onclick = () => {
        textarea.value += smile8.value;
    };
    smile9.onclick = () => {
        textarea.value += smile9.value;
    };
};

export const smilesButton = () => {
    const smileButton = document.getElementById('dropUp__smilesId');
    const smilesArea = document.getElementById('dropUp__gridId');
    const messageAreaClose = document.getElementsByClassName('header')[0];
    const input = document.getElementById('input');

    smileButton.onclick = () => {
        smilesArea.classList.toggle('showSmilesArea');
    };
    messageAreaClose.onclick = () => {
        smilesArea.classList.remove('showSmilesArea');
    };
    input.onclick = () => {
        smilesArea.classList.remove('showSmilesArea');
    };
};