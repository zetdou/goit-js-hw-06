// const completeForm = document.getElementsByClassName('.login-form');
// const completeInputs = document.getElementsByTagName('input');

// const validateInputs = () => {
//     const inputRequired = completeInputs.value;
//     if (inputRequired === 0) {
//         alert("Musisz wypełnić wszystkie wymagane pola!");
//     }
//     else {
        
//     }
// }

const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {};
    for (const input of form.elements) {
        if (input.tagName === 'INPUT') {
            formData[input.name] = input.value;
        }
    }

    let allFieldsFilled = true;
    for (const input of form.elements) {
        if (input.tagName === 'INPUT' && !input.value.trim()) {
            allFieldsFilled = false;
            break;
        }
    }

    if (!allFieldsFilled) {
        alert("Musisz wypełnić wszystkie wymagane pola!");
        return;
    }

    console.log(formData);
    form.reset();
});