/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 *
 * Example 1:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 *
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 *
 * Example 2:
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 */

// brute force solution

function longestConsecutiveBF(arr) {
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    let nums = arr[i];
    let sequenceLen = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === nums + 1) {
        sequenceLen += 1;
        nums += 1;
        // After finding the next consecutive number, reset the inner loop to start from the beginning
        j = -1; // This will make j = 0 after j++ in the loop
      }
    }
    maxLen = Math.max(maxLen, sequenceLen);
  }
  return maxLen;
}

// optimal solution (accepted by leetcode)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let sequenceLen = 1;
  let maxLen = 1;
  if (nums.length == 0) {
    maxLen = 0;
  }
  const arr = nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1] + 1) {
      sequenceLen += 1;
    } else if ((arr[i] = arr[i - 1])) continue;
    else {
      sequenceLen = 1;
    }
    maxLen = Math.max(maxLen, sequenceLen);
  }
  return maxLen;
};

// best optimal solution using hash set

function longestConsecutive(arr) {
  const set = new Set(arr);
  let longestStreak = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      // start of a sequence
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

console.log(longestConsecutiveBF([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
