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