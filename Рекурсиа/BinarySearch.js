class MathBinarySearch extends Rekursia{
	
	binarySearch = (array, target, start, end, middle) =>{
		let array = [1,2,3,4,5,6,7,8,9,10];
		let target = 7; //это задано значение просто дл примера;
		const middle = Math.floor((start + end) / 2);
		const end = array.length - 1;
		const start = array[0];
		if (array[middle] === target) {
			return array[middle];
		};
		else if(target > array[middle]){
			return binarySearch(array, target, middle + 1, end);
		};
		else if (target < array[middle]) {
			return binarySearch(array, target, middle - 1, start);
		};
	}
};