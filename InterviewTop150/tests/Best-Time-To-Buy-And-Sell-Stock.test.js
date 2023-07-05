const maxProfit = require('../Best-Time-To-Buy-And-Sell-Stock');

describe('Best-Time-To-Buy-And-Sell-Stock', () => {
  test('test 1', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const result = 5;
    expect(maxProfit(prices)).toEqual(result);
  });
  test('test 2', () => {
    const prices = [7, 6, 4, 3, 1];
    const result = 0;
    expect(maxProfit(prices)).toEqual(result);
  });
  test('test 3', () => {
    const prices = [2, 4, 1];
    const result = 2;
    expect(maxProfit(prices)).toEqual(result);
  });
  test('test 4', () => {
    const prices = [2, 1, 2, 1, 0, 1, 2];
    const result = 2;
    expect(maxProfit(prices)).toEqual(result);
  });
  test('test 5', () => {
    const prices = [3, 2, 6, 5, 0, 3];
    const result = 4;
    expect(maxProfit(prices)).toEqual(result);
  });
});
