let draggedCard = null;
let rightClickedCard = null;

document.addEventListener('DOMContentLoaded', () => {
  loadTaskFromLocaleStorage();
  enterKeyListener();
});

// feature 7 -> enter keydown -> for adding task
function enterKeyListener(){
  const columns = ['todo','in-progress','done']

  columns.forEach(columnId => {
    const input = document.getElementById(`${columnId}-input`);

    input.addEventListener('keydown', (e) => {
      if(e.key == 'Enter'){
        addTask(columnId);
      }
    })
  })
}


// feature 1 -> taking input from the user and adding it to the task
function addTask(columnId){
  const input = document.getElementById(`${columnId}-input`)
  const taskText = input.value
  // feature 4 -> time of creation of element
  const taskDate = new Date().toLocaleString();
  const taskElement = createElement(taskText,taskDate);
  document.getElementById(`${columnId}-tasks`).appendChild(taskElement)
  saveTaskToLocaleStorage();
  input.value = '';
  updateTaskCount(columnId);
}

function createElement(taskText,taskDate){
  const taskElement = document.createElement('div')
  taskElement.innerHTML = `<span>${taskText}</span><br><small id="time">${taskDate}</small>`;
  taskElement.draggable = true
  taskElement.classList.add('card');
  taskElement.addEventListener('dragstart',dragStart)
  taskElement.addEventListener('dragend',dragEnd)
  taskElement.addEventListener('contextmenu',function(e){ // right click event listener
    e.preventDefault();
    rightClickedCard = this; 
    showContextMenu(e.pageX,e.pageY) // cursor ka coordinates leta ha yeh
  })
  return taskElement;
}


// feature 2 -> drag and drop functionality

function dragStart(){
  this.classList.add('dragging');
  draggedCard = this;
}

function dragEnd(){
  this.classList.remove('dragging')
  draggedCard = null;
  ["todo","in-progress","done"].forEach((columnId) => {
    updateTaskCount(columnId);
    updateTaskToLocaleStorage()
  })
}

const columns = document.querySelectorAll('.column .tasks')
columns.forEach((column) => {
  column.addEventListener('dragover',dragOver);
});

function dragOver(e){
  e.preventDefault(); //html normally doesnt allow drag and drop to prevent this -> to allow drop

  // feature 7 -> drag sorting

  const afterElement = getDraggedAfterElement(this,event.pageY); //no sorting is being done in X coordinate
  if(afterElement === null){
    this.appendChild(draggedCard);
  }
  else{
    this.insertBefore(draggedCard,afterElement); // insertBefore is a method inserts a new node before the reference node
    // insertBefore(newNode , referenceNode) <- syntax
  }
}

function getDraggedAfterElement(container,y){
  const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')]
   //converting nodelist into array -> by spreading
  const result = draggableElements.reduce((afterElement,currentElement) => {
    const box = currentElement.getBoundingClientRect();

    const offset = y - box.top - box.height / 2 ;

    console.log(offset);

    if(offset < 0 && offset > afterElement.offset){
      return  {offset: offset , element: currentElement};
    }else{
      return afterElement;
    }
  } , {
    offset: Number.NEGATIVE_INFINITY,
  })
  return result.element;
}

// feature 3 -> edit/delete on right click mouse -> popup edit and delete option

const contextMenu = document.getElementsByClassName('context-menu')[0] //return html collections
function showContextMenu(x,y){
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.display = 'block';
}

// bug -> ek baar right click krne ke baad dubara kahi v click nhi ho parha ha
document.addEventListener('click',function(){
  contextMenu.style.display = 'none';
})

function editTask(){
  // bug -> while editing text timestamp also comes with the text
  const currentTaskText = rightClickedCard.querySelector('span').textContent;
  const newTaskText = prompt('Edit :- ',currentTaskText)

  if(newTaskText !== null & newTaskText !== ''){
    rightClickedCard.querySelector('span').textContent = newTaskText.trim();
    updateTaskToLocaleStorage()
  }
}

function deleteTask(){
  const columnId = rightClickedCard.parentElement.id.replace('-tasks',''); 
  updateTaskToLocaleStorage()
  rightClickedCard.remove();
  updateTaskCount(columnId);
}


// feature 5 -> showing the count of number of tasks
// updateTaskCount is called three times -> adding task , deleting task , dragginf element
function updateTaskCount(columnId){
  let count = document.querySelectorAll(`#${columnId}-tasks .card`).length;
  console.log(count);
  document.getElementById(`${columnId}-count`).textContent = count; 
}

// feature 6 -> saving in localStorage
function saveTaskToLocaleStorage(columnId,taskText,taskDate){
  const tasks = JSON.parse(localStorage.getItem(columnId)) || []
  tasks.push({text: taskText,date: taskDate});
  localStorage.setItem(columnId,JSON.stringify(tasks))
}
function loadTaskFromLocaleStorage(){
  ["todo","in-progress","done"].forEach((columnId) => {
    const tasks = JSON.parse(localStorage.getItem(columnId)) || []
    tasks.forEach((task) => {
      const taskElement = createElement(task.text,task.date);
      document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
      updateTaskCount(columnId)
    })
  })
}
function updateTaskToLocaleStorage(){
  ['todo','in-progress','done'].forEach((columnId) => {
    const tasks = [];
    document.querySelectorAll(`#${columnId}-tasks .card`).forEach((card) => {
      const taskText = card.querySelector('span').textContent
      const taskDate = card.querySelector('small').textContent
      tasks.push({text: taskText , date: taskDate})
    })
    localStorage.setItem(columnId,JSON.stringify(tasks))
  })
}


