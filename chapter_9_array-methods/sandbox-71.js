// filter method
const scores = [10, 30, 15, 25, 40, 5];

// const filtered = scores.filter(score) => {
//     return score > 20;
// })

// console.log(filtered);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

// array method to only get premium users
// const premiumUsers = users.filter(user => {
//     return user.premium;
// });

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);

