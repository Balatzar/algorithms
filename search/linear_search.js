module.exports = function linearSearch(pool, search) {
  for (let i = 0; i < pool.length; i += 1) {
    if (pool[i] === search) return true
  }
  return false
}
