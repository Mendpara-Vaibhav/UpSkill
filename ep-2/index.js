// we can destructuring in object and array
const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
// destructuring array
const [a, b, c, d, e] = arr;
console.log(a);
console.log(b);
console.log(c);

// object destructuring
const person = {
  name: "Bhai",
  age: 33,
  gender: "male",
  address: "Mumbai",
};

// access value

// 1) dot notation
console.log(person.gender);
// 2) bracket notation
console.log(person["address"]);
console.log(person["age"]);
// 3) destructuring
const { gender, address, age, name } = person;
console.log(gender);
console.log(address);
console.log(age);
console.log(name);
