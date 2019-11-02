class LinkedSuperList extends LinkedList  {
}

LinkedSuperList.prototype = Object.create(LinkedList.prototype);
LinkedSuperList.prototype.constructor = LinkedSuperList;

LinkedSuperList.prototype.map = (f) => {
	if (typeof f != "function") return this;
    const newList = new LinkedSuperList();
    let tmp = this.root;
    let i = 0;
    while (tmp.next) {
        tmp = tmp.next;
        newList.push(f(tmp.el, i, LinkedSuperList));
        i++;
    }
    return newList;
};
LinkedSuperList.prototype.reduce = (f, initValue) => {
	 if (typeof f != "function") return 0;
    let result = 0;
    if (initValue) result = initValue;
    let tmp = this.root;
    let i = 0;
    while (tmp.next && tmp.next != null) {
        tmp = tmp.next;
        result = f(result, tmp.el, i, LinkedSuperList)
        i++;
    }
    return result;
};
//здесь я реализовал реверс путем изменения направления самого линкед листа.
//не уверен что это правильно, но... я просто последнее значение сделал как бы первым, а первое последним
//то есть если у нас был Линкекд лист к примеру 1->2->3->4->5, то вданном случае я просто сделал 
// что он изменилсм на 1<-2<-3<-4<-5
// ну или как полуится в итоге 5->4->3->2->1
LinkedSuperList.prototype.reverse = () => {
	let current = this.root.head;
	let tmp;
	while(current !== this.root){
		tmp = current.prev;
		current.prev = current.next;
		current.next= tmp;
		current =current.prev;
	}
	this.root.head= tmp;
	this.root.head = this.root.tail;
};

const linkedSuperList = new LinkedSuperList();