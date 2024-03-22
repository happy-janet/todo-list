
// Retrieve tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('task-item');
        if (task.completed) {
            li.classList.add('completed');
        }
        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
            <button class="complete-button" onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
    }
}

// Function to toggle task completion
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Initial rendering
renderTasks();
