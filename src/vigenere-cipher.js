const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor (whatType) {
    if (whatType === false) {
       this.direction = false;
    } else {
       this.direction = true;
    }   
    this.alpfabet = ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  };

  encrypt(message, key) {
    if (!key || !message) {
      throw new Error('Incorrect arguments!');
    };

    let cnt = 0;
    let newString = message.toUpperCase().split('').map(element => {
        if (this.alpfabet.includes(element)) {
          return key[cnt++ % key.length].toUpperCase();
        } else {
          return element;
        };
    });

    let result = [];
    message.toUpperCase().split('').forEach((element, n) => {
      if (this.alpfabet.includes(element)) {
        let temp = (this.alpfabet.indexOf(element) + this.alpfabet.indexOf(newString[n])) % 26;
        result.push(this.alpfabet[temp]);
      } else {
        result.push(element);
      };
    });

    if (this.direction) {
        return result.join('');
    } else {
      return result.reverse().join('');
    };
  };

  decrypt() {
    decrypt(message, key) {

      if (!key || !message) {
        throw new Error('Incorrect arguments!');
      };
  
      let cnt = 0;
      let newString = message.toUpperCase().split('').map(element => {
          if (this.alpfabet.includes(element)) {
            return key[cnt++ % key.length].toUpperCase();
          } else {
            return element;
          }
      })
  
      let result = [];
      message.toUpperCase().split('').forEach((element, n) => {
          if (this.alpfabet.includes(element)) {
            let temp = this.alpfabet.indexOf(element) - (this.alpfabet.indexOf(newString[n]) % 26);
            if (temp < 0) {
                temp += 26;
            }
            result.push(this.alpfabet[temp])
          } else {
            result.push(element)
          }
      });

      if (this.direction) {
          return result.join('');
      } else {
          return result.reverse().join('');
      };
    };
  };
};

module.exports = {
  VigenereCipheringMachine
};
