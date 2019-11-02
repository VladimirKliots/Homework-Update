const arrayList = new ArrayList();

describe('Array list', function () {
	beforeEach(function () {
        arrayList.clear();
    })

    describe('Метод PUSH ', function(){
    	it('Создать обьект и запушить в него значение 1. На выходе полуить TRUE, если а[0]=1', function(){
    		arrayList.push(1);
            let exp = undefined;
            const act = arrayList[0];
            assert.equal(exp, act);
    	})
    	it('Создать обьект и запушить в него значение A. На выходе полуить undefined', function(){
    		arrayList.push(0);
            let exp = undefined;
            const act = arrayList[0];
            assert.equal(exp, act);
    	})
    })
    describe('Метод Length', function () {
		it('Три раза запушить знаечине (1,12,17) и получить ответ length = 3', function () {
			arrayList.push(1);
			arrayList.push(12);
			arrayList.push(17);
            const exp = 3;
            const act = arrayList.length();
            assert.equal(exp, act)
        })
        it('Запушить 2 значени (А, 10) и получить ответ length = 2', function () {
			arrayList.push('А');
			arrayList.push(10);
            const exp = 2;
            const act = arrayList.length();
            assert.equal(exp, act)
        })
        it('Запушить 5 значений (А, Б, В, Г, Д) и получить ответ length = 5', function () {
			arrayList.push('А');
			arrayList.push('Б');
			arrayList.push('В');
			arrayList.push('Г');
			arrayList.push('Д');
            const exp = 5;
            const act = arrayList.length();
            assert.equal(exp, act)
        })

	})
	describe('Метод Pop', function () {
		it('У нашего листа length 0, ожидаемый ответ - false ', function () {
            const exp = false;
            const act = arrayList.length();
            assert.equal(exp, act)
        })

	})
	describe('Метод toString', function () {

		it('Метод toString не возвращает стрингу. Ожидаемый ответ - false', function () {
            const exp = false;
            const act = [];
            assert.equal(exp, act);
        })
		it('Метод toString возвращает стрингу.Ожидаемый ответ - true', function () {
            const exp = "string";
            const act = typeof(arrayList.toString())
            assert.equal(exp, act);
        })
	})

});

const linkedList = new LinkedList();

describe('Linked list', function () {
	beforeEach(function () {
        linkedList.clear();
    })

	describe('Проверка на обьект', function () {

		it('Проверка, иавлетс ли LinkedList обьектом', function () {
            const exp = typeof({});
            const act = typeof(linkedList);
            assert.deepEqual(exp, act);
        })
	})
	describe('Создание ноды', function () {
		it('Функциа CreateNode создает обьект, ожидаемое значение - true', function () {
            const exp = "object";
            const act = typeof(linkedList.createNode(1));
            assert.deepEqual(exp, act);
        })
	})
	describe('Метод Pop', function () {
		it('У листа длинна 0, ожидаемое значение - false ', function () {
            const exp = false;
            const act = linkedList.length();
            assert.equal(exp, act)
        })

	})
	describe('Метод Unshift', function () {
		it('Метод unshift имеет один аргумент и ожидаемый ответ true', function () {
            const exp = true;
            const act = linkedList.unshift(1);
            assert.equal(exp, act);
        })
	})
	describe('Метод toString', function () {
		it('Метод toString имеет значение разного типа. Ожидаемый ответ - false', function () {
            const exp = false;
            const act = linkedList.toString(1, "a");
            assert.equal(exp, act);
        })
        it('Метод toString не возвращает стрингу.Ожидаемый ответ - false', function () {
            const exp = false;
            const act = [];
            assert.equal(exp, act);
        })
        it('Метод toString возвращает стрингу. Ожидаемый ответ - true', function () {
            const exp = "string";
            const act = typeof(linkedList.toString())
            assert.equal(exp, act);
        })
    })

});