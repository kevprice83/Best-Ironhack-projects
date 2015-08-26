'use strict';

var file_sort = require ('./file_sort.js');
var formatter = require ('./formatter.js');

function fileactions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);

 	episodes = file_sort(episodes);

    episodes.forEach(function (episodeInfo, value) {
    	formatter(episodeInfo);
    });
}



module.exports = fileactions;