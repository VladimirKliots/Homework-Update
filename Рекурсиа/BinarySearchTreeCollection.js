class BinarySearchTreeCollection extends Rekursia{
	//в данной функции мы выполняем так званую функцию коллекции "дерева". Эта сортировка выполняестя как.
	//Изниально мы выбираем число, то есть какую-то медиану.
	//а потом просто в зависимости больше или меньше наше новое значание от той самой медианы
	//мы его определяем вправо(если оно больше) или влево (если оно меньше)
	//а потом по цепочке в низ идем по такому же самому принципу
	//в право оно попадет или влево определяет то,
	//больше или меньше является наше число по отношению к предыдущему(крайнему) значению
	treeCollection = (el, nextStep) =>{
		const noda =new CreateTreeCollection(el);
		let tmpNoda;
		if (nextStep === undefined) {
			tmpNoda = this.root;
		}
		else{
			tmpNoda = nextStep;
		}
		if (this.root == null) {
			this.root = noda;
		}
		else{
			if (el >= tmpNoda.data && tmpNoda.right != null) {
				return this.push(el, tmpNoda.right);
			}
			else if (el < tmpNoda.data && tmpNoda.left != null) {
				return this.push(el, tmpNoda.left);
			}
			else if (el >= tmpNoda.data) {
				tmpNoda.right = noda;
			}
			else if (el < tmpNoda.data) {
				tmpNoda.left = noda;
			}
		}
	};
};