import { taskClick, newTaskButtonProcess, completeButton, editFunction } from '/js/taskFunctionButton.js';
import { dragAndDropProcess } from '/js/dragAndDrop.js'
import { menuButtonFunction } from '/js/menuButton.js'


const modal = document.getElementById('modal')
const mask = document.getElementById('mask')
const modalCancel = document.getElementById('modalCancel')
const todoListNumber = document.getElementById('todoListNumber')

const taskList = document.getElementById('taskList')

modal.classList.add('deactive')
mask.classList.add('deactive')

newTaskButtonProcess() 
dragAndDropProcess()

modalCancel.addEventListener('click', () => {
  mask.classList.add('deactive');
  modal.classList.add('deactive')
})

completeButton()
editFunction()
menuButtonFunction()


let taskSwitch = true


const data = JSON.parse(localStorage.getItem('taskData'));
const taskNumber = JSON.parse(localStorage.getItem('taskData')).length
if(taskSwitch){
  
  Array.from({ length: taskNumber }).forEach((_, i) => {
    let newTaskId = data[i].id
    const li = document.createElement('li');
    li.id = newTaskId;
    const button = document.createElement('button');
    const div = document.createElement('div');
    
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
    button.appendChild(div)
    div.appendChild(spanTerm);
    div.appendChild(spanTermEnd);
    newTaskId = null
    // todoListの個数
    const liCount = taskList.querySelectorAll('li').length || 0;
    todoListNumber.textContent = liCount;

    // 未完了、完了での変化
    if(!task.checked) {
      li.classList.add('completed')
    }
    
  });
  taskClick()
  const taskListLi = document.querySelectorAll('.taskList li')
  taskListLi.forEach(item => {
    item.draggable = true;
  })
}
