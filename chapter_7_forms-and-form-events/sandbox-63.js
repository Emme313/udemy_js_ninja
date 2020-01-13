const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', event => {
    event.preventDefault();

    // validation
    const username = form.username.value;

    if (usernamePattern.test(username)){
        feedback.textContent = 'Username workey!';
    } else {
        feedback.textContent = 'Username no workey!'
    }

});

form.username.addEventListener('keyup', event => {
    console.log(event);
    console.log(event.target.value, form.username.value);
    if(usernamePattern.test(event.target.value)){
        form.username.setAttribute('class', 'success');  
    } else {
        form.username.setAttribute('class', 'error');     
    };
});

