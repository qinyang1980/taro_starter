const fs = require('fs-extra');
const path = require('path');

// 自动产生images.js文件
///////////////////////////////////////////////////////

const srcFolder = path.join(__dirname, '../src');

function genImages() {
  let result = '// 该文件是自动产生的，请不要修改它!\r\nconst IMAGES = {\r\n';
  const pngImagesStr = handleImages();

  result += pngImagesStr + '};\r\nexport default IMAGES;\r\n';

  const dstFile = `${srcFolder}/constants/images.js`;

  // you must create it first, and then write string to it
  fs.createFileSync(dstFile);
  fs.writeFileSync(dstFile, result, 'utf8');
}

function handleImages() {
  const srcDir = `${srcFolder}/common/assets/images`;

  let result = '  // png images\r\n';
  fs.readdirSync(srcDir).forEach(file => {
    const pathParser = path.parse(file);

    if (pathParser.ext === '.png') {
      const key = getKey(pathParser.name);
      result += `  ${key}: require('../common/assets/images/${pathParser.base}'),\r\n`;
    }
  });

  return result;
}

function getKey(name) {
  let ret = '';
  const words = name.split('-');
  for (const word of words) {
    ret += word.substring(0, 1).toUpperCase() + word.substring(1);
  }
  ret = ret.substring(0, 1).toLowerCase() + ret.substring(1);
  return ret;
}

module.exports = genImages;
