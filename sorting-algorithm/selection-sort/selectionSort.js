/**
 * Similar to bubble sort but instead of arranging greatest value at the end , we take the smallest
 * value in the array and put it at the beginning.
 * So we take a var called min and start with variable I and J at 0 , compare j min value, if value at
 * J index is smaller, it is assigned to min variable.
 * This continues till one iteration is done and we get the smallest value stored
 * in min variable. Then we swap it with I.
 *
 * T.C same as Bubble sort O(n^2)
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimumValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumValue]) {
        minimumValue = j;
      }
    }
    [arr[i], arr[minimumValue]] = [arr[minimumValue], arr[i]];
  }
  return arr;
}
console.log(selectionSort([34, 22, 10, 19, 17, 25, 10]));
