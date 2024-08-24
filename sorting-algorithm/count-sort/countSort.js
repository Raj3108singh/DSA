/**
 * Count sort is the fastest but very space consulming.
 * In this sorting technique , we identify the greatest element of the array and then creates a new array
 * of size equal to the greatest element identified.
 * Example if the greatest element in an array is 15, we create a new array of length 15 with initial values as 0.
 * Then we loop the array and get the elements and in the new array we go to that specific index and add 1 there.
 *[6,1,3,4,6,2] ==> [0,0,0,0,0,0,0]  => [0,1,1,1,1,0,2].
 *
 *  now loop through the new array and for every index if we get greater than 0, we add the index value to the
 * old array.
 */

function findMaxValue(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
function countSort(arr) {
  let maxValue = findMaxValue(arr); // in js we can create an array normally instead of any specific size,
  let arrayWithMaxSize = new Array(maxValue + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arrayWithMaxSize[arr[i]]++;
    // = arrayWithMaxSize[arr[i]] === 0 ? 1 : arrayWithMaxSize[arr[i]] + 1;
  }
  console.log(arrayWithMaxSize);
  let idx = 0,
    j = 0;
  while (idx <= maxValue) {
    if (arrayWithMaxSize[idx] > 0) {
      arr[j] = idx;
      arrayWithMaxSize[idx]--;
      j++;
    } else {
      idx++;
    }
  }

  console.log(arr);
  return arr;
}

4;
countSort([3, 5, 9, 7, 12, 4, 1, 1, 9, 6, 7, 2]);
