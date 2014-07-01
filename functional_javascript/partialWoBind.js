var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    var arr = [];
    arr.push(namespace);
    arr = arr.concat(slice.call(arguments));
    console.log.apply(console, arr);
  }
}

module.exports = logger
