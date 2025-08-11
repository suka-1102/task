import { taskClick, newTaskButtonProcess, completeButton } from '/js/taskFunctionButton.js';


const modal = document.getElementById('modal')
const mask = document.getElementById('mask')
const modalCancel = document.getElementById('modalCancel')

const taskList = document.getElementById('taskList')

modal.classList.add('deactive')
mask.classList.add('deactive')

newTaskButtonProcess() 

modalCancel.addEventListener('click', () => {
  mask.classList.add('deactive');
  modal.classList.add('deactive')
})

completeButton()


let taskSwitch = true


const data = JSON.parse(localStorage.getItem('taskData'));
const taskNumber = JSON.parse(localStorage.getItem('taskData')).length
if(taskSwitch){
  
  Array.from({ length: taskNumber }).forEach((_, i) => {
    let newTaskId = data[i].id
    const li = document.createElement('li');
    li.id = newTaskId;
    const button = document.createElement('button');
    
    const task = data[i];
  
    const spanName = document.createElement('span');
    spanName.classList = 'taskName';
    spanName.textContent = task.name;
  
    const spanContent = document.createElement('span');
    spanContent.classList = 'spanContent';
    spanContent.textContent = task.content;
  
    const spanTerm = document.createElement('span');
    spanTerm.classList = 'spanTerm';
    spanTerm.textContent = task.term;

    const spanTermEnd = document.createElement('span');
    spanTermEnd.classList = 'spanTermEnd';
    spanTermEnd.textContent = task.termEnd;
    
    taskList.appendChild(li);
    li.appendChild(button);
    button.appendChild(spanName);
    button.appendChild(spanContent);
    button.appendChild(spanTerm);
    button.appendChild(spanTermEnd);
    newTaskId = null
    
  });
  taskClick()
}