/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const sorted = [...arr1, ...arr2].sort((a, b) => a.id - b.id);
  const result = [sorted.shift()];
  let prev = result[0];
  sorted.forEach((value) => {
    if (prev.id === value.id) {
      result[result.length - 1] = { ...prev, ...value };
    } else {
      result.push(value);
    }
    prev = result[result.length - 1];
  });
  return result;
};

//Using map
var joinWithMap = function (arr1, arr2) {
  const map = new Map();
  arr1.forEach((item) => map.set(item.id, item));
  arr2.forEach((item) => map.set(item.id, { ...map.get(item.id), ...item }));
  const result = [];
  map.forEach((item) => result.push(item));
  return result.sort((a, b) => a.id - b.id);
};

// This version was optimised with ChatGPT
var joinChatGPT = function (arr1, arr2) {
  const map = new Map();
  for (const item of arr1) map.set(item.id, item);
  for (const item of arr2) {
    const existingItem = map.get(item.id);
    if (existingItem) {
      // Directly modify the item instead of using spread operator
      Object.assign(existingItem, item);
    } else {
      map.set(item.id, item);
    }
  }
  // Create an array creating an array from a map iterable
  const result = Array.from(map.values());
  return result.sort((a, b) => a.id - b.id);
};

// Test arrays
const arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
];
const arr2 = [{ id: 3, x: 5 }];
const arr3 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
const arr4 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
const arr5 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr6 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
