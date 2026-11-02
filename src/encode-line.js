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
  return str.replace(/([\s\S])\1+/g, (run, char) => `${run.length}${char}`);
}

module.exports = {
  encodeLine
};
