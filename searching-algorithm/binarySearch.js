function binarySearch(arr, start, end, key) {
  let middleIndex = Math.floor(start + (end - start) / 2);
  if (start > end) return 'Not Found';
  if (arr[middleIndex] == key) {
    return middleIndex;
  } else if (arr[middleIndex] > key) return binarySearch(arr, start, middleIndex - 1, key);
  else if (arr[middleIndex] < key) return binarySearch(arr, middleIndex + 1, end, key);
}

let arr1 = [0, 1, 2, 3, 4, 6, 100, 10000];
console.log(binarySearch(arr1, 0, arr1.length - 1, 1010));
