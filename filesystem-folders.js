const fs = require('fs');

// Creating file
const createFile = (path, content) => fs.writeFile(path, content, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('successfully created file');
  }
});

// Creating folder with file
const createFolder = folderName => fs.mkdir(folderName, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('folder successfully created');

  }
});

// Removing empty folder
const removeFolder = folderName => fs.rmdir(folderName, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('folder successfully removed');
  }
});

// Removing file
const removeFile = filePath => fs.unlink(filePath, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('successfully removed file');
  }
});

// Remove folder with multiple files
const removeFilesFromFolder = folderName => fs.readdir(folderName, (error, files) => {
  if (error) {
    console.error(error);
  } else {
    files.forEach(file => {
      fs.unlink(`./${folderName}/${file}`, error => {
        if (error) {
          console.error(error);
        } else {
          console.log('successfully deleted file');
        }
      });
    });
  }
})

// removeFile('tutorial/example.txt');
removeFolder('tutorial');
// createFolder('tutorial');
// createFile('tutorial/example.txt', '123');
// createFile('tutorial/example2.txt', '456');
// removeFilesFromFolder('tutorial');
