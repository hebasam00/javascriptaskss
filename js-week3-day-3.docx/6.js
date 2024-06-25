// script.js

const fetchAndDisplayUsers = async () => {
    const usersContainer = document.getElementById('users-container');
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
  
      const users = await response.json();
  
      users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('user');
  
        const nameElement = document.createElement('h3');
        nameElement.textContent = user.name;
  
        const usernameElement = document.createElement('p');
        usernameElement.textContent = `Username: ${user.username}`;
  
        const emailElement = document.createElement('p');
        emailElement.textContent = `Email: ${user.email}`;
  
        const addressElement = document.createElement('p');
        addressElement.textContent = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
  
        userElement.appendChild(nameElement);
        userElement.appendChild(usernameElement);
        userElement.appendChild(emailElement);
        userElement.appendChild(addressElement);
  
        usersContainer.appendChild(userElement);
      });
  
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };
  
  fetchAndDisplayUsers();
  