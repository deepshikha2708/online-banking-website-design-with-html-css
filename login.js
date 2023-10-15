document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form elements
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Regular expression for a valid email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Regular expression for a valid password format (at least 6 characters)
    const passwordRegex = /^.{6,}$/;

    // Add an event listener to the form for when it's submitted
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        // Check if the entered email and password match their respective regular expressions
        if (emailRegex.test(enteredUsername) && passwordRegex.test(enteredPassword)) {
            // Valid email and password format, redirect to the "about.html" page
            window.location.href = 'about.html';
        } else {
            alert('Invalid email or password format. Please check your input.');
            // You can provide more detailed error messages if needed.
        }
    });
});
