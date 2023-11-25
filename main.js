function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
 

  

  if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
  }

  const li = document.createElement('li');
  li.innerHTML = `${taskInput.value}<button class="del-btn" onclick="deleteTask(this)">Delete</button>`;

  taskList.appendChild(li);
  taskInput.value = '';

  updateLocalStorage();
}

function deleteTask(element) {
  const confirmation = confirm('Are you sure you want to delete this task?');

  if (confirmation) {
      const taskList = document.getElementById('taskList');
      const li = element.parentNode;
      taskList.removeChild(li);

      updateLocalStorage();
  }
}

function updateLocalStorage() {
  const tasks = Array.from(document.querySelectorAll('ul#taskList li')).map(li => li.firstChild.textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', function () {
  const taskList = document.getElementById('taskList');
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  savedTasks.forEach(function (task) {
      addTaskToList(task);
  });
});

function addTaskToList(taskText) {
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `${taskText}<button class="del-btn" onclick="deleteTask(this)">Delete</button>`;

  taskList.appendChild(li);
}


document.addEventListener('DOMContentLoaded', function () {
  const clearAllBtn = document.getElementById('clearAllBtn');
  clearAllBtn.addEventListener('click', clearAllTasks);

  function clearAllTasks() {
      const confirmation = confirm('Are you sure you want to clear all tasks?');
      if (confirmation) {
          const taskList = document.getElementById('taskList');
          taskList.innerHTML = '';
          updateLocalStorage();
      }
  }
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `${taskInput.value}
    <button class="edit-btn" onclick="editTask(this)">Edit</button>
    <button class="del-btn" onclick="deleteTask(this)">Delete</button>`;

  taskList.appendChild(li);
  taskInput.value = '';

  updateLocalStorage();
}

function editTask(element) {
  const newText = prompt('Edit task:', element.parentNode.firstChild.textContent);

  if (newText !== null) {
    element.parentNode.firstChild.textContent = newText;
    updateLocalStorage();
  }
}




