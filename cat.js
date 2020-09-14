var Mouse = require('./mouse')

function Cat(name) {
	this.name = name;
	this.stomach = [];
};

Cat.prototype.eat = function (animal) {
	if(animal instanceof Mouse) {
	this.stomach.push(Mouse);
	} else{
		throw new Error('Cat can only eat Mouse!');
	}
};

module.exports = Cat;