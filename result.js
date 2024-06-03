document.addEventListener("DOMContentLoaded", () => {
    const resultDiv = document.getElementById('result');
    const recommendations = JSON.parse(localStorage.getItem('movieRecommendations'));
    
    recommendations.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <h3>${movie.title}</h3>
            <img src="${movie.poster}" alt="${movie.title}" style="width: 188px; height:300px;" > <!-- Adjust width as needed -->
            <br> <!-- Add a line break here -->
            <a href="${movie.trailer}" target="_blank">Watch Trailer</a>
        `;
        resultDiv.appendChild(movieDiv);
    });
});