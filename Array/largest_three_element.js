/**
 * Given an array with all distinct elements, find the largest three elements.
 * Input: arr[] = {10, 4, 3, 50, 23, 90}
 * Output: 90, 50, 23
 */

const arr = [10, 4, 3, 50, 23, 90, -1, -100];

function largest_three_element(arr) {
  let first = (second = third = Number.MIN_VALUE);
  for (let i in arr) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }
  return `first large number is: ${first}, second large number is: ${second}, third large number is: ${third}, `;
}

largest_three_element(arr);
console.log(largest_three_element(arr));
