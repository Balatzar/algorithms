module.exports = (res) => {
  const sortAndMergeArrays = (arr1, arr2) => {
    const arr = []

    while (arr1.length || arr2.length) {
      if (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
          arr.push(arr1.shift())
        } else {
          arr.push(arr2.shift())
        }
      } else if (arr1.length) {
        arr.push(arr1.shift())
      } else {
        arr.push(arr2.shift())
      }
    }

    return arr
  }

  const mergeSort = (input) => {
    if (input.length > 1) {
      const half = Math.ceil((input.length - 1) / 2)
      return sortAndMergeArrays(
        mergeSort(input.slice(0, half)),
        mergeSort(input.slice(half, input.length)))
    }
    return input
  }

  return mergeSort([...res])
}
