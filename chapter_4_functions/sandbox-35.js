// callbacks & forEach

// const myFunc = (calllbackFunc) => {
//     let value = 50;
//     calllbackFunc(value);
// };

// myFunc(value => {
//     console.log(value);
// });

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (nonsense, index) => {
    console.log(`${index} - Hello ${nonsense}`);
    
}

people.forEach(logPerson);