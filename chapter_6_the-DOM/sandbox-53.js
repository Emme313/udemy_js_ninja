// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked the button');  
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', event => {
        // console.log('item clicked');     
        // console.log(event);     
        // console.log(event.target);     
        // console.log(item); --> will do the same thing
        event.target.style.textDecoration = "line-through";
    });
});