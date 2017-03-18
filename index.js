const assert = require('assert')
const searchAlgorithms = require('./search')
const sortAlgorithms = require('./sort')

/* SEARCH */
{
  const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const search = 3
  const results = []

  for (const algo in searchAlgorithms) {
    if (searchAlgorithms.hasOwnProperty(algo)) {
      results.push(searchAlgorithms[algo](pool, search))
    }
  }

  for (let i = 0; i < results.length - 1; i += 1) {
    assert.equal(results[i], results[i + 1])
  }

  console.log('Everythings works in search!')
}

/* sort */

console.log()

{
  const input = [5, 8, 4, -6, 7, 2, 3, 1]
  const expected = [-6, 1, 2, 3, 4, 5, 7, 8]
  const results = []

  for (const algo in sortAlgorithms) {
    if (sortAlgorithms.hasOwnProperty(algo)) {
      results.push(sortAlgorithms[algo](input))
    }
  }

  for (let i = 0; i < results.length; i += 1) {
    for (let j = 0; j < results[i].length; j += 1) {
      assert.equal(results[i][j], expected[j])
    }
  }

  console.log('Everythings works in sort!')
}
