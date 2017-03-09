const input = [5, -1, 1, 5, 7, 6, 4, 2, 9, 3, 8]

console.log(insertionSort(input))

function insertionSort(input) {
  let sorted = 1
  let temp

  for (let i = sorted; i < input.length; i++) {
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
