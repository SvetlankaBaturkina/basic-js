const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = [];                                      // создать новый массив
  let result;
  
  for (let char of str) {                            // перебрать строку
    if (arr[arr.length - 1] === char) {              // проверить повторение символа
      arr[arr.length - 2] = arr[arr.length - 2] + 1; // подсчитать количество повторений символа
    } else {
      arr.push(1);                                   // отправить в массив 1, если нет повторений
      arr.push(char);                                // отправить символ в массив
    }
  }
  
  strNew = arr.join('');                             // получить новую строку из нового массива
  result = strNew.replace(/1/g, '');                 // убрать 1 
  return result;
}


module.exports = {
  encodeLine
};
