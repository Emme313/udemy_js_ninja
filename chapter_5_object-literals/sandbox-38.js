// object literals

let user = {
    name: 'Melaina',
    age: 35,
    email: 'mnv313@gmail.com',
    location: 'Washington State',
    blogs: ['Trying to Fight a Boner', 'Expressions']
};

// console.log(user);
console.log(user.blogs[1]);

user.age = 36
// dot notation
console.log(user.age);
// square bracket notation
console.log(user['name']);
user['name'] = 'Simone'
console.log(user['name']);

console.log(typeof user);
