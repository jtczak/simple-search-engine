const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Yes, yes, yes!', 'No way...',
    'Maybe, baby.', 'But first coffee.', 'Yes, if Britney Spears is free.', 'Winter is comming.', 'Where there is a will there is a way.', 'In wine, there is truth.', 'Seek and ye shall find.', 'Trust, but verify.'
];

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkInput, 500);
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = ''
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'You must ask a question with a questionmark "?".';
        answer.textContent = ''
    } else {
        error.textContent = 'You must ask a question.';
        answer.textContent = ''
    }

    ball.classList.remove('shake-animation');
}

const generateAnswer = () => {
    const answers = answersArr.length;

    const number = Math.floor(Math.random() * answers);
    answer.innerHTML = `<span>Answer: </span>${answersArr[number]}`
}



ball.addEventListener('click', shakeBall);