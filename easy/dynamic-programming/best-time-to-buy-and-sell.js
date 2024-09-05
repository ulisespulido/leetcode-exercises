/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let maxPrice = 0;
    for (let i = prices.length - 1; i > 0; i--) {
        maxPrice = Math.max(maxPrice, prices[i]);
        if (maxPrice > prices[i - 1]) {
            profit = Math.max(profit, maxPrice - prices[i - 1]);
        }
    }
    return profit;
}