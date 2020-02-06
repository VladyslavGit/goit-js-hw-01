'use strict';
const validationInput = document.getElementById('validation-input');
validationInput.addEventListener("blur", onBlur);
validationInput.setAttribute("data-length", 6);

function onBlur(event) {
    if (validationInput.value.length === Number(validationInput.getAttribute('data-length'))) { 
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
    else{
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
};