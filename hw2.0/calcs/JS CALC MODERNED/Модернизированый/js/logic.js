function summ(a, b) {
	a = ((a * 1000000000) + (b * 1000000000))/1000000000;
	return a;
}
function minus(a, b) {
	a = ((a * 1000000000) - (b * 1000000000))/1000000000;
	return a;
}	
function divide(a, b) {
	a = ((a * 1000000000) / (b * 1000000000));
	return a; 
}
function multiply(a, b) {
	a = ((a * 1000000) * (b * 1000))/1000000000;
	return a;
}

let logic = {
	summ,
	minus,
	divide,
	multiply,
};

//пофиксил не корректную работу вычислениR джава скрипта этими странными цыфрами выше, не пугайтесь)