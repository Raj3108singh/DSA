/**
 * In Binary search , we divide the array in two parts from the middle and then call the search function
 * again using recursion with these two arrays and repeat the process till we get the result.
 *
 * to Calculate the middle part we use (start + (end-start)/2).
 */

// here start is the starting index of array, end is the ending index and key is the value we are looking for.

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
