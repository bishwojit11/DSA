// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function pattern1(n) {
  for (i = 0; i < n; i++) {
    let start = "";
    for (j = 0; j < n; j++) {
      start += "* ";
    }
    console.log(start);
  }
}

// *
// * *
// * * *
// * * * *
// * * * * *

function pattern2(n) {
  for (i = 0; i < n; i++) {
    let start = "";
    for (j = 0; j <= i; j++) {
      start += "* ";
    }
    console.log(start);
  }
}

// 1
// 12
// 123
// 1234

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

// 1
// 22
// 333
// 4444
// 55555

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}

// *****
// ****
// ***
// **
// *
function pattern5(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// 12345
// 1234
// 123
// 12
// 1

function pattern6(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += j;
    }
    console.log(row);
  }
}

//     *
//    ***
//   *****
//  *******
// *********

function pattern7(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Add the spaces first
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Add the stars (with a space between each star)
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row); // Print the row
  }
}

pattern7(5);
