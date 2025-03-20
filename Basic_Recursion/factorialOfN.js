function FactorialOfN(n) {
  if (n < 1) {
    return 1;
  }
  return n * FactorialOfN(n - 1);
}

console.log(FactorialOfN(3));
