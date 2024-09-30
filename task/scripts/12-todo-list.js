const todoList = [{ 
  name: 'wash dishes', 
  dueDate: '13-09-2024'
} , {
  name: 'wash clothes',
  dueDate: '13-09-2024'
}] ;

renderTodoList();

function renderTodoList(){
let todoListHTML = '';

todoList.forEach((todoObject, index) => {
  const { name, dueDate } = todoObject;
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button class="delete-todo-button js-delete-todo-button">Delete</button>
  `;
  todoListHTML += html;
})

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

document.querySelector('.js-delete-todo-button')
  .forEach((delteButton,index) => {
    delteButton.addEventListener('click', () => {
      todoList.splice(index,1);
      renderTodoList();
    })
  })
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dueDateElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateElement.value;
  
  todoList.push({
    name: name,
    dueDate: dueDate,
  });


  inputElement.value = ''; //! used to reset the value inside the textbox
  renderTodoList();
}