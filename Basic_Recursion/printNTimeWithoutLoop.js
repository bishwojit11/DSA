class Solution {
  printNos(n) {
    if (n > 0) {
      this.printNos(n - 1);
      process.stdout.write(n + " ");
    }
  }
}

// Example usage:
// const sol = new Solution();
// sol.printNos(10);

// Print Malo n times without loop

class Solution2 {
  printNos(n) {
    if (n < 1) {
      return;
    }
    console.log("Malo");

    this.printNos(n - 1);
  }
}
const sol = new Solution2();
sol.printNos(5);
