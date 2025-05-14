/**
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */
function numberLeftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    console.log(pattern);
  }
}
numberLeftTriangle(5);

/**
 *     *
 *    * *
 *   * * *
 *  * * * *
 * * * * * *
 */
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let k = 1; k <= n - i; k++) {
      pattern += " ";
    }
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}
pyramid(5);

// Fibonacci Series
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSeries(n) {
  const series = [];
  for (let i = 0; i < n; i++) {
    series.push(fibonacci(i));
  }
  return series;
}
console.log(fibonacciSeries(10));
