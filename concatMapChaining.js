require('./concatAll');
require('./concatMap');

var movieLists = require('./movieLists');

// Use one or more concatMap, map, and filter calls to create an array with the following items
// [
//   {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
//   {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
//   {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
//   {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
// ];

function concatMapChaining() {
  return movieLists
  .concatMap(function(movieList) { return movieList.videos
    .concatMap(function(video) { return video.boxarts
      .filter(function(boxart) { return boxart.width === 150 && boxart.height === 200;})
      .map(function(boxart) {
        return {
          id: video.id,
          title: video.title,
          boxart: boxart.url,
        };
      });
    });
  });
}

console.log(concatMapChaining());
