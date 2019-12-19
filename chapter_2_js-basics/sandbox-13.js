let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35]
// console.log(ages[2]);

// let random = ['shaun', 'krystle', 30, 20];
// console.log(random);


// console.log(ninjas.length);

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
let result = ninjas.push('ken'); //this is a destructive method because it alters the original array

result = ninjas.pop();

console.log(result);
console.log(ninjas);
