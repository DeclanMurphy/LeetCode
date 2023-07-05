/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let currentMin = prices[0];
  let currentProfit = 0;

  for (var i = 0; i < prices.length; i++) {
    currentMin = Math.min(prices[i], currentMin);
    currentProfit = Math.max(currentProfit, prices[i] - currentMin);
  }
  return currentProfit;
};
console.log(maxProfit([3, 2, 6, 5, 0, 3]));

var maxProfitMyAttempt = function (prices) {
  let min = null,
    max = null,
    profit = 0;
  for (var i = 0; i < prices.length; i++) {
    let dailyPrice = prices[i];
    if (!Number.isInteger(min) || dailyPrice < min) {
      min = dailyPrice;
      max = null;
    } else if (max === null || dailyPrice > max) {
      max = dailyPrice;
    }
    if (Number.isInteger(min) && Number.isInteger(max) && profit < max - min) {
      profit = max - min;
    }
    console.log({ min, max, profit });
  }

  return profit > 0 ? profit : 0;
};

module.exports = maxProfit;
