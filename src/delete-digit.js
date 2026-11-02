/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(Math.abs(n));
  const candidates = [...digits].map((_, i) => Number(digits.slice(0, i) + digits.slice(i + 1)));

  // `|| 0` normalizes -0 to 0
  return (n < 0 ? -Math.min(...candidates) : Math.max(...candidates)) || 0;
}

module.exports = {
  deleteDigit
};
