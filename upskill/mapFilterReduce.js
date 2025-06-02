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

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));

const output = arr.reduce(function (acc, curr) {
  sum = acc + curr;
  return sum;
}, 0);
console.log(output);

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

const maxArr = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(maxArr);

// practice example
const users = [
  { firstName: "akshay", lastname: "saini", age: 26 },
  { firstName: "donald", lastname: "trump", age: 75 },
  { firstName: "elon", lastname: "musk", age: 50 },
  { firstName: "deepika", lastname: "padukone", age: 26 },
];

// list of full names
// [ 'akshay saini', 'donald trump', 'elon musk', 'deepika padukone' ]
const usersFullName = users.map((user) => user.firstName + " " + user.lastname);
console.log(usersFullName);

// {26: 2, 75: 1, 50:1}
const usersAge = users.reduce((acc, user) => {
  if (acc[user.age]) {
    acc[user.age] = acc[user.age] + 1;
  } else {
    acc[user.age] = 1;
  }
  return acc;
}, {});
console.log(usersAge);

// [ 'akshay', 'deepika' ]
const userFirstName = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(userFirstName);

// [ 'akshay', 'deepika' ] get firstName of all age < 30 using reduce
const usersReduce = users.reduce((acc, user) => {
  if (user.age < 30) {
    acc.push(user.firstName);
  }
  return acc;
}, []);
console.log(usersReduce);
