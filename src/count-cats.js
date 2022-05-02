const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(backyard) {
  var newBackyard = [];
    newBackyard = backyard.flat (); // преобразуем матрицу в одномерный массив;   
  let number = 0; // по умолчанию число котов 0ж

  for (var i = 0; i < newBackyard.length; i++) { // перебираем матрицу; 
    if (newBackyard[i] == '^^') { // если элемент матрицы содержит "уши";
        number = number + 1; // увеличиваем число котов;
    } else {
        number = number; // оставляем число котов прежним;
    };
  }; 
  return number; // возвращаем число котов; 
};

module.exports = {
  countCats
};
