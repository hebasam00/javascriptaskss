// script.js

const fetchAndDisplayTodos = async () => {
    const todosContainer = document.getElementById('todos-container');
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Failed to fetch to-dos');
      }
  
      const todos = await response.json();
  
      todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
  
        const titleElement = document.createElement('h4');
        titleElement.textContent = todo.title;
  
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.disabled = true; 
        if (todo.completed) {
          checkboxElement.checked = true;
        }
  
        todoElement.appendChild(checkboxElement);
        todoElement.appendChild(titleElement);
  
        todosContainer.appendChild(todoElement);
      });
  
    } catch (error) {
      console.error('Error fetching to-dos:', error.message);
    }
  };
  
  fetchAndDisplayTodos();
  