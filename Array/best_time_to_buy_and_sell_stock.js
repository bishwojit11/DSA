/**
 * 121. Best Time to Buy and Sell Stock
 * you are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

// Bruteforce approach

var maxProfit = function (arr) {                   
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let profit = arr[j] - arr[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

// let prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices)); // Output: 5


// optimal approach 

var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};

// best optimal 

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = +Infinity;
    let maxProfit = 0;

    for(let i=0; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }else{
            let diff = prices[i] - min;
            maxProfit = Math.max(diff,maxProfit);
        }
    }
    return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5



