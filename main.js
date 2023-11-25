// Get necessary elements
const inputBox = document.getElementById('input-box');
const taskList = document.createElement('ul');
document.querySelector('main').appendChild(taskList);

// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const taskText = inputBox.value.trim();

  if (taskText !== '') {
    const newTask = {
      id: Date.now(),
      text: taskText,
    };
    tasks.push(newTask);

    renderTasks();
    inputBox.value = '';
  }
}

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="txt">${task.text}</span>
      <button class="editButton" data-id="${task.id}" onclick="editTask(event)">Edit</button>
      <button class="deleteButton" data-id="${task.id}" onclick="deleteTask(event)">Delete</button>
    `;

    taskList.appendChild(listItem);
  });
}

// Function to edit a task
function editTask(event) {
  const taskId = parseInt(event.target.dataset.id);
  const task = tasks.find((t) => t.id === taskId);

  if (task) {
    const newText = prompt('Enter new task text:', task.text);

    if (newText !== null && newText !== '') {
      task.text = newText;
      renderTasks();
    }
  }
}

// Function to delete a task
function deleteTask(event) {
  const taskId = parseInt(event.target.dataset.id);
  tasks = tasks.filter((t) => t.id !== taskId);
  renderTasks();
}
