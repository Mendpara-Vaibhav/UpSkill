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

function pyramidInverted(n) {
  for (let i = n; i >= 1; i--) {
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
pyramidInverted(5);

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

// Flatten a Nested Array
const arr = [1, [2, [3, [4]]], 5];
// Output: [1, 2, 3, 4, 5]

function flattenedArray(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenedArray(val) : val);
  }, []);
}
console.log(flattenedArray(arr));

// function flattenArray(arr) {
//   const flattened = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flattened.push(...flattenArray(arr[i]));
//     } else {
//       flattened.push(arr[i]);
//     }
//   }
//   return flattened;
// }
// console.log(flattenArray(arr));

// Find All Pairs in an Array that Sum to a Target Value
const a = [1, 2, 3, 4, 5];
const target = 5;

function findAllPairs(arr, target) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}
console.log(findAllPairs(a, target));

/**
 * AAAAAA
 * BBBBB
 * CCCC
 * DDD
 * EE
 * F
 */
function invertedAlphabetPattern(n) {
  let charCode = 65;
  for (let i = n; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += String.fromCharCode(charCode);
    }
    console.log(pattern);
    charCode++;
  }
}
invertedAlphabetPattern(6);

/**
 * 12345
 * 6789
 * 101112
 * 1314
 * 15
 */
function invertedNumberLeftTriangle(n) {
  let num = 1;
  for (let i = n; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += num + " ";
      num++;
    }
    console.log(pattern);
  }
}
invertedNumberLeftTriangle(5);

/**
 * 1
 * 123
 * 12345
 * 1234567
 * 123456789
 * 1234567
 * 12345
 * 123
 * 1
 */
function numberDiamond(n) {
  // Top half including middle row
  for (let i = 1; i <= n; i++) {
    let pattern = "";

    // Spaces
    // for (let j = 1; j <= n - i; j++) {
    //   pattern += " ";
    // }

    // Numbers
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += k;
    }

    console.log(pattern);
  }

  // Bottom half
  for (let i = n - 1; i >= 1; i--) {
    let pattern = "";

    // Spaces
    // for (let j = 1; j <= n - i; j++) {
    //   pattern += " ";
    // }

    // Numbers
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += k;
    }

    console.log(pattern);
  }
}

numberDiamond(5);
