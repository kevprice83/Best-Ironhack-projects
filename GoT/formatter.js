'use strict';

function formatter(episodeInfo) {
	console.log("Title: " + episodeInfo.title + " Episode #: " + episodeInfo.episode_number);
	console.log(episodeInfo.description);
	var stars = "";
	for ( var i = 0; i < Math.round(episodeInfo.rating); i++) {
		stars += '*' 
	}
	console.log("Rating: " + episodeInfo.rating + ' ' + stars);
}

module.exports = formatter;