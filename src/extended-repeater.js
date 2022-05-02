const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  let newStr = '';
  let plusInString = '';

  for (let i = 0; i < additionRepeatTimes; i++) {
    plusInString += addition;
    if (i < additionRepeatTimes - 1) {
        plusInString += additionSeparator;
    }
  }

  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str + plusInString;
    if (i < repeatTimes - 1 ) {
      result += separator;
    }
  }

  return result;
}


module.exports = {
  repeater
};
