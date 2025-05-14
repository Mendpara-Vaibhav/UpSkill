const arr = [5, 1, 3, 2, 6];
// ===> Map Method <===

// Double - [10, 2, 6, 4, 12]
function double(x) {
  return x * 2;
}

// Triple - [15, 3, 9, 6, 18]
function triple(x) {
  return x * 3;
}

// Binary - ["101", "1", "11", "10", "110"]
function binary(x) {
  return x.toString(2);
}

const mapOutput = arr.map(binary);
console.log(mapOutput);

// ===> Filter Method <===

// filter odd values from arr
function isOdd(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 === 0;
}
function greaterThan4(x) {
  return x > 4;
}

const filterOutput = arr.filter(greaterThan4);
console.log(filterOutput);

// ===> Reduce Method <===
