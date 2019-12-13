//Observable

function Observable() {
    var observers = [];
    this.sendMessage = function (msg) {
        for (var i = 0; i < observers.length; i++){
            observers[i].notify(msg);
        }
    }
    this.addObserver = function (observer) {
        observers.push(observer);
    }
}
//Observer
function Observer(behavior) {
    this.notify = function (msg) {
        behavior(msg);
    };
}


var observable = new Observable();
var obs1 = new Observer(function (msg) {
    console.log(msg);
});
var obs2 = new Observer(function (msg) {
    alert(msg);
});
observable.addObserver(obs1);
observable.addObserver(obs2);
setTimeout(function () {
    observable.sendMessage("Текуща дата - " + new Date())
}, 3000);