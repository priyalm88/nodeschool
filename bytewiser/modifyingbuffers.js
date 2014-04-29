process.stdin.once('data', function(chunk) {
  for(var i=0; i<chunk.length; i++) {
    if(chunk[i] == 46) {
      chunk.write('!', i);
    }
  }
  console.log(chunk);
});
