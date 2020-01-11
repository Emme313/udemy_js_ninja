const form = document.querySelector('.signup-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(form.username.value);
});

// testing RegEx

const username = 'emmmey';
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// console.log(result);

// if(result){
//     console.log('regex test passed');
// } else {
//     console.log('regex test failed');
// }

let result = username.search(pattern);
console.log(result);
