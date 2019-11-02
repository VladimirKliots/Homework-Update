class ArrayList extends List {
	clearArray = [];
	array = [];
	size = 0;
	str = "";


// let OurArrPop = {
// 	arr: [1,2,3,4,5,6,7,8,9],
	pop = () => {
		let lastElem = this.array[this.size - 1];
		let a = [];
		for(let i = 0; i < this.size - 1; i++){
			a[i] = this.array[i];
		}
		this.array = a;
		this.size--;
		return lastElem;
	};


// let OurArrPush ={
// 	arr: [1,2,3,4,5,6,7,8,9],
	push = (value) => {
		this.array[this.size] = value;
		this.size++;
		return value;
	};



// let OurArrShift={
// 	arr: [1,2,3,4,5,6,7,8,9],
// 	arrClear: [],
	shift = () => {
		let firstElem = this.array[0];
		let a = [];
		for(let i = 0; i < this.size - 1; i++){
			a[i] = this.array[i + 1];
		}
		this.array = a;
		this.size--;
		return firstElem;
	};



// let OurArrUnshift={
// 	arr: [1,2,3,4,5,6,7,8,9],
// 	arrClear: [],
	unshift = (value) =>{
		let a = [];
		a[0] = value;
		for(let i = 0; i < this.size; i++){
			a[i + 1] = this.array[i];
		}
		this.array = a;
		this.size++;
		return value;
	};


// let ClearOurArr={
// 	arr: [1,2,3,4,5,6,7,8,9],
	clear =  () => {
		this.array = [];
		this.size = 0;
	};



// let OurArrSize={

// 	arr: [1,2,3,4,5,6,7,8,9],
// 	number: 0,
	length =  () => {
		return this.size;
	};


// let OurArrSort={
// 	arr: [1,5,34,7,89,2,54],
	 sort = (f) => {
		if(f && (typeof f == "function" )){
			for(let i = 0; i < this.size; i++){
				for(let j = 0; j < this.size; j++){
					if(j === this.size - 1){
						break;
					}
					if(f(this.array[j], this.array[j+1]) === 	1){
						[this.array[j], this.array[j+1]] = [this.array[j+1], this.array[j]];
					}
				}
			}
		}else{
			for(let i = 0; i < this.size; i++){
				for(let j = 0; j < this.size; j++){
					if(j === this.size - 1){
						break;
					}if( String(this.array[j]) > String(this.array[j + 1]) ){
						[this.array[j], this.array[j+1]] = [this.array[j+1], this.array[j]];
					}
				}
			}
		}
	}
	toString = () => {
		for(let i = 0; i < this.size; i++){
			this.str +=this.array[i] + ", ";
		}
		this.str = this.str.substring(0, this.str.length - 2);
		return this.str;
	}
	reduce = () => {
		for(i = this.length -1; i < this.lenght; i--){
				this.clearArray = this.array;
		}
		return clearArray;
	}
	
}
const a = new ArrayList();