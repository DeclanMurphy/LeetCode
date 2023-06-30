class TimeLimitedCache {
  constructor() {
    this.cache = {};
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const unexpiredKeyExists = this.get(key) !== -1;
  this.cache[key] = { value, expireTime: Date.now() + duration };
  return unexpiredKeyExists;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const item = this.cache[key];
  if (!item) {
    return -1;
  }
  const isExpired = item.expireTime < Date.now();
  return isExpired ? -1 : item.value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const now = Date.now();
  let count = 0;
  Object.keys(this.cache).forEach((key) => {
    if (this.cache[key]?.expireTime > now) {
      ++count;
    }
  });
  return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
