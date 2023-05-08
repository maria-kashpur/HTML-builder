const fs = require('fs');
const path = require('path');

const src = {

  folder: __dirname,
  html: path.join(__dirname, 'template.html'),
  css: path.join(__dirname, 'styles'),

}

const dest = {

  folder: path.join(__dirname, 'project-dist'),
  html: path.join(__dirname, 'project-dist', 'index. html'),
  css: path.join(__dirname, 'project-dist', 'style.css'),

}




async function createDestFolder() {
  fs.mkdir(dest.folder, (err) => {
    if (err) {
      fs.rm(dest.folder, {force: true, recursive: true}, (err) => { 
        if (err) throw err;
        createDestFolder();
      })
    };
})
}

function createHtmlBumdle() {

};

function createCssBundle() {
  let cssFiles = [];
  fs.readdir(src.css, {withFileTypes: true}, (err, files) => {
    if (err) throw err;
    for (let file of files) {
      if (!file.isDirectory() && path.extname(file.name) === '.css') {
        const cssFile = path.join(src.css, file.name);
        cssFiles.push(cssFile);
      }
    }
    fs.writeFile(dest.css, '', (err) => {
      if (err) throw err;
      console.log('Файл создан')
      cssFiles.forEach(file => {
        fs.readFile(file, 'utf8', (err, text) => {
          if (err) throw arr;
          fs.appendFile(dest.css, text, (err) => {
            if (err) throw err;
            console.log(`стили добавлены`)
          })
        })
      })
    })
  })
};

function copyDirecrory() {};


createDestFolder()
.then(() => createCssBundle())




// let cssFiles = [];

// fs.readdir(src, {withFileTypes: true}, (err, files) => {
//   if (err) throw err;
//   for (let file of files) {
//     if (!file.isDirectory() && path.extname(file.name) === '.css') {
//       const cssFile = path.join(src, file.name);
//       cssFiles.push(cssFile);
//     }
//   }
//   fs.writeFile(dest, '', (err) => {
//     if (err) throw err;
//     console.log('Файл создан')
//     cssFiles.forEach(file => {
//       fs.readFile(file, 'utf8', (err, text) => {
//         if (err) throw arr;
//         fs.appendFile(dest, text, (err) => {
//           if (err) throw err;
//           console.log(`стили добавлены`)
//         })
//       })
//     })
//   })
// })
