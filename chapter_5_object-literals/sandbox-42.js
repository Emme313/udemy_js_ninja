// math object

// console.log(Math) to the Chrome console to see all the math functions available.

// console.log(Math.PI);
// console.log(Math.E);

const area = 7.7;

// Math.round = round to the closest number
console.log(Math.round(area));
// Math.floor = floor it to the closest number so would always floor it to 7.
console.log(Math.floor(area));
// Math.floor = ceiling to the closest number so would always ceil to 8
console.log(Math.ceil(area));
// Math.trunc = removes decimal
console.log(Math.trunc(area));

// random numbers

// Math.random = between 0-1
const random = Math.random();
console.log(random);
// To get a random number between any range:
console.log(Math.round(random * 100));


