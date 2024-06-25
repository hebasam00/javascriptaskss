// script.js

const fetchPosts = async () => {
    const postsContainer = document.getElementById('posts-container');
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
  
      const posts = await response.json();
  
      posts.forEach(post => {
        // Create elements for each post
        const postElement = document.createElement('div');
        postElement.classList.add('post');
  
        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;
  
        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;
  
        // Create user info
        const userInfoElement = document.createElement('p');
        userInfoElement.classList.add('user-info');
        userInfoElement.textContent = `Posted by ${post.userId} (${post.user.name}, ${post.user.email})`;
  
        // Create comments section
        const commentsElement = document.createElement('div');
        commentsElement.classList.add('comments');
  
        const commentsButton = document.createElement('button');
        commentsButton.textContent = 'Load Comments';
        commentsButton.addEventListener('click', async () => {
          await fetchAndDisplayComments(post.id, commentsElement);
        });
  
        // Append elements to post element
        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
        postElement.appendChild(userInfoElement);
        postElement.appendChild(commentsButton);
        postElement.appendChild(commentsElement);
  
        // Append post element to posts container
        postsContainer.appendChild(postElement);
      });
  
    } catch (error) {
      console.error('Error fetching posts:', error.message);
    }
  };
  
  const fetchAndDisplayComments = async (postId, commentsContainer) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
  
      const comments = await response.json();
  
      commentsContainer.innerHTML = ''; 
  
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
  
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users
  