/**
 *  In bubble sort we take an element and compare it to its next element , if the 1st element
    is greater we swap the position else if 1st element is smaller we leave it as it is and compare the
    next element to its next element. Like this after 1st iteration we get the greated element in the
    array placed at the end of the array.
 */
function bubbleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// function bubbleSort(arr) {
//   let length = arr.length;
//   for (let i = length; i > 0; i--) {
//     //if length is 7|| If now I is 3
//     for (let j = 0; j < i - 1; j++) {
//       // we compare 7-1 = 6 times|| we compare 3-1 = 2 times
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

let arr = [8, 3, 7, 5, 1, 4, 6];
console.log(bubbleSort(arr));
