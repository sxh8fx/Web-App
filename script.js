const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!nameRegex.test(name)) {
        document.getElementById('name-error').textContent = 'Name should only contain alphabets and spaces.';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }

    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Email is not in the correct format.';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('password-error').textContent = 'Password should have a minimum length of 8, include a combination of letters, numbers, and special characters.';
        isValid = false;
    } else {
        document.getElementById('password-error').textContent = '';
    }

    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        document.getElementById('confirm-password-error').textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}