var combine = require('stream-combiner');
var through = require('through');
var zlib = require('zlib');
var split = require('split');

module.exports = function () {
  var bookCollection;
  var tr = through(write, end);

  function write(line) {
    if (line.length === 0) return;
    var row = JSON.parse(line);
    if(row.type === 'genre') {
      if(bookCollection) {
        this.queue(JSON.stringify(bookCollection) + '\n');
      }
      bookCollection = {'name': row.name, 'books': []};
    } else if(row.type === 'book') {
      bookCollection.books.push(row.name);
    }
  }

  function end() {
    if(bookCollection) {
      this.queue(JSON.stringify(bookCollection) + '\n');
    }
    this.queue(null);
  }
  
  return combine(split(), tr, zlib.createGzip());
}
