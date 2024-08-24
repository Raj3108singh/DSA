/**
 * In bucket sort we create
 *
 * Time complexity at worst case is O(n^2), when all the elements are distributed to same bucket.
 * The average case, which is likely the case if you have an idea of input size and distribution, is O(n + k).
 * The space complexity is auxiliary — O(n+k).
 */

function insertionSort(array) {
  if (array.length === 0) {
    return array;
  }
  for (let i = 1; i < array.length; i++) {
    key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      arr[j + 1] = array[i];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr;
  }

  let i,
    minVal = arr[0],
    maxVal = arr[0],
    bucketSize = bucketSize || 5;

  //We get the maximum and minimum value elements in array to decide the range of each bucket index
  arr.forEach((el) => {
    if (el < minVal) {
      minVal = el;
    } else if (el > maxVal) {
      maxVal = el;
    }
  });

  //Find the number of buckets required to equally distribute data elemts in buckets
  let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
  //Create array of length bucketCount, which will act as bucket to store data at each element index either as
  //in array or linked list
  let allBuckets = new Array(bucketCount);

  //Initializ bucket array as array. so it will act as an array of arrays.

  for (let i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  //reset the original array so sorted values can be stored
  arr.length = 0;

  allBuckets.forEach((bucket) => {
    insertionSort(bucket);
    bucket.forEach((el) => arr.push(el));
  });

  return arr;
}
