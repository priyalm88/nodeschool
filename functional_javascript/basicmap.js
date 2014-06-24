function doubleAll(numbers) {
  // SOLUTION GOES HERE
  var result = numbers.map(function(x) {
    return x*2;
  });
  return result;
}

module.exports = doubleAll
