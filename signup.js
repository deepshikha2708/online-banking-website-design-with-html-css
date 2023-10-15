document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form elements
    const signupForm = document.getElementById('signupform');

    // Add an event listener to the form for when it's submitted
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Redirect to the login page (assuming the login page is named "login.html")
        window.location.href = 'login.html';
    });
});
