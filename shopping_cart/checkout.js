'user strict';

var Cart = require('./cart.js');
var Item = require('./items.js');
var Shop = require('./shop.js');
var read = require('read');

var KeyboardInputProvider = function () {
  this.promptSymbol = '> ';
};

KeyboardInputProvider.prototype.askForInput = function (callback) {
  console.log(this.promptSymbol);
  read('prompt', function (err, input, isDefault) {
    if (err) {
      console.log('Error!', err);
    } else {
      callback(input);
    }
  });
};

var items = [
	new Item ({
		name: 'Apple',
		price: 10
	}),
	new Item ({
		name: 'Orange',
		price: 5
	}),
	new Item ({
		name: 'Grapes',
		price: 15
	}),
	new Item ({
		name: 'Banana',
		price: 20
	}), 
	new Item ({
		name: 'Watermelon',
		price: 50
	})
];


var cart = new Cart();
var shop = new Shop(items, cart);
var inputProvider = new KeyboardInputProvider();

shop.listItems();

inputProvider.askForInput(shop.checkItems.bind(shop));



