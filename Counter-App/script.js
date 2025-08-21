let output = document.querySelector('.counter span');
let increment = document.querySelector('.increase');
let decrement = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let input = document.querySelector('.counter input');

increment.addEventListener('click', () => {
    let step = parseInt(input.value) || 1; // Default to 1 if input is empty or invalid
    output.innerText = parseInt(output.innerText) + step;
});
decrement.addEventListener('click', () => {
    let step = parseInt(input.value) || 1;
    output.innerText = parseInt(output.innerText) - step;
});
reset.addEventListener('click', () => {
    output.innerText = 0;
    input.value = null;
});