const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result');
const percentage = document.querySelector('.display-4');

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    // show results on page
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
});