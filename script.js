const APIKey = 'rcJGnaiUc6VrYDVi4aoyHLEoHPcv5Gp3dlZ1jHsP';
const form = document.querySelector('form');
const imageContainer = document.querySelector('#image-container');
const saveButton = document.querySelector('#save');
const favoritesContainer = document.querySelector('#favorites-container');
const favorites = [];

function fetchImageData(event) {
    event.preventDefault();
    const date = document.querySelector('#date').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${APIKey}&date=${date}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            imageContainer.innerHTML = `
                <img src="${data.url}" alt="${data.title}">
                <h2>${data.title}</h2>
                <p>${data.explanation}</p>
            `;
            saveButton.style.display = 'block';
        })
        .catch(error => console.error(error));
}

form.addEventListener('submit', fetchImageData);
saveButton.addEventListener('click', saveImage);
