// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const challenges = document.querySelectorAll('p');
console.log(challenges);

challenges.forEach(challenge => {
    if (challenge.textContent.includes('error')){
        challenge.classList.add('error');
    }
    if (challenge.textContent.includes('success')){
        challenge.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');