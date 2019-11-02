class MathCounter extends Rekursia{
	counter = (n) => {
		if (n === 245) {
			return n;
		};
		else{
			return counter(n+1);
		};
	}
};