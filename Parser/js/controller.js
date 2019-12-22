
console.log(model.JSONSerialase(person) === JSON.stringify(person));
const sad = model.JSONSerialase(person);
console.log(deepEqual(model.JSONParse(sad), JSON.parse(sad)));


console.log(JSON.parse(sad));
console.log(model.JSONParse(sad));



