const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(strOne, strSecond) {
  let arrayStrOne = strOne.split(''); // преобразовать строка в массив;
  let arrayStrSecond = strSecond.split('');
  let result = 0;
  let count;

  for (let i = 0; i < arrayStrOne.length; i++){
    let index = arrayStrSecond.indexOf(arrayStrOne[i]);

      if (index !== -1) {
        result++;
        arrayStrSecond.splice(index, 1);
      };

  };
    count = result;
    return count;
};

module.exports = {
  getCommonCharacterCount
};
