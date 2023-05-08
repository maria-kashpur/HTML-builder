const fs = require('fs');
const path = require('path');

const dest = path.join(__dirname, 'files-copy')
const src = path.join(__dirname, 'files')


fs.promises.rm(dest, {force: true, recursive: true}, (err) => { 
  if (err) throw err;
})
.then(() => fs.promises.mkdir(dest, {recursive: true}, (err, data) => {}))
.then(() => fs.readdir(src, {withFileTypes: true}, copyData))


function copyData(err, data) {
  console.log(data)
  data.forEach(el => {
    fs.copyFile(path.join(src, el.name), path.join(dest, el.name), err => {
      if(err) throw err; // не удалось скопировать файл
      console.log('Файл успешно скопирован');
    })
  });
}

