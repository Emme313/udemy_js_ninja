// // strings
// console.log("hello, world");

// let email = "mario@thenetninca.co.uk";
// console.log(email);

// // string concatenation
// let firstName = "Melaina";
// let lastName = "Valentine";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[2]);

// // string length
// console.log(fullName.length);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf("@");
// console.log(index);

// common string methods

// let email = 'mario@thenetninja.co.uk';

// // let result = email.lastIndexOf("n");

// // slice = where you want to slice, where you want to slice to --> mario@then
// // let result = email.slice(0,10)

// // substring = where to start, how many characters you want
// // let result = email.substr(4,10);

// // replace = self-explanatory, but only replaces the 1st instance
// // let result = email.replace("m", "w");
// let result = email.replace("n", "w");


// console.log(result);

// numbers
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %

// console.log(10/2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - P E D M A S
// let result = 5 * (10-3)**2;

// console.log(result);

// let likes = 10;

// likes = likes +1 - the same as below
// likes++;
// likes--;

// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN = Not a Number

// number concatenation
// let result = "The blog has " + likes + " " + "likes.";
// console.log(result);

const title = 'Best Reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(result);

// template string/literal way
let results = `The blog called ${title} by ${author} has ${likes} likes.`
console.log(results);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes.</span
`;
console.log(html);
