const input = document.getElementById('validation-input');
const expectedLength = parseInt(input.getAttribute('data-length'));

const validateInput = () => {
    const inputLength = input.value.length;
    if (inputLength >= expectedLength) {
        input.style.borderColor = '#4caf50';
    }
    else {
        input.style.borderColor = '#f44336';
    }
}
input.addEventListener('blur', validateInput);