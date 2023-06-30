Array.prototype.last = function () {
  const lastElement = this[this.length - 1];
  return lastElement === undefined ? -1 : lastElement;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
