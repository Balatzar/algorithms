const input = [2, 1, 5, 7, 6, 4, 9, 3, 8]

console.log(mergeSort(input))

function mergeSort(input) {
  if (input.length > 1) {
    const half = Math.ceil((input.length - 1) / 2)
    return sortAndMergeArrays(mergeSort(input.slice(0, half)), mergeSort(input.slice(half, input.length)))
  } else {
    return input
  }
}

function sortAndMergeArrays(arr1, arr2) {
  const arr = []

  while (arr1.length || arr2.length) {
    if (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        arr.push(arr1.shift())
      } else {
        arr.push(arr2.shift())
      }
    } else if(arr1.length) {
      arr.push(arr1.shift())
    } else {
      arr.push(arr2.shift())
    }
  }

  return arr
}
