let memoryNumber = 0;
let countNumber = 0;
let check = true;
let isPointOn = true;
let isNegative = false;
let ressultFlag = true;
let flag = '';
let dubBtn = document.getElementById('dub');
let display = document.getElementById('talo');
let plusBtn = document.getElementById('plusBtn');
let minusBtn = document.getElementById('minusBtn');
let divideBtn = document.getElementById('divideBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let clearBtn = document.getElementById('del');
let ressultBtn = document.getElementById('equally');
let allBtns = document.querySelectorAll('.btn');


for (let i = 0; i < allBtns.length; i++) {
    let btn = allBtns[i];
    btn.addEventListener('click', function (e) {
        clickNumber(e.target.textContent);
        console.log(e.target.textContent);
    });
}
function clickNumber (num) {
    if (check) {
        display.value = num;
        check = false;
    } else if (num.match(/[1-9]/) && display.value == '0') {
        display.value = num;
        check = false;
    } else if (num == '0' && display.value == '0') {
        console.log('do nothing');
    } else {
        display.value += num;
        cutDisplay(display.value);
    }
}


//ОБРАБОТЧИКИ
dubBtn.addEventListener('click', function(){
    for(let i =0; i < display.value.length; i++){
        if(display.value[i] === '.'){
            return;
        }
    }
    display.value+= '.';
    check=false;
});
plusBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '+';
    check = true;
    isNegative=false;
    ressultFlag = true;
    console.log("+");
});

minusBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '-';
    check = true;
    ressultFlag = true;
    console.log("-");
});
divideBtn.addEventListener('click', function () {
    if(flag === '/'){
        memoryNumber/= parseInt(display.value);
        if(memoryNumber === 'Infinity'){
            console.log('dd')
        }
        if (b === 0) {
        return 0
        }
        display.value = memoryNumber;
    }
    memoryNumber = +display.value;
    flag = '/';
    check = true;

    ressultFlag = true;
    console.log("/");
});
multiplyBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    cutDisplay(memoryNumber);
    flag = '*';
    check = true;
    ressultFlag = true;
    console.log("*");
});
clearBtn.addEventListener('click', function () {
    display.value=0;
    memoryNumber=0;
    flag = '';
    check = true;
    ressultFlag = true;
    console.log("Clear");
})

//ФУНКЦИи


function Summ(a,b){
    a += b;
    return a
}
function minus(a,b){
    a -= b;
    return a
}
function divide(a,b){
    a /= b;
    return a
}
function multiply(a,b){
    a *= b;
    return a
}

ressultBtn.addEventListener('click', function () {
    if(ressultFlag) {
        countNumber = +display.value;
    }
    switch (flag) {
        case '+':
            memoryNumber = Summ(memoryNumber,countNumber);
            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
        case '-':
            memoryNumber = minus(memoryNumber,countNumber);
            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
        case '/':
            if(countNumber === 0){
                memoryNumber = 0;
                display.value = countNumber;
            }

            else if(countNumber === '0'){
                memoryNumber = 0;
                display.value = countNumber;
            }
            else{
                memoryNumber = divide(memoryNumber,countNumber);
            }

            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
        case '*':
            memoryNumber = multiply(memoryNumber,countNumber);
            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
    }
    display.value = memoryNumber;
    cutDisplay(display.value);
   
})
function cutDisplay(a){

    if(a.length>9){
        a = a.slice(0,9);
    }
    display.value = a;
    return a;
}
function lastOperation(){
    switch (flag) {
        case '+' :
            if (check) {

                memoryNumber = display.value;
            } else {
                memoryNumber = Summ(memoryNumber, Number(display.value));
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '-' :
            if (check) {
                memoryNumber = display.value;
            } else {
                memoryNumber = minus(memoryNumber, Number(display.value));
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '/' :
            if (check) {
                memoryNumber = display.value;
            } else {
                memoryNumber = divide(memoryNumber, Number(display.value));
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '*' :
            if (check) {
                memoryNumber = display.value;
            } else {
                memoryNumber = multiply(memoryNumber, Number(display.value));
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
    }
}

