const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', event => {
    event.preventDefault();

    // validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/

    if (usernamePattern.test(username)){
        feedback.textContent = 'Username workey!';
    } else {
        feedback.textContent = 'Username no workey!'
    }

});