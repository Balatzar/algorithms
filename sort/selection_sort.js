module.exports = (res) => {
  const selectionSort = (input, sortedItemsNb = 0) => {
    let temp = input[sortedItemsNb]
    let smallestItemPos

    for (let i = sortedItemsNb; i < input.length; i += 1) {
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

  return selectionSort([...res])
}
