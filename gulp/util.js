// 驼峰转大写加下划线
function CamelToUpper(src) {
  let dst = src.replace(/([A-Z])/g, '_$&').toUpperCase();
  return dst;
}

// 全大写转大写加下划线
function CaseToUpper(src) {
  let dst = src.replace(/([A-Z])/g, '_$&').toUpperCase();
  return dst.substring(1);
}

// 小写加中划线转大写加下划线
function LowerCaseToUpper(fileName) {
  const words = fileName.split('-');
  const upperWords = words.map(word => {
    return word.toUpperCase();
  });

  let result = '';
  for (const word of upperWords) {
    result += word + '_';
  }

  return result.substring(0, result.length - 1);
}

// 小写加中划线转大写
function LowerCaseToUpperCase(fileName) {
  const words = fileName.split('-');
  const upperWords = words.map(word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  });

  let result = '';
  for (const word of upperWords) {
    result += word;
  }

  return result;
}

module.exports = { CamelToUpper, CaseToUpper, LowerCaseToUpper, LowerCaseToUpperCase };
