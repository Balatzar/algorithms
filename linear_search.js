const pool = [1, 5, 7, 6, 4, 2, 9, 3, 8]
const search = 3

console.log(linearSearch(pool, search))

function linearSearch(pool, search) {
  for (var i = 0; i < pool.length; i++) {
    if (pool[i] === search) return true
  }
  return false
}
