class List{
	constructor(){
	this.pop = function () {

	};
	this.push = function () {

	};
	this.shift = function(){

	};
	this.unshift = function(){

	};
	this.clear = function(){

	};
	this.length = function(){

	};
	this.sort = function(){

	};

	this.toString = function(){

	};
	this.map = function(){

	};
	this.reverse = function(){

	};
	this.reduce = function(){

	};
}
	
}

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
class LinkedList extends List{
	root = {
		next : null,
		prev : null,
		length : 0,
	};

	clear = () => {
		this.root.next = null;
		this.root.prev = null;
		this.root.length = 0;
	};
	
	length = () => {
		return this.root.length;
	};
	
	createNode = (el) => {
		return {
			el : el ? el : null,
			next : null,
			prev : null,
			index : this.root.length,
		}
	};
	
	push = (el) => {
		const newNode = this.createNode(el);
		let tmp = this.root;
		while (tmp.next && (tmp.next !== this.root)){
			tmp.next.prev = tmp;
			tmp = tmp.next;
			newNode.prev = tmp
		}
		tmp.next = newNode;
		this.root.prev = null;
		this.root.length++;
		return true;
	};
	
	pop = () => {
		if(this.root.length === 0){
			return false;
		}

		if(this.root.length === 1){
			let deleted = this.root.next;
			this.root.next = null;
			this.root.length --;
			return deleted;
		}

		let tmp = this.root;
		while(tmp.next !== null){
			tmp = tmp.next;

			if(tmp.index === (this.root.length - 2) ){
				let deleted = tmp.next;
				tmp.next == null;
				this.root.length --;
				return deleted
			}
		}
	};
	
	shift = () => {
		if(this.root.next = null){
			return false;
		}else{
			const tmp = this.root.next.next;
			this.root.next = tmp;
			this.root.length--;
		}
	};
	
	unshift = (el) => {
		const newNode = this.createNode(el);
		if(this.root.next == null){
			this.root.next = newNode;
			this.root.length++;
		}else{
			let tmp = this.root.next;
			this.root.next = newNode;
			this.root.next.next = tmp;
			this.root.length++;
		}
		return true;
	};
	toString = () => {
		let str = "";
		let tmp = this.root;
		while(tmp.next !== null){
			tmp = tmp.next;
			str += tmp.el + ", ";
		}
		str = str.substring(0, str.length - 2);
		return str;
	};
	
	sort = (f) => {
		if(f && (typeof f == "function" )){
			let firstNoda = this.root.next;
			while(firstNoda && firstNoda.next){
				if(f(firstNoda.el, firstNoda.next.el) > 0){
					[firstNoda.el, firstNoda.next.el] = [firstNoda.next.el, firstNoda.el];
				}
			}
		}else{
			let firstNoda = this.root.next;
			if(!firstNoda){
				return false;
			}
			while(firstNoda && firstNoda.next){
				if(String(firstNoda.el) > String(firstNoda.next.el)){
					[firstNoda.el, firstNoda.next.el] = [firstNoda.next.el, firstNoda.el];
				}
				firstNoda = firstNoda.next;;
			}
		}
	};
	map = () =>{

	}
}