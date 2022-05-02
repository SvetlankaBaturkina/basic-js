const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  var arrayNum = []; // создаем пустой массив;
  var sum = 0; // сумма поо умолчанию равна 0;
 
  arrayNum = Array.from(String(n), Number); // преобразовываем число в массив;
  
    for (var i = 0; i < arrayNum.length; i++) { // перебираем массив;
      sum += arrayNum[i]; // увеливаем сумму на значение элемента;
    };

    if (sum >= 10) { // проверяем двузначное ли число полученная сумма;
      sum = Math.floor((sum) / 10) + (sum % 10); // находим сумму последнего числа;
    };

  return sum; // возвращаем сумму;
};


module.exports = {
  getSumOfDigits
};
