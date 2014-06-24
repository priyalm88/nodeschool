module.exports = function getShortMessages(messages) {
  var result = messages.map(function(x) {
      return x.message;
    }).filter(function(y) {
      if(y.length < 50) {
        return y;
      }
    });
  return result;
}
