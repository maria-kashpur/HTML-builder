const fs = require('fs');
const path = require('path');

const dest = path.join(__dirname, 'project-dist', 'bundle.css');
const src = path.join(__dirname, 'styles');

let cssFiles = [];

fs.readdir(src, {withFileTypes: true}, (err, files) => {
  if (err) throw err;
  for (let file of files) {
    if (!file.isDirectory() && path.extname(file.name) === '.css') {
      const cssFile = path.join(src, file.name);
      cssFiles.push(cssFile);
    }
  }
  fs.writeFile(dest, '', (err) => {
    if (err) throw err;
    console.log('Файл создан')
    cssFiles.forEach(file => {
      fs.readFile(file, 'utf8', (err, text) => {
        if (err) throw arr;
        fs.appendFile(dest, text, (err) => {
          if (err) throw err;
          console.log(`стили добавлены`)
        })
      })
    })
  })
})
