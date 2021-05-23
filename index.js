var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mouse');



var dog = new Dog('DOG');
dog.sayHi();

var tom = new Cat('Tom');

var jerry = new Mouse('jerry')

tom.eat(jerry);
dog.eat(tom);

console.log(dog);
console.log(tom);