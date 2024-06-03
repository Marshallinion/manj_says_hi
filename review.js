// reviews.js

document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');
    
    // Load existing reviews from localStorage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    displayReviews(reviews);

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const filmTitle = document.getElementById('filmTitle').value;
        const reviewerName = document.getElementById('reviewerName').value;
        const reviewText = document.getElementById('reviewText').value;

        const newReview = {
            filmTitle,
            reviewerName,
            reviewText,
            date: new Date().toLocaleString()
        };

        reviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        displayReviews(reviews);

        reviewForm.reset();
    });

    function displayReviews(reviews) {
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <h4>${review.filmTitle} (Reviewed by ${review.reviewerName} on ${review.date})</h4>
                <p>${review.reviewText}</p>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }
});
