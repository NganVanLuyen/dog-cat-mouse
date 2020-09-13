var Dog = require('./dog');
var Cat = require('./cat');


var dog = new Dog('DOG');
dog.sayHi();

var tom = new Cat('Tom');

dog.eat(tom);
console.log(dog);
console.log(tom);
console.log(tom);