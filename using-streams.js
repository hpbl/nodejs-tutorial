const fs = require('fs');

const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('./example2.txt')
/*readStream.on('data', chunk => {
  writeStream.write(chunk);
})*/


// Pipes and Pipe Chaining. (Readable,Writable and Transform Streams) //
/* readStream.pipe(writeStream);*/

// Compressing file before writing
const zlib = require('zlib');
const gzip = zlib.createGzip();
const writeGzipStream = fs.createWriteStream('./example2.txt.gz')
readStream.pipe(gzip).pipe(writeGzipStream);
