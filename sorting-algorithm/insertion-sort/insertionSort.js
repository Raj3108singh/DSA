/**
 * In interion sort we don't select smallest or biggest values and place them at starting or ending
 * extremes of array but we just try to place each element left or right of the sorted part.
 * For example [5,3,4,2,1] , we assume that the 1st index value 5 is sorted and then we take the value
 * 3 and compare it to , since it is smaller it goes to the left of 5. so we get [3,5,4,2,1]
 * Now we take  4 and compare it with 5 to check if it should go ledt or right of 5. So it goes left of 5
 * now we chack if it goes to left or right of 3, since it goes to right of 3 we get [3,4,5,2,1]
 * dsame process repeats
 *
 * Time Complexity is O(n^2)
 * If data is almost all sorted so we get O(N)
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([22, 34, 10, 19, 17, 25]));
