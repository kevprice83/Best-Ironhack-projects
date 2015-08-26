'user strict';

var Item = function(itemInfo) {
	this.name = itemInfo.name;
	this.price = itemInfo.price;
};

module.exports = Item;