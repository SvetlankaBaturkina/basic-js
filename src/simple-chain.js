const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 let chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },
  
  addLink(value = ' ') {
    this.array.push(value);
    return this;
  },
  
  removeLink(position) {
    let index = position - 1;
    if (Number.isInteger(index) && index >= 0 && this.array.length > index) {
      this.array.splice(index, 1);
      return this;
    }
    this.array.length = 0;
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let array = this.array.map(i => `( ${i} )`).join('~~');
    this.array.length = 0;
    return array;
  }
};
module.exports = {
  chainMaker
};
