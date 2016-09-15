require('./concatAll');

const movieLists = require('./movieLists');

function getVideosES6() {
  return movieLists
    .map(movieList => movieList.videos
      .map(video => video.boxarts
        .filter(boxart => boxart.width === 150)
        .map(boxart => ({ id: video.id, title: video.title, boxart: boxart.url }))
      )
      .concatAll()
    )
    .concatAll();
}

console.log(getVideosES6());

// previous ES5 version for comparison
function getVideosES5() {
  return movieLists
  .map(function(movieList) { return movieList.videos
    .map(function(video) { return video.boxarts
      .filter(function(boxart) { return boxart.width === 150; })
      .map(function(boxart) {
        return {
          id: video.id,
          title: video.title,
          boxart: boxart.url,
        };
      });
    })
    .concatAll();
  })
  .concatAll();
}
