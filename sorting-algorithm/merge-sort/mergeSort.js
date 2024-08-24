/**
 *  Bubble , selection, insertion are basic level sorting technique that works well with
 * small data set but when data is huge , their performance is not good hence we opt for
 * other sorting technique like merge, Quick or Radix
 *
 * Merge sort work on Divide and conquor approach and basically does spillitin, sorting and merging
 * to get the result.
 *
 * we take the array and split it in half and continue to do it unless we have single element array
 * and then merge them back.
 *
 * Big O(N LogN)  space complexity is O(N)
 * since we are splitting the array , if we had array of 8 element we had 3 split, for 32 elements we get 5
 * split. so it gives us logn. O(n) comes from the number of comparison that we do
 * so in total everytime we do n comparison
 */

//Function to implement the Merging of two individual sorted arrays

function merge(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  console.log(arr);
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let arrLeft = mergeSort(arr.slice(0, mid));
  let arrRight = mergeSort(arr.slice(mid));
  let mergeResult = merge(arrLeft, arrRight);
  console.log(mergeResult);
  return mergeResult;
}
console.log(mergeSort([2, 3, 6, 9, 23, 45, 1, 4, 2]));
