const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let sum;
  let result = matrix[0].reduce((sum, current) => sum + current);
    
    for (let i = 1; i < matrix.length; i++) {
      let array = matrix[i];
  
      for (let j = 0; j < array.length; j++) {
        if (matrix[i - 1][j] != 0) {
          result += array[j];
        };
      };
    };

  sum = result;
  return sum;
};

module.exports = {
  getMatrixElementsSum
};
