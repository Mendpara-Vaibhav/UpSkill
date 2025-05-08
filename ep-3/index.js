// spread operator:
// use or applicable to object, array, function
// denoted by ...
// use to make duplicate

//make a duplicate array
const arr = [1, 2, 3];
const duplicateArr1 = [...arr]; //return a new array
console.log(duplicateArr1);
const duplicateArr2 = [...arr, 4, 5, 6, "hi", "hello"]; //return a new array
console.log(duplicateArr2);

//Q. Merge two array
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
//output: result = [1,2,3,4,5,6,7,8,9,10]
const result = [...num1, ...num2];
console.log(result);

//object
//Q. merge two object
const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: "Hi",
  d: "Hello",
};
// output: res = {
//   a: 1,
//   b: 2,
//   c: "Hi",
//   d: "Hello",
// };

const res = { ...obj1, ...obj2 };
console.log(res);

// function
function sum(a, b, c, d, e) {
  //parameter
  return a + b + c + d + e;
}
console.log(sum(1, 2, 3, 4, 5)); //argument

// function sum1(...numbers) {
//   console.log(numbers);
//   return a + b + c + d + e;
// }
// console.log(sum1(1, 2, 3, 4, 5));

function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6));
