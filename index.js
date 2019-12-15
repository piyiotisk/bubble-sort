const swap = (array, firstPosition, secondPosition) => {
  const temp = array[firstPosition];
  array[firstPosition] = array[secondPosition];
  array[secondPosition] = temp;
  return array;
};

const bubbleSort = (unsortedArray) => {
  const arr = [...unsortedArray];

  const arraySize = unsortedArray.length;
  for (let i = 0; i < arraySize - 1; i++) {
    for (let j = 0; j < arraySize - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const unsortedArr = [4, 3, 1, 2, 3, 4, 5];

const result = bubbleSort(unsortedArr);
console.log(...result);
