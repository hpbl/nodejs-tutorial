const fs = require('fs');

// Create file
/* fs.writeFile('example.txt', 'This is an example', (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('file created!');
    fs.readFile('example.txt', 'utf8', (error, file) => {
      if (error) {
        console.error(error);
      } else {
        console.log(file);
      }
    })
  }
}) */


// Rename file
/* fs.rename('example.txt', 'example2.txt', error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Successfully renamed file');
  }
}); */


// Appending data to file
/* fs.appendFile('example2.txt', 'Some data beind appended', error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Successfully appended data to file');
  }
}); */


// Deleting file
fs.unlink('example2.txt', error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Successfully deleted file');
  }
});
