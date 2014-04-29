process.stdin.once('data', function(chunk) {
  var uint8Arr = new Uint8Array(chunk);
  console.log(JSON.stringify(uint8Arr));
});
