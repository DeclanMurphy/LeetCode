const rotate = require('../Rotate-Array');

describe('Rotate Array', () => {
  test('test1', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const rotations = 3;
    const output = [5, 6, 7, 1, 2, 3, 4];
    rotate(nums, rotations);
    expect(nums).toEqual(output);
  });
  test('test2', () => {
    const nums = [-1, -100, 3, 99];
    const rotations = 2;
    const output = [3, 99, -1, -100];
    rotate(nums, rotations);
    expect(nums).toEqual(output);
  });
});
