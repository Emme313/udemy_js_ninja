const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li);

})

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', event => {
//         console.log('event in LI');
//         event.stopPropagation();
//         event.target.remove();
//     });
// });

ul.addEventListener('click', event => {
    // console.log('event in UL');
    // console.log(event);
    if(event.target.tagName === 'LI'){
        event.target.remove();
    }
})