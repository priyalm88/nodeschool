module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(prev, current, index, arr) {
    return prev.concat(fn(current, index, arr));
  }, []);
};
