var fs = require('fs');
var fileActions = require('./fileactions.js');
fs.readFile("./GoT.json", 'utf8', fileActions);