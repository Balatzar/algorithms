module.exports = (res) => {
  const insertionSort = (input) => {
    let sorted = 1
    let temp

    for (let i = sorted; i < input.length; i += 1) {
      if (input[i] < input[i - 1]) {
        temp = input[i]
        input[i] = input[i - 1]
        input[i - 1] = temp

        let j = i - 1
        while (j > 1) {
          if (input[j] < input[j - 1]) {
            temp = input[j]
            input[j] = input[j - 1]
            input[j - 1] = temp
          }
          j -= 1
        }
      }
      sorted = i
    }

    return input
  }

  return insertionSort([...res])
}
