//  Problem - Cache with Time Limit(2622)
// Solution 1
const TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const alreadyExist = this.cache.set(key);
  if (alreadyExist) {
    clearTimeout(timeoutId);
  }
  const timeoutId = setTimeout(() => {
    this.cache.delete(key);
  }, duration);
  this.cache.set(key, { value, timeoutId });
  return Boolean(alreadyExist);
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) return this.cache.get(key).value;
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

// not kinda Solution 2, just using class
class TimeLimitedCache2 {
  cache = new Map();
  set(key, value, duration) {
    const alreadyExist = this.cache.get(key);
    if (alreadyExist) {
      clearTimeout(alreadyExist.timeoutId);
    }

    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, { value, timeoutId });
    return Boolean(alreadyExist);
  }
  get(key) {
    if (this.cache.has(key)) return this.cache.get(key).value;
    return -1;
  }
  count() {
    return this.cache.size;
  }
}
