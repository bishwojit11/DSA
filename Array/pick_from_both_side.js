/**
 * Given an integer array A of size N.
 * You have to pick exactly B elements from either left or right end of the array A to get the maximum sum.
 * Find and return this maximum possible sum.
 * NOTE: Suppose B = 4 and array A contains 10 elements then
 * You can pick the first four elements or can pick the last four elements or can pick 1 from the front and 
 * 3 from the back etc. you need to return the maximum possible sum of elements you can pick.
 */

module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    solve: function (A, B) {
        sum = 0;
        for (i = 0; i < B; i++) {
            sum += A[i]
        }

        max = sum;

        for (i = A.length - 1, j = B - 1; i > A.length - B, j >= 0; i--, j--) {
            sum = sum - A[j] + A[i];
            if (max < sum) {
                max = sum
            }
        }

        return max;

    }
};
