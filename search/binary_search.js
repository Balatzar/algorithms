module.exports = function binarySearch(pool, search) {
  if (pool.length === 1 && (pool[0] !== search || !pool.length)) {
    return false
  }

  const half = Math.floor(pool.length / 2)

  if (pool[half] === search) {
    return true
  }

  return search < pool[half] ?
    binarySearch(pool.slice(0, half), search) :
    binarySearch(pool.slice(half + 1, pool.length), search)
}
