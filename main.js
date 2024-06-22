let input = document.getElementById('input');
let add = document.getElementById('add');
let divTasks = document.querySelector('.tasks');
let deleteAllBtn = document.getElementById('deleteAll');
let myTask;
let total = document.getElementById('total');

if (localStorage.task != null) {
    myTask = JSON.parse(localStorage.task);
} else {
    myTask = [];
}
add.onclick = function () {
    let myData = {
        task:input.value
    } 
    myTask.push(myData);
    // console.log(myTask);
    localStorage.setItem('task', JSON.stringify(myTask));
    addTask();
    input.value = '';
}
// Add Task In Body
function addTask() {
    let createTask = '';
    for (let i = 0; i < myTask.length; i++) {
        createTask += `
        <div class="task">
        <p>${myTask[i].task}</p>
        <span onclick="deleteTask()">X</span>
        </div>
        `
    }
    divTasks.innerHTML = createTask;
    total.innerHTML = `Tasks: ${myTask.length}`
    showBtn()
}
// Delete Task
function deleteTask(i) {
    myTask.splice(i, 1);
    localStorage.task = JSON.stringify(myTask);
    addTask()
}
// Delete All
deleteAllBtn.onclick = function deleteAll() {
    localStorage.clear();
    myTask.splice(0);
    addTask();
}
function showBtn() {
    if (myTask.length > 1) {
        deleteAllBtn.style.display = 'block';
    } else {
        deleteAllBtn.style.display = 'none';
    }
}
addTask()