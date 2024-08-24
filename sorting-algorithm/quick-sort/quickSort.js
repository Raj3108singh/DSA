/**
 *  Bubble , selection, insertion are basic level sorting technique that works well with
 * small data set but when data is huge , their performance is not good hence we opt for
 * other sorting technique like merge, Quick or Radix
 *
 * Like merge sort works on the fact that array with 0 or 1 element is always sorted.
 * works by selecting one elemet called pivot  and finding the index where the pivot should end up
 * in the sorted array. What it means it if there are 4 elements less than the pivot elemet
 * then those 4 will end up on the left side and pivot will go to index 5.
 *
 *
 * TC - O(N logN) . In worst case that if array is already sorted TC is O(N^2)
 * SC - O(logn)
 */
// pivot should be in place, no new array should be created, while selecting pivot we should choose the
// median value.
function Pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
}

function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotindex = Pivot(arr, left, right);
    //Left
    QuickSort(arr, left, pivotindex - 1);
    //Right
    QuickSort(arr, pivotindex + 1, right);
  }
  return arr;
}

console.log(QuickSort([9, 4, 8, 2, 1, 5, 7, 6, 3]));

// function
