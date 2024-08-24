/**
 * In Ternary search , we divide the array in 3 parts  and then call the search function
 * again using recursion with these 3 sub arrays and repeat the process till we get the result.
 *
 * to Calculate the middle part we use
 * middle1 = startIndex + (endIndex-startIndex)/3
 * middle2 = endIndex - (endIndex - startIndex)/3
 */

// here start is the starting index of array, end is the ending index and key is the value we are looking for.

function ternarySearch(arr, startIndex, endIndex, key) {
  let middleIndex1 = Math.floor(startIndex + (endIndex - startIndex) / 3);
  let middleIndex2 = Math.floor(endIndex - (endIndex - startIndex) / 3);

  if (startIndex > endIndex) return -1;
  else if (arr[middleIndex1] === key) return middleIndex1;
  else if (arr[middleIndex2] === key) return middleIndex2;
  else if (arr[middleIndex1] > key) return ternarySearch(arr, startIndex, middleIndex1 - 1, key);
  else if (arr[middleIndex2] > key) return ternarySearch(arr, middleIndex1 + 1, middleIndex2 - 1, key);
  else return ternarySearch(arr, middleIndex2 + 1, endIndex, key);
}

let arr1 = [134, 1, 2, 3, 4, 6, 11, 100, 10000];
console.log(ternarySearch(arr1, 0, arr1.length - 1, 100));
