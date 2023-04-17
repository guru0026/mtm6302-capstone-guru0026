const apiKey = 'rcJGnaiUc6VrYDVi4aoyHLEoHPcv5Gp3dlZ1jHsP';
const form = document.querySelector('form');
const imageContainer = document.querySelector('#image-container');
const heartButton = document.querySelector('#heart');
const heartsContainer = document.querySelector('#hearts-container');
const randomsContainer = document.querySelector('#randoms-container');
const hearts = [];


function fetchImageData(event) {
    event.preventDefault();
    const date = document.querySelector('#date').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const hdUrl = data.hdurl;
        imageContainer.innerHTML = `
          <a href="${hdUrl}" target="_blank">
            <img src="${data.url}" alt="${data.title}">
          </a>
          <div class="card-body">
            <h3>${data.title}</h3>
            <p>${data.explanation}</p>
          </div>
        `;
        heartButton.style.display = 'block';
      })
      .catch(error => console.error(error));
}




function saveImage() {
  const image = imageContainer.innerHTML;
  hearts.push(image);
  localStorage.setItem('hearts', JSON.stringify(hearts));
  displayHearts();
}


function removeHeart(event) {
  const item = event.target.parentNode;
  const index = Array.from(item.parentNode.children).indexOf(item);
  hearts.splice(index, 1);
  localStorage.setItem('hearts', JSON.stringify(hearts));
  displayHearts();
}

function displayHearts() {
    heartsContainer.innerHTML = '<h1>Favourites</h1>';
    const heartsRow = document.createElement('div');
    heartsRow.classList.add('hearts-row');
    hearts.forEach(heart => {

      const parser = new DOMParser();
      const doc = parser.parseFromString(heart, 'text/html');
      const image = doc.querySelector('img');
  
      const heartItem = document.createElement('a');
      heartItem.classList.add('card');
      heartItem.classList.add('col-lg-2');
      heartItem.classList.add('col-md-3');
      heartItem.classList.add('col-sm-6');
      heartItem.classList.add('col-12');
      heartItem.classList.add('card');
      heartItem.setAttribute("href","#")

      heartItem.setAttribute("href","#")
      heartItem.innerHTML = `
          <button class="delete-button"><i class="fa-solid fa-trash-can"></i></button>
      `;
      heartItem.appendChild(image);
  
      const deleteButton = heartItem.querySelector('.delete-button');
      deleteButton.addEventListener('click', removeHeart);
  
      heartsRow.appendChild(heartItem);
    });
    heartsContainer.appendChild(heartsRow);
    heartsContainer.style.display = 'block';
  }

function fetchRandomImages() {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=16`;
  fetch(url)
    .then(response => response.json())
    .then(data => {

      data.forEach(item => {
        const randomItem = document.createElement('a');
        randomItem.classList.add('col-lg-2');
        randomItem.classList.add('col-md-3');
        randomItem.classList.add('col-sm-6');
        randomItem.classList.add('col-12');
        randomItem.classList.add('card');
        randomItem.setAttribute("href","#")
        randomItem.innerHTML = `
                        <img src="${item.url}" alt="${item.title}" class="">
        `;
        randomsContainer.appendChild(randomItem);
      });

    })
    .catch(error => console.error(error));
}

fetchRandomImages();

form.addEventListener('submit', fetchImageData);
heartButton.addEventListener('click', saveImage);


const savedHearts = localStorage.getItem('hearts');
if (savedHearts) {
  hearts.push(...JSON.parse(savedHearts));
  displayHearts();
}
