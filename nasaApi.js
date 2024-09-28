const nasaImageContainer = document.getElementById('nasa-image');

fetch('https://api.nasa.gov/planetary/apod?api_key=x9dg16zAhzYaCc4qJWg1kCxq5Djt6yDQkXdKROxW')
    .then(response => response.json())
    .then(data => {
        nasaImageContainer.innerHTML = `
            <img src="${data.url}" alt="${data.title}" class="mx-auto rounded-lg shadow-lg">
            <h3 class="mt-4 text-xl font-semibold">${data.title}</h3>
            <p class="mt-2 text-gray-600">${data.explanation}</p>
        `;
    })
    .catch(error => {
        nasaImageContainer.innerHTML = `<p class="text-red-500">Failed to load NASA image</p>`;
        console.error('Error fetching NASA image:', error);
    });
