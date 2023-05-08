const fs = require('fs');
const path = require('path');
const readline = require('readline');

const folder = path.join(__dirname, 'secret-folder')

fs.readdir(folder, {withFileTypes: true}, showDataFile)

function showDataFile (err, data) {
  data.forEach(file => {
    if (file.isDirectory()) {
      return;
    }
    const extension = path.extname(file.name)
    const name = path.basename(file.name, extension)
    const fullFilePath = path.join(folder, file.name)
    
    fs.stat(fullFilePath, (err, aboutFile) => {
      console.log(name + ' - ' + extension + ' - ' + aboutFile.size + 'b');
    })
  })
}