/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((delayResolve) => setTimeout(delayResolve, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
