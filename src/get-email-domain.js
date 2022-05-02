const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let nameEmail = email.split('@');       // разбить строку;
    nameEmail = nameEmail.reverse()[0];   // поменять порядок;

  return nameEmail;
  
}

module.exports = {
  getEmailDomain
};
