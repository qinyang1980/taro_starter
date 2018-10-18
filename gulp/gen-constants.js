const fs = require('fs-extra');
const path = require('path');
const util = require('./util');

// 自动产生 pages.js 文件
///////////////////////////////////////////////////////

const srcFolder = path.join(__dirname, '../src');
const pagesFolder = './src/pages'; // 特别注意，要传根目录gulp文件所在的相对路径

function genPages() {
  genPage(pagesFolder);
}

function genPage(dir) {
  const dstFile = `${srcFolder}/constants/pages.js`;
  if (dir === pagesFolder) {
    fs.writeFileSync(dstFile, '// 该文件是自动产生的，请不要修改它!\r\n', 'utf8');
  }

  let result = '';
  fs.readdirSync(dir).forEach(file => {
    const pathParser = path.parse(file);
    const info = fs.statSync(`${dir}/${file}`);
    const filePath = path.join(dir, pathParser.name);

    if (info.isFile() && pathParser.name !== 'index' && pathParser.name.includes('presenter')) {
      const words = filePath.split(path.sep);
      words.shift();

      let val = words.join('/');

      words.pop();
      let key = getUpperKey(words);

      let str = '';
      str = `export const ${key} = \'${val}\';\r\n`;
      result += str;
    } else if (info.isDirectory()) {
      genPage(filePath);
    }
  });

  fs.appendFileSync(dstFile, result, 'utf8');
}

// 得到key
function getUpperKey(words) {
  const upperWords = words.map(word => {
    let str = word.replace(new RegExp('-', 'g'), '_'); // repace all
    return str.toUpperCase();
  });

  let upperKey = '';
  for (const word of upperWords) {
    upperKey += '_' + word;
  }

  upperKey = upperKey.replace('_PAGES_', 'PAGE_');
  return upperKey;
}

// 自动产生 models.js 文件
///////////////////////////////////////////////////////

function genModels() {
  const srcDir = `${srcFolder}/models`;
  const dstFile = `${srcFolder}/constants/models.js`;

  let result = '// 该文件是自动产生的，请不要修改它!\r\n';
  fs.readdirSync(srcDir).forEach(file => {
    const pathParser = path.parse(file);
    const info = fs.statSync(`${srcDir}/${file}`);
    if (info.isFile() && pathParser.name !== 'index') {
      const name = pathParser.name.split('.')[0];
      const key = util.LowerCaseToUpper(name);
      const val = util.LowerCaseToUpperCase(name);

      const str = `export const MODEL_${key} = \'${val}Model\';\r\n`;
      result += str;
    }
  });

  // you must create it first, and then write string to it
  fs.createFileSync(dstFile);
  fs.writeFileSync(dstFile, result, 'utf8');
}

module.exports = { genPages, genModels };
