const title = document.querySelector('h1');

// will overwrite the style
// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
// need to use camel case if your CSS attribute typically has a hyphen
title.style.fontSize = '60px';
// need to use an empty string if you want to remove a style
title.style.margin = '';