const input = [2, 1, 5, 7, 6, 4, 9, 3, 8]

console.log(selectionSort(input))

function selectionSort(input, sortedItemsNb = 0) {
  let temp = input[sortedItemsNb]
  let smallestItemPos

  for (let i = sortedItemsNb; i < input.length; i++) {
    if (input[i] <= temp) {
      smallestItemPos = i
      temp = input[smallestItemPos]
    }
  }

  if (smallestItemPos !== sortedItemsNb) {
    input[smallestItemPos] = input[sortedItemsNb]
    input[sortedItemsNb] = temp
  }

  sortedItemsNb += 1

  return sortedItemsNb === input.length ? input : selectionSort(input, sortedItemsNb)
}
