function initElements(){
	dotBtn = document.getElementById('dub');
    display = document.getElementById('talo');
    allBtns = document.querySelectorAll('.btn,.bigbuttonen');
    plusBtn = document.getElementById('plusBtn');
    clearBtn = document.getElementById('del');
    minusBtn = document.getElementById('minusBtn');
    divideBtn = document.getElementById('divideBtn');
    resultBtn = document.getElementById('equally');
    multiplyBtn = document.getElementById('multiplyBtn');
}
function addListeners() {
	for (let i = 0; i < model.getAllBtns().length; i++) {
		let btn = model.getAllBtns()[i];
		
		btn.addEventListener('click', function (e) {
			clickNumber(e.target.textContent);
		});
	}
		
	model.getDotBtn().addEventListener('click', function () {
		for (let i = 0; i < model.getDisplay().length; i++) {
			if (model.getDisplay()[i] === '.' || model.getDisplay().length > 8) {
				return;
			}
		}
		model.setDisplay(model.getDisplay() + '.');
		model.setIsCheck(false);
	});
	model.getPlusBtn().addEventListener('click', function () {
		lastOperation();
		onOperationClickBtn('+');
	});
	model.getMinusBtn().addEventListener('click', function () {
		lastOperation();
		onOperationClickBtn('-');
	});
	model.getClearBtn().addEventListener('click', function () {
		clear();
	});
	model.getDivideBtn().addEventListener('click', function () {
		lastOperation();
		onOperationClickBtn('/');
	});
	model.getMultiplyBtn().addEventListener('click', function () {
		lastOperation();
		onOperationClickBtn('*');
	});
	model.getResultBtn().addEventListener('click', function () {
		if (model.getIsResult()) {
			model.setCountNumber(+model.getDisplay());
		}
		if (model.getOperatorType() == '') {
			model.setDisplay(model.getDisplay());
		}
		switch (model.getOperatorType()) {
			case '+':
				model.setMemoryNumber(logic.summ(model.getMemoryNumber(), model.getCountNumber()));
				result();
				break;
			case '-':
				model.setMemoryNumber(logic.minus(model.getMemoryNumber(), model.getCountNumber()));
				result();
				break;
			case '*':
				model.setMemoryNumber(logic.multiply(model.getMemoryNumber(), model.getCountNumber()));
				result();
				break;
			case '/':
				if(model.getCountNumber() == 0){
					model.setDisplay("0");
					model.setOperatorType('');
					return;
				}
				model.setMemoryNumber(logic.divide(model.getMemoryNumber(), model.getCountNumber()));
				cut(model.getMemoryNumber());
				model.setIsCheck(true);
				model.setIsResult(false);
				model.setDisplay(model.getMemoryNumber());
				displayCut(model.getDisplay());
				break;

		}
		model.setCountNumber(0);
		model.setOperatorType('');
	});

} 

function cut(a) {
	d = String(a);
	count = d.length;
	a = cutDisplay(d);
	a = parseFloat(a);
	return a;
}
function clear() {
	model.setDisplay(0);
	model.setMemoryNumber(0);
	model.setOperatorType('');
	model.setIsCheck(true);
	model.setIsResult(true);
}
function result() {
	cut(model.getMemoryNumber());
	model.setIsCheck(true);
	model.setIsResult(true);
	model.setDisplay(model.getMemoryNumber());
	displayCut(model.getDisplay());

	if(count > 9){
		model.setMemoryNumber(0);
		model.setOperatorType('');
		model.setDisplay("mnogovato chisel, detka =*");
	}
}
function cutDisplay(a) {
	console.log(typeof (a));
    if (a.length > 9) {
        a = a.slice(0, 9);
    }
    return a;
}
function displayCut(a) {
    model.setDisplay(cutDisplay(a));
}
function clickNumber(n) {
  if (n === "0"  && model.getDisplay() === "0"){
    return;
  }
  else if( n !== "0" && model.getDisplay() === "0" ){
    model.setDisplay(n);
    model.setIsCheck(false)
  }
  else if(model.getIsCheck()){
      model.setDisplay(n);
      model.setIsCheck(false)
  }else{
    model.setDisplay(model.getDisplay() + n);
    displayCut(model.getDisplay());
  }
}
function lastOperation() {
	if(model.getIsCheck()) {
		model.setMemoryNumber(model.getDisplay());
	}else{
		switch (model.getOperatorType()) {
			case '+' :
				model.setMemoryNumber(model.getMemoryNumber() + +model.getDisplay());
				lastOperationHelper();
				break;
			case '-' :
				model.setMemoryNumber(model.getMemoryNumber() - +model.getDisplay());
				lastOperationHelper();
				break;
			case '/' :
				model.setMemoryNumber(model.getMemoryNumber() / +model.getDisplay());
				lastOperationHelper();
				break;
			case '*' :
				model.setMemoryNumber(model.getMemoryNumber() * +model.getDisplay());
				lastOperationHelper();
				break;
		}
	}
}
function lastOperationHelper() {
	let a = String(model.getMemoryNumber());
		if(a.length > 9){
			model.setDisplay("mnogovato chisel, detka =*");
			return;
		}
	model.setMemoryNumber(Number(cutDisplay(a)));
	model.setDisplay(model.getMemoryNumber());
	cutDisplay(model.getDisplay());
}
function onOperationClickBtn(opType) {
	model.setMemoryNumber(+model.getDisplay());
	model.setOperatorType(opType);
	model.setIsCheck(true);
	model.setIsResult(true);
}

