Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    subArray.forEach(function(element) {
      results.push(element);
    });
  });

  return results;
};