function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('task_list');

    if (taskInput.value.trim() === '') {
        alert('할 일 목록을 작성하세요.');
        return;
    }

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        toggleTaskStatus(this);
    });

    li.innerHTML = `<span>${taskInput.value}</span> <button onclick="removeTask(this)">X</button>`;
    li.insertBefore(checkbox, li.firstChild);
    taskList.appendChild(li);

    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentNode;
    const taskList = li.parentNode;
    taskList.removeChild(li);
}

function toggleTaskStatus(checkbox) {
    const li = checkbox.parentNode;
    const taskText = li.querySelector('span');

    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
}
