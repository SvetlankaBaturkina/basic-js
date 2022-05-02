const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;                               // проверить или дан массив;
    let nameComand = '';                                                   // создать пустую строку;    

      nameComand = members.filter (element => typeof element == 'string')  // проверить или имена участников string;
        .map (element => element.trim()[0])                                // убрать пробелы в имени члена команды если есть; 
        .filter (element => isNaN(element))                                // проверить является ли нечисловым значением;
        .map (element => element.toUpperCase())                            // перевести в верхний регистр первую букву имени члена команды;
        .sort()                                                            // отсортировать по алфавиту;
        .join('');                                                         // собрать название команды;
                                                                  
  return(nameComand);
};

module.exports = {
  createDreamTeam
};
