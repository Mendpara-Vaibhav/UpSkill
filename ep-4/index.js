// const a = 10;
// a = 20;
// console.log(a);

// let b = 100;
// b = 200;
// console.log(b);

// let c = 10;
// c = 20;
// console.log(c);

// function declaration
function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(10, 20);

//function expression
const sumOfTwoNumber = function sum(num1, num2) {
  console.log(num1 + num2);
};
sumOfTwoNumber(5, 3);

// callback function
// const doSomething = function (callback) {
//   console.log("something happen");
//   setTimeout(function () {
//     callback();
//   }, 1000);
// };

// const callback = function () {
//   console.log("samosa is ready");
// };
// doSomething(callback);

// higher order function
// 1) with normal function
const radius = [1, 2, 3, 4];

const area = function (r) {
  const result = [];
  for (let i = 0; i < r.length; i++) {
    const a = Math.PI * r[i] * r[i];
    result.push(a);
  }
  return result;
};
const ans = area(radius);
console.log(ans);

const circumference = function (r) {
  const result = [];
  for (let i = 0; i < r.length; i++) {
    const a = 2 * Math.PI * r[i];
    result.push(a);
  }
  return result;
};
const ans2 = circumference(radius);
console.log(ans2);

// 2) higher order function
// calcualte is higher order function
const formulaOfArea = function (r) {
  return Math.PI * r * r;
};
const formulaOfCircumference = function (r) {
  return 2 * Math.PI * r;
};
const calculate = function (r, formula) {
  const result = [];
  for (let i = 0; i < r.length; i++) {
    const a = formula(r[i]);
    result.push(a);
  }
  return result;
};
const ans3 = calculate(radius, formulaOfArea);
console.log(ans3);
const ans4 = calculate(radius, formulaOfCircumference);
console.log(ans4);

// Arrow function

const mul = (num1, num2) => {
  return num1 * num2;
};
console.log(mul(8, 8));

const mult = (num1, num2) => num1 * num2;
console.log(mult(5, 3));
