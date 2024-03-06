// Function to add a task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  var li = document.createElement("li");
  li.textContent = taskInput.value;
  taskList.appendChild(li);

  saveTasksToLocalStorage(taskInput.value);

  taskInput.value = ""; // Clear the input field
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage(task) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasksFromLocalStorage() {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  var taskList = document.getElementById("taskList");

  tasks.forEach(function (task) {
    var li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

// Load tasks when the page is loaded
window.onload = function () {
  loadTasksFromLocalStorage();
};
