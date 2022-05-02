const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = String (n);                        // преобразовать число в строку
  let arr = Array.from(str);                   // преобразовать строку в массив
  let newArray = [];                           // создать новый массив
  let result = 0;                              // создать result  

    arr.forEach( (item, index, arr) => { 
        let a = arr.slice(0, index).join('') + arr.slice(index + 1).join(''); // получить новые числа из массива
        newArray.push(a);                      // добавить новые числа в ноый массив
    })
    
    result = (Math.max(...newArray));             // найти максималльное число в массиве
    return result;                             
};

module.exports = {
  deleteDigit
};
