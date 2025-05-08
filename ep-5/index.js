// Array (map, filter, reduce)

// const arr = [10, 20, 30, 40, 50];
// console.log(arr);
// arr.push("orange");
// console.log(arr);
// arr.unshift("start");
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

//map method

// const newArr = arr.map((element) => {
//   return element * 2;
// });
// console.log(newArr);

const product = [
  {
    price: 1200,
    name: "Iphone",
  },
  {
    price: 1400,
    name: "Apple",
  },
  {
    price: 100,
    name: "Mango",
  },
];
// product.map((element) => {
//   console.log(element);
//   console.log(element.name, element.price);
// });

// filter method
const arr = [10, 20, 30, 40, 50];
const res = arr.filter((element) => {
  return element >= 30;
});
console.log(res);

// reduce method
// normally
function sumOfElement(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumOfElement(arr));

// with use of reduce method
const ans = arr.reduce((accumulator, element) => {
  return accumulator + element;
}, 0);
console.log(ans);
