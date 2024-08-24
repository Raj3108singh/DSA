function ternarySearch(arr, start, end, key) {
  let middleIndex1 = Math.floor(start + (end - start) / 3);
  let middleIndex2 = Math.floor(end - (end - start) / 3);
  console.log(middleIndex1, middleIndex2);

  if (start > end) return -1;
  else if (arr[middleIndex1] === key) return middleIndex1;
  else if (arr[middleIndex2] === key) return middleIndex2;
  else if (arr[middleIndex1] > key) return ternarySearch(arr, start, middleIndex1 - 1, key);
  else if (arr[middleIndex2] > key) return ternarySearch(arr, middleIndex1 + 1, middleIndex2 - 1, key);
  else return ternarySearch(arr, middleIndex2 + 1, end, key);

  // if (arr[middleIndex] == key) {
  //   return middleIndex;
  // } else if (arr[middleIndex] > key) return binarySearch(arr, start, middleIndex - 1, key);
  // else if (arr[middleIndex] < key) return binarySearch(arr, middleIndex + 1, end, key);
}

let arr1 = [0, 1, 2, 3, 4, 6, 100, 10000];
console.log(ternarySearch(arr1, 0, arr1.length - 1, 1010));
