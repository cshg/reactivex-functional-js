require('./concatMap');

Object.prototype.wrapInArray = function() {
  return [this];
};

var movieLists = require('./movieLists');

function returnMinSizeBoxart(prevBoxart, currBoxart) {
  var prevBoxartSize = prevBoxart.width * prevBoxart.height;
  var currBoxartSize = currBoxart.width * currBoxart.height;
  if (currBoxart < prevBoxart) {
    return currBoxart;
  }
  return prevBoxart;
}

function concatMapReduceChaining() {
  return movieLists
    .concatMap(function(movieList) { return movieList.videos
        .concatMap(function(video) { return video.boxarts
          .reduce(returnMinSizeBoxart)
          .wrapInArray()
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

console.log(concatMapReduceChaining());
