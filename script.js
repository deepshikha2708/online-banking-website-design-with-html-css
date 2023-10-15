document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the Login/Signup button
    const loginButton = document.getElementById('loginButton');

    // Add an event listener to the button for when it's clicked
    loginButton.addEventListener('click', function () {
        // Redirect to the login page (assuming the login page is named "login.html")
        window.location.href = 'login.html';
    });
});