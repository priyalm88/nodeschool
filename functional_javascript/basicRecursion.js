function reduce(arr, fn, initial) { 
  if(arr.length === 0) {
    return initial;
  }
  var head = arr[0];
  initial = fn(initial, head);  
  var tail = arr.slice(1);
  return reduce(tail, fn, initial);
} 
 
module.exports = reduce
