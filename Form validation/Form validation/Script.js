// script.js

// Get form elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const submitError = document.getElementById('submitError');

// Validation function
function validateForm() {
    let isValid = true;

    // Full Name validation
    if (fullName.value.length < 5) {
        nameError.innerText = "Name must be at least 5 characters long";
        fullName.classList.add('is-invalid');
        isValid = false;
    } else {
        nameError.innerText = "";
        fullName.classList.remove('is-invalid');
        fullName.classList.add('is-valid');
    }

    // Email validation
    if (!email.value.includes('@')) {
        emailError.innerText = "Please enter a valid email address";
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        emailError.innerText = "";
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value) || phone.value === "123456789") {
        phoneError.innerText = "Please enter a valid 10-digit phone number";
        phone.classList.add('is-invalid');
        isValid = false;
    } else {
        phoneError.innerText = "";
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }

    // Password validation
    if (password.value.length < 8 || password.value.toLowerCase() === "password" || password.value === fullName.value) {
        passwordError.innerText = "Password must be at least 8 characters and not 'password' or your name";
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        passwordError.innerText = "";
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }

    // Confirm Password validation
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        confirmPasswordError.innerText = "Passwords do not match";
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPasswordError.innerText = "";
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
    }

    return isValid;
}

// Submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Perform validation
    if (validateForm()) {
        submitError.innerText = "Form submitted successfully!";
        submitError.classList.remove('text-danger');
        submitError.classList.add('text-success');
    } else {
        submitError.innerText = "Please fix the errors before submitting";
        submitError.classList.add('text-danger');
    }
});
