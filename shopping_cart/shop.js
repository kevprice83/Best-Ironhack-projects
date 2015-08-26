'user strict';

var Cart = require('./cart.js');

var Shop = function(items, cart) {
	this.items = items;
	this.cart = cart;
};

Shop.prototype.listItems = function() {
  console.log(this.items);
}

Shop.prototype.checkItems = function(itemName) {
  var selectedItem = this.items.filter(function (item) {
    return item.name == itemName;
  })[0];
 	  if (selectedItem) {
      this.cart.addItem(selectedItem);
 	}
	else {
 		console.log('We are sold out of ' + item.name + ' today. Sorry.');
	}
};

module.exports = Shop;