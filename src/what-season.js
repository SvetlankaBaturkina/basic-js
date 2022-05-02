const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (!date)                                                     // проверить передан ли аргумент; и вернуть ошибку;
    return 'Unable to determine the time of year!';              // аргумент не передан - вернуть ошибку;

  if (getSeason.arguments.length === 0)                          // проверить действителен ли аргумент;
    throw new Error('Invalid date!');                            // аргумент недействителен - получить ошибку;

  if (date.length === 0) 
    throw new Error('Invalid date!'); 

  if (Object.prototype.toString.call(date) !== '[object Date]') 
    throw new Error('Invalid date!');

  if (Object.getOwnPropertySymbols(date).length !== 0) 
    throw new Error('Invalid date!');
  
let nameMonth =  date.getMonth();                                 // получить название месяца;
  
  if (nameMonth === 8 || nameMonth === 9 || nameMonth === 10) {
    return 'autumn';
  } else if (nameMonth === 2 || nameMonth === 3 || nameMonth === 4) {
    return 'spring';
  } else if (nameMonth === 5 || nameMonth === 6 || nameMonth === 7) {
    return 'summer';
  } else if  (nameMonth === 0|| nameMonth === 1 || nameMonth === 11) {
    return 'winter';
  } else {
    return 'fall';
  };
};


module.exports = {
  getSeason
};
