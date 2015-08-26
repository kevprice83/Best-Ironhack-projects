'use strict';


function file_sort(episodes) {
 episodes = episodes.sort(function(episode1, episode2){
  return episode1.episode_number-episode2.episode_number
});
 return episodes;
}
 module.exports = file_sort;