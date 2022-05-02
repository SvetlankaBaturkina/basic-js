const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(array) {
  let nameOfFiles = {};                                      // создать новый объект для новых имен файлов;
  let result = [];

  for (let number of array) {

    if (nameOfFiles[number]) {
      let fileName = `${number}(${nameOfFiles[number]})`;;  // получить новое имя файла по количеству;
          nameOfFiles[number] += 1;                        // добавить суффикс к новому имени;
          nameOfFiles[fileName] = 1;                       // добавить суффикс;
    } else nameOfFiles[number] = 1;                       // оставить как есть;

  };

  result = Object.keys(nameOfFiles);
  return result;
};

module.exports = {
  renameFiles
};
