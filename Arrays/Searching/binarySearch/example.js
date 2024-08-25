/** 
**** Example 1 *******
Given a sorted array, find the index number of two elements whose value on addition gives what is asked for. For exapmle 
for array [20,40,60,80,90,120,240], find the two elemnts whose sum give 210. 
 
*/

function findSum(arr, val) {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === val) return [i, j];
    else if (arr[i] + arr[j] < val) i = i + 1;
    else if (arr[i] + arr[j] > val) j = j - 1;
  }

  return 'Not Possible. No such value is present';
}

console.log(findSum([20, 40, 60, 89, 90, 120, 240], 360));

/**
 * array with [7,1,5,3,6,4] represents trading value of an idividual share at each day. what can be the max
 * profit
 *
 */

function maxProfit(arr) {
  let minPrice = Infinity;
  let maxProf = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) minPrice = arr[i];
    else if (arr[i] - minPrice > maxProf) maxProf = arr[i] - minPrice;
  }
  return maxProf;
}

console.log(maxProfit([7, 1, 5, 3, 6, 16]));

/**
 *
 *
 *
 */

let matArr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

function search2DArray(arr, target) {
  let numberOfRows = arr.length;

  if (numberOfRows == 0) return false;

  let numberOfColums = arr[0].length;

  let left = 0,
    right = numberOfRows * numberOfColums - 1;
  console.log(left, right);
}
