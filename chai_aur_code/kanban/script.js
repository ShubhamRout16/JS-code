// feature 1 -> dragging task from one column to another
// feature 2 -> update the amount of task after and before drag and drop event



function drop(e){
  e.preventDefault();
  // task id got retrived and stored in taskID
  let taskId = e.dataTransfer.getData('text');
  // prevent case -> appending task inside another task
  if(e.target.id.includes('task')) return;
  console.log(taskId);
  // highilighting the dragged element
  e.target.appendChild(document.getElementById(taskId));
  updateQuantities();
}

function allowDrop(e){
  e.preventDefault();
}

function drag(e){
  // to get the id of the task element -> to determine which task is dragged and dropped
  e.dataTransfer.setData('text',e.target.id);
}

// update quantity feature
function updateQuantities(){
  const todoColumn = document.querySelector('#todo')
  const in_progressColumn = document.querySelector('#in-progress')
  const doneColumn = document.querySelector('#done')

  const todoHeader = document.querySelector('#todo-header')
  const in_progressHeader = document.querySelector('#in-progress-header')
  const doneHeader = document.querySelector('#done-header')

  // calling each header and column
  updateHeader(todoHeader,todoColumn);
  updateHeader(in_progressHeader,in_progressColumn);
  updateHeader(doneHeader,doneColumn);
}

// made a function for every header and column
function updateHeader(header,column){
  header.innerText = `${header.innerText.split(' ')[0]} (${column.children.length})`;
}

updateQuantities();