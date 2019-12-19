// while loops

// for (let i = 0; i<5; i++){
//     console.log('in loop:', i);
// }

// rewritten as while loop
const names = ['shaun', 'mario', 'luigi']
let i = 0;
// while (i < 5){
//     console.log('in loop:', i);
//     i++;
// }

while(i < names.length) {
    console.log(names[i]);
    i++;
}