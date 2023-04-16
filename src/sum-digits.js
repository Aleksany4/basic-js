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
  let res = Array.from(n.toString());
  let rest = res.reduce(function(a, b){
    return Number(a) + Number(b);
  });
  if (rest.toString().length == 1){
    return rest;
  }
  if (rest.toString().length > 1){
   let restt = Array.from(rest.toString()).reduce(function(a, b){
    return Number(a) + Number(b);
  });
      return restt;
  }
}

module.exports = {
  getSumOfDigits
};
