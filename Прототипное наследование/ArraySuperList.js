class ArraySuperList extends ArrayList {
    ArrayList.call(this);
}

ArraySuperList.prototype = Object.create(ArrayList.prototype);
ArraySuperList.prototype.constructor = ArraySuperList;

//реализаци функции MAP при которой нужно перебрать все элементы массива array,
	//и перегнать их в массив clearArray умножеными к примеру на 2.
	ArraySuperList.prototype.map = () =>{
		for (i = 0; i < this.array.length; i++) {
			clearArray.push(parseInt(array[i]*2));
		}
		return clearArray;
	}
	//реализовал метод реверс через push. Просто перебирать массив начал с конца.
	//и соответственно перегнал уже готовый ответ перевернутого массива array в clearArray.
	ArraySuperList.prototype.reverse = () =>{
		for(i = this.array.length - 1; i >= 0; i--){
			this.clearArray.push(parseInt(this.array[i]));
		}
		return clearArray;
	}
	//Так, как функци reduce складывает все наши элементы массива, мы просто делаем то же свмое,
	//только через перебор массива, плюсу каждое его значение.
	ArraySuperList.prototype.reduce = () =>{
		let sumArray = 0;
		for(i = 0; i < this.array.length; i++){
    		sumArray += this.array[i];
    	}
    	return sumArray;
	}