const fs = require('fs');

const readStream = (filename, encoding) => {
  return fs.createReadStream(filename);
};

const writeStream = (filename) => {
  return fs.createWriteStream(filename);
};

const read = readStream('./example.txt', 'utf8');
const write = writeStream('./example2.txt')
/*read.on('data', chunk => {
  write.write(chunk);
})*/


// Pipes and Pipe Chaining. (Readable,Writable and Transform Streams) //
/* readStream.pipe(writeStream);*/

// Compressing file before writing
const zlib = require('zlib');
/* const gzip = zlib.createGzip();
const writeGzipStream = writeStream('./example2.txt.gz')
readStream.pipe(gzip).pipe(writeGzipStream); */


// Uncompressing file
const unzip = zlib.createGunzip();
const readGzipStream = readStream('./example2.txt.gz')
const unzipWriteStream = writeStream('unzipped.txt')
readGzipStream.pipe(unzip).pipe(unzipWriteStream);
