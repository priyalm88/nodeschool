var zlib = require('zlib');
var crypto = require('crypto');
var tar = require('tar');
var through = require('through');

var decipher_stream = crypto.createDecipher(process.argv[2], process.argv[3]);

var parser = tar.Parse();
parser.on('entry', function(e) {
  if (e.type !== 'File') return;
  var encrypt_stream = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(encrypt_stream).pipe(through(write)).pipe(process.stdout);

  function write(data) {
    this.queue(data.toString() + ' ' + e.path + '\n');
  }
});

process.stdin.pipe(decipher_stream).pipe(zlib.createGunzip()).pipe(parser);
