
const fetchAndDisplayPosts = async () => {
    const postsContainer = document.getElementById('posts-container');
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('فشل ت');
      }
  
      const posts = await response.json();
  
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
  
        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;
  
        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;
  
        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
  
        postsContainer.appendChild(postElement);
      });
  
    } catch (error) {
      console.error('خطأ في جلب المنشورات:', error.message);
    }
  };
  
  fetchAndDisplayPosts();
  