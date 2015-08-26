'user strict';


var Cart = function() {
	this.items = [];
}

Cart.prototype.listItems = function() {
	console.log(this.items);
}


Cart.prototype.addItem = function(item) {
		this.items.push(item);
		console.log('Adding ' + item.name + ' at a price of ' + item.price + '€');
}

module.exports = Cart;