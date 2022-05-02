const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(array) {
  let result;
  if (!Array.isArray(array))                                               // проверить является ли массивом;
    throw new Error("'arr' parameter must be an instance of the Array!");  // выдать ошибку;

  let discard_next = (input, exit, item) => {                                 // следующий элемент;
    input.splice(item, 1);
  };

  let discard_prev = (input, exit, item) => {                              // предыдущий элемент;
    exit.pop();
  };

  let double_next = (input, exit, item) => {                              // дублировать следующий элемент;
    if (input.length > item) input.splice(item, 0, input[item]);
  };
  
  let double_prev = (input, exit, item) => {                              // дублировать предыдущий элемент;
    let prev = exit.pop();
      if (prev) exit.push(prev, prev);
  };

  let subsequence = {                                                 // последовательность; 
    '--discard-next': discard_next,
    '--discard-prev': discard_prev,
    '--double-next': double_next,
    '--double-prev': double_prev,
  };

  let input = Array.from(array);
  let exit = [];

  let item = 0;
  for (let element of input) {
    if (!Object.keys(subsequence).includes(element)) exit.push(element);
    else {
      if (!Object.keys(subsequence).includes(input[item - 1]))     //'--discard-next', x, '--double-prev'
      subsequence[element](input, exit, item + 1);
    }
    item++;
  }
  result = exit;
  return result;
}

module.exports = {
  transform
};
