const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let symbol = str.split('');
  let count = '1';
  let result = '';
  for (let i = 0; i<symbol.length; i++){
    if (symbol[i] == symbol[i++]){
      count++;
    } result = `${count + symbol[i]}`;

    if (symbol[i] !== symbol[i++]){
         count = '1'; 
    }
  }
  console.log(symbol);
  console.log(count);
  console.log(result);
}

module.exports = {
  encodeLine
};
