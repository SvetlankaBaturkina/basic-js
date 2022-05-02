const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let dnsStats = {};                                                // создать новый объект;

  domains.forEach (str => {                                         // перебрать массив;
    let arrays = str.split('.');                                    // разбить str;

      arrays.forEach ((el, key, arr) => {                           // перебрать;
        let element = '.' + arr.slice(key).reverse().join('.');     // скопировать, перевернуть, разделить;
            
          if (dnsStats.hasOwnProperty(element) === true ) {         // проверить, содержит ли объект наш элемент;
              dnsStats[element] = dnsStats[element] + 1;            // добавить 1, если да;
          } else {
              dnsStats[element] = 1;                                // оставить 1, если нет; 
          };

      });

  });
  return dnsStats;
};

module.exports = {
  getDNSStats
};
