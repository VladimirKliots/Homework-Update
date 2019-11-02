class MathFibonachy extends Rekursia{
	fibonachy = (n) =>{
		if (n < 2){
			return n;
		};
		else{
			return (fibonachy(n-1) + fibonachy(n-2))
		};
	}
};
