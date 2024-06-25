// script.js

const fetchAndDisplayAlbums = async (userId) => {
    const albumsContainer = document.getElementById('albums-container');
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch albums');
      }
  
      const albums = await response.json();
  
      albums.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.classList.add('album');
  
        const titleElement = document.createElement('h3');
        titleElement.textContent = album.title;
  
        albumElement.appendChild(titleElement);
  
        albumsContainer.appendChild(albumElement);
      });
  
    } catch (error) {
      console.error('Error fetching albums:', error.message);
    }
  };
  
  fetchAndDisplayAlbums(1);
  