const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList')
const emptyList = document.querySelector('#emptyList')

let addTask = (event) => {
    event.preventDefault();

    const taskText = taskInput.value;
    const taskHTML = `<li class="liclass"><div class="taskCollection">${taskText}</div><button type="button" data-action="done" class="btn_add">✔</button><button type="button" data-action="delete" class="btn_delete">X</button></li>`
    
    tasksList.insertAdjacentHTML('afterbegin', taskHTML);

    taskInput.value = '';
    taskInput.focus();

    if (tasksList.children.length > 1) {
        emptyList.classList.add('none')
    }
}

let deleteTask = (event) => {
    if (event.target.dataset.action !== 'delete') return;

    const parenNode = event.target.closest('.liclass');
    parenNode.remove();

    if (tasksList.children.length === 1) {
        emptyList.classList.remove('none');
    }
}

let doneTask = (event) => {
    if (event.target.dataset.action !== 'done') return

    const parenNode = event.target.closest('.liclass');
    const taskTitle = parenNode.querySelector('.taskCollection')
    taskTitle.classList.toggle('task_done')
}

form.addEventListener('submit', addTask);

tasksList.addEventListener('click', deleteTask)

tasksList.addEventListener('click', doneTask)

