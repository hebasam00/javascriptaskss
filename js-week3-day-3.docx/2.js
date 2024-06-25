// script.js

const fetchAndDisplayComments = async (postId) => {
    const commentsContainer = document.getElementById('comments-container');
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
  
      const comments = await response.json();
  
      comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
  
        const nameElement = document.createElement('h4');
        nameElement.textContent = comment.name;
  
        const emailElement = document.createElement('p');
        emailElement.textContent = comment.email;
  
        const bodyElement = document.createElement('p');
        bodyElement.textContent = comment.body;
  
        commentElement.appendChild(nameElement);
        commentElement.appendChild(emailElement);
        commentElement.appendChild(bodyElement);
  
        commentsContainer.appendChild(commentElement);
      });
  
    } catch (error) {
      console.error('Error fetching comments:', error.message);
    }
  };
  
  fetchAndDisplayComments(1);
  