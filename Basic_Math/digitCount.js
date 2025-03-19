/** Given a positive integer n, count the number of digits in n that divide n evenly (i.e., without leaving a remainder).
 * Return the total number of such digits.
 * A digit d of n divides n evenly if the remainder when n is divided by d is 0 (n % d == 0).
 * Digits of n should be checked individually. If a digit is 0, it should be ignored because division by 0 is undefined.
 */

class Solution {
  // Function to check whether the number evenly divides n.
  evenlyDivides(n) {
    // code here
    let count = 0;
    const originalNumber = n;
    while (n > 0) {
      let lastDigit = n % 10;
      if (originalNumber % lastDigit === 0) {
        count++;
      }
      n = Math.floor(n / 10);
    }

    return count;
  }
}

console.log(countDigit(7789));

/**
 *
 * Given a number n. Find the sum of all the digits of n.
 * Examples:
 * Input: n = 12
 * Output: 3
 * Explanation: Sum of 12's digits: 1 + 2 = 3
 * Input: n = 23
 * Output 5
 * Explanation: Sum of 23's digits: 2 + 3 = 5
 *
 */

class Solution {
  sumOfDigits(n) {
    // code here
    let sum = 0;
    while (n > 0) {
      let lastDigit = n % 10;
      sum = sum + lastDigit;
      n = Math.floor(n / 10);
    }
    return sum;
  }
}
