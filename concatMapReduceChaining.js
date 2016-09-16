require('./concatMap');

Object.prototype.wrapInArray = () => {
  return [this];
};

const movieLists = require('./movieLists');

const findMinSizeBoxart = (prevBoxart, currBoxart) => {
  const prevBoxartSize = prevBoxart.width * prevBoxart.height;
  const currBoxartSize = currBoxart.width * currBoxart.height;
  if (currBoxartSize < prevBoxartSize) {
    return currBoxart;
  }
  return prevBoxart;
};

function concatMapReduceChainingES6() {
  return movieLists
    .concatMap(movieList => movieList.videos
        .concatMap(video => video.boxarts
          .reduce(findMinSizeBoxart)
          .wrapInArray()
          .map(boxart => ({ id: video.id, title: video.title, boxart: boxart.url }))
        )
    );
}

console.log(concatMapReduceChainingES6());

// ES5 version
// function concatMapReduceChainingES5() {
//   return movieLists
//     .concatMap(function(movieList) { return movieList.videos
//         .concatMap(function(video) { return video.boxarts
//           .reduce(findMinSizeBoxart)
//           .wrapInArray()
//           .map(function(boxart) {
//             return {
//               id: video.id,
//               title: video.title,
//               boxart: boxart.url,
//             };
//           });
//         });
//     });
// }
