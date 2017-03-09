const input = [1, 5, 7, 6, 4, 2, 9, 3, 8]

console.log(bubleSort(input))

function bubleSort(input) {
  let sorted = true
  let temp

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
      if (sorted) sorted = false
      temp = input[i]
      input[i] = input[i + 1]
      input[i + 1] = temp
    }
  }

  return sorted ? input : bubleSort(input)
}

`
Possible improvements :
_ Detect when an item is sorted and make the loop stop before it in the next iterations
`
