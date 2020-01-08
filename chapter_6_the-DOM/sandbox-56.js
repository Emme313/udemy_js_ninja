const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('Oy! My content is copywritten!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', event => {
    // console.log(event);
    // console.log(event.offsetX, event.offsetY);
    box.textContent = `X Position is ${event.offsetX}; Y Position is ${event.offsetY}.`
});

document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY);
});