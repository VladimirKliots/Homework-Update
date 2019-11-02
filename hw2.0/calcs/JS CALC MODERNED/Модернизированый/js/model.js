let isCheck= true;
let isResult = false;
let countNumber = 0;
let memoryNumber = 0;
let operatorType = '';

let dotBtn;
let display;
let allBtns;
let plusBtn;
let clearBtn;
let minusBtn;
let divideBtn;
let resultBtn;
let multiplyBtn;

let model = {

    getIsCheck: () => isCheck,
    getIsResult: () => isResult,
    getCountNumber: () => countNumber,
    getMemoryNumber: () => memoryNumber,
    getOperatorType: () => operatorType,

    setIsCheck: (value) => isCheck = value,
    setIsResult: (value) => isResult = value,
    setCountNumber: (value) => countNumber = value,
    setMemoryNumber: (value) => memoryNumber = value,
    setOperatorType: (value) => operatorType = value,

    getDotBtn: () => dotBtn,
    getDisplay: () => display.value,
    getAllBtns: () => allBtns,
    getPlusBtn: () => plusBtn,
    getClearBtn: () => clearBtn,
    getMinusBtn: () => minusBtn,
    getDivideBtn: () => divideBtn,
    getResultBtn: () => resultBtn,
    getMultiplyBtn: () => multiplyBtn,

    setDotBtn: (value) => dotBtn = value,
    setDisplay: (value) => display.value = value,
    setAllBtns: (value) => allBtns = value,
    setPlusBtn: (value) => plusBtn = value,
    setClearBtn: (value) => clearBtn = value,
    setMinusBtn: (value) => minusBtn = value,
    setDivideBtn: (value) => divideBtn = value,
    setResultBtn: (value) => resultBtn = value,
    setMultiplyBtn: (value) => multiplyBtn = value,

};
