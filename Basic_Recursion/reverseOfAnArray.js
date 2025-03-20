// basic;

/**
 *
 * up(unshift, push)  --->  add
 * sp (shift, pop)  -----> remove
 *
 */
function reverseOfArray(arr) {
  let reverseArray = new Array();
  for (let i = 0; i < arr.length; i++) {
    reverseArray.unshift(arr[i]);
  }
  return reverseArray;
}
// console.log(reverseOfArray([1, 2, 3, 4, 5]));

function reverseArrayThroughSwap(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

function reverseArrayThroughRecursion(arr) {
  function swap(start, end) {
    if (start >= end) {
      return;
    }
    [arr[start], arr[end]] = [arr[end], arr[start]];
    swap(start + 1, end - 1);
  }
  swap(0, arr.length - 1);
  return arr;
}

console.log(reverseArrayThroughRecursion([1, 2, 3, 4, 5, 6, 7, 8, 6, 5]));
