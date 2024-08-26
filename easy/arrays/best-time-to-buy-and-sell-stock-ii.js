
/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. 
 * However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (buy < prices[i]) {
            profit += prices[i] - buy;
        }
        buy = prices[i];
    }
    return profit;
};

// We are taking a greedy approach as each time we see profit we cash out and buy.

// O(n) time as we are looping through the array once.
// O(1) space as there are no new datastructures created.