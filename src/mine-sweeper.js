const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
    let array = [];

  for (let numberRow = 0; numberRow < matrix.length; numberRow++){
    array.push([]);

    for (let numberColumn = 0; numberColumn < matrix[numberRow].length; numberColumn++) {
    let numbersMines = 0;

      if (matrix[numberRow][numberColumn - 1] === true) {
        numbersMines++;
      };   
    
      if (matrix[numberRow][numberColumn + 1] === true) {
        numbersMines++;
      };

      if (matrix[numberRow - 1]) {
        if (matrix[numberRow - 1][numberColumn - 1] === true) {
          numbersMines++;
        };
        if (matrix[numberRow - 1][numberColumn] === true) {
          numbersMines++;
        };
        if (matrix[numberRow - 1][numberColumn + 1] === true) {
          numbersMines++;
        };
      };
      
      if (matrix[numberRow + 1]) {
        if (matrix[numberRow + 1][numberColumn - 1] === true) {
          numbersMines++;
        };
        if (matrix[numberRow + 1][numberColumn] === true) {
          numbersMines++;
        };
        if (matrix[numberRow + 1][numberColumn + 1] === true) {
          numbersMines++;
        };
      };

    array[numberRow][numberColumn] = numbersMines;
    };
  };
  return array;
};

module.exports = {
  minesweeper
};
