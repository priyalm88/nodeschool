function countWords(inputWords) {
  var obj = {};
  inputWords.reduce(function(a, b, ind) {
    if(ind == 1) {
      obj[a] = 1;
    }
    if("undefined" === typeof obj[b]) {
      obj[b] = 1;
    } else {
      obj[b] += 1;
    }
  });
  return obj;
}

module.exports = countWords
