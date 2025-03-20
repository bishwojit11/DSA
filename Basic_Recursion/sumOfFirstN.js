/**
 * Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.
 */

class Solution {
  sumOfSeries(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i ** 3;
    }
    return sum;
  }

  sumOfSeries(n) {
    if (n < 1) {
      return 0;
    }
    return n ** 3 + this.sumOfSeries(n - 1);
  }
}
