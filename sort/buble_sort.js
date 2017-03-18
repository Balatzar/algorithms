module.exports = (input) => {
  const bubleSort = (res) => {
    let sorted = true
    let temp

    for (let i = 0; i < res.length - 1; i += 1) {
      if (res[i] > res[i + 1]) {
        if (sorted) sorted = false
        temp = res[i]
        res[i] = res[i + 1]
        res[i + 1] = temp
      }
    }

    return sorted ? res : bubleSort(res)
  }

  return bubleSort([...input])
}

// Possible improvements :
// _ Detect when an item is sorted and make the loop stop before it in the next iterations

