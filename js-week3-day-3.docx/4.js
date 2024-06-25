// script.js

const fetchAndDisplayPhotos = async (albumId) => {
    const photosContainer = document.getElementById('photos-container');
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch photos');
      }
  
      const photos = await response.json();
  
      photos.forEach(photo => {
        const photoElement = document.createElement('div');
        photoElement.classList.add('photo');
  
        const titleElement = document.createElement('h3');
        titleElement.textContent = photo.title;
  
        const imageElement = document.createElement('img');
        imageElement.src = photo.thumbnailUrl;
        imageElement.alt = photo.title;
  
        photoElement.appendChild(titleElement);
        photoElement.appendChild(imageElement);
  
        photosContainer.appendChild(photoElement);
      });
  
    } catch (error) {
      console.error('Error fetching photos:', error.message);
    }
  };
  
  fetchAndDisplayPhotos(1);
  