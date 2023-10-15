document.addEventListener('DOMContentLoaded', function () {
    // Get references to the card elements
    const faqCard = document.getElementById('card1');
    const issueCard = document.getElementById('card2');

    // Add click event listeners to the cards
    faqCard.addEventListener('click', function () {
        window.location.href = 'faq.html'; // Redirect to the FAQ page
    });

    issueCard.addEventListener('click', function () {
        window.location.href = 'issues.html'; // Redirect to the Issue page
    });
});
