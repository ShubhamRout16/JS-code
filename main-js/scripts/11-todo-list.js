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

for(let i = 0; i < todoList.length; i++){
  const todoObject = todoList[i];
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;
  const { name, dueDate } = todoObject;
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
  " class="delete-todo-button">Delete</button>
  `;
  todoListHTML += html;
}



document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

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