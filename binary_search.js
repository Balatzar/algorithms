const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const search = 3

console.log(binarySearch(pool, search))

function binarySearch(pool, search) {
  if (pool.length === 1 && pool[0] !== search || !pool.length) {
    return false
  }

  const half = Math.floor(pool.length / 2)
  return pool[half] === search ?
    true :
    (search < pool[half] ? binarySearch(pool.slice(0, half), search) : binarySearch(pool.slice(half + 1, pool.length), search))
}
