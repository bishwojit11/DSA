/**
 * You are given a 3-digit number n, Find whether it is an Armstrong number or not.
 * An Armstrong number of three digits is a number such that the sum of the cubes of its digits is equal to the number itself.
 *  371 is an Armstrong number since 33 + 73 + 13 = 371. 
 * 
 * Examples:
 * Input: n = 153
 * Output: true
 * 
 * Explanation: 153 is an Armstrong number since 13 + 53 + 33 = 153. 
 * Input: n = 372
 * Output: false
 * 
 * Explanation: 372 is not an Armstrong number since 33 + 73 + 23 = 378. 
 * Input: n = 100
 * Output: false
 * 
 * Explanation: 100 is not an Armstrong number since 13 + 03 + 03 = 1. 

 */

class Solution {
  armstrongNumber(n) {
    // code here
    const originalNumber = n;
    let sum = 0;
    while (n > 0) {
      let lastDigit = n % 10;
      sum = sum + lastDigit ** 3;
      n = Math.floor(n / 10);
    }
    return originalNumber === sum;
  }
}
