const fs = require('fs');
const path = require('path');
const readline = require('readline');


const textFile = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const inputText = readline.createInterface(process.stdin, process.stdout);

inputText.write('Введите текст \n');

inputText.on('line', (text) => {
  if (text === 'exit') {
    inputText.close()
    textFile.close()
  } else {
    textFile.write(text + '\n')
  }
})

process.on('beforeExit', () => {
  console.log(`Текст записан в файл ${path.join(__dirname, 'text.txt')}`);
})