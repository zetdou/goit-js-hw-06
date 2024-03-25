const decrementButton = document.querySelector('[data-action="decrement"');
const incrementButton = document.querySelector('[data-action="increment"');
const spanCounterValue = document.getElementById('value');

let counterValue = 0;

const incrementValue = () => {
    counterValue++;
    spanCounterValue.textContent = counterValue;
}

const decrementValue = () => {
    counterValue--;
    spanCounterValue.textContent = counterValue;
}

incrementButton.addEventListener("click", incrementValue);
decrementButton.addEventListener("click", decrementValue);