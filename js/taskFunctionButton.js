import { taskAdd } from './taskAction.js'


let taskListLi = document.querySelectorAll('.taskList li');
let index = Array.from(taskListLi).findIndex(li => li.id === liId)
let isDelete = false
let taskElement
let isTaskCheck = false;


const deleteTask = document.getElementById('deleteTask')
const editTask = document.getElementById('editTask')
const newTaskName = document.getElementById('newTaskName')
const newTaskContent = document.getElementById('newTaskContent')
const newTaskTerm = document.getElementById('newTaskTerm')
const newTaskNameInput = document.getElementById('newTaskNameInput')
const newTaskContentInput = document.getElementById('newTaskContentInput')
const newTaskTermInput = document.getElementById('newTaskTermInput')
const newTaskTermInputEnd = document.getElementById('newTaskTermInputEnd')
const inputComplete = document.getElementById('inputComplete')
const inputEditComplete = document.getElementById('inputEditComplete')
const newTaskButton = document.getElementById('newTaskButton')
const taskCheck = document.getElementById('taskCheck')
const taskCheckIcon = document.getElementById('taskCheckIcon')
const taskCheckTitle = document.getElementById('taskCheckTitle')
const ganttChartTasksList = document.getElementById('ganttChartTasksList')

const notComplete = document.querySelector('.notComplete')
const complete = document.querySelector('.complete')

const taskData = JSON.parse(localStorage.getItem('taskData'));
let li;
//　タスクをクリックした時の関数
export function taskClick() {
  taskListLi = document.querySelectorAll('.taskList li');
  document.querySelectorAll('.taskList > li > button').forEach(button => {
    button.addEventListener('click', function ()  {
      mask.classList.remove('deactive');
      modal.classList.remove('deactive');
      taskCheck.classList.remove('deactive')
      deleteTask.classList.remove('deactive');
      editTask.classList.remove('deactive');
      newTaskName.classList.add('deactive');
      newTaskContent.classList.add('deactive');
      newTaskTerm.classList.add('deactive');
      inputComplete.classList.add('deactive');
      inputEditComplete.classList.add('deactive');
      const liId = this.parentElement.id;
      li = this.parentElement;

      index = Array.from(taskListLi).findIndex(li => li.id === liId)
      taskElement = document.getElementById(liId);
      deleteButton()

      // checkboxの処理
    if(taskData[index].checked) {
      taskCheckTitle.textContent = '未完了'
      taskCheck.classList.add('notComplete')
      taskCheck.classList.remove('complete')
    } else {
      taskCheckTitle.textContent = '完了'
      taskCheck.classList.remove('notComplete')
      taskCheck.classList.add('complete')
    }
    
    if(!isTaskCheck) {
      taskCheck.addEventListener('click', (e) => {
        let target = e.currentTarget;
        
        if(target.classList.contains('complete')) {
          taskCheck.classList.add('notComplete')
          taskCheck.classList.remove('complete')
          taskCheckTitle.textContent = '未完了'
          taskData[index].checked = true;

          li.classList.remove('completed')
          localStorage.setItem(`taskData`,  JSON.stringify(taskData))

          return
        }
        
        if(target.classList.contains('notComplete')) {
          taskCheck.classList.add('complete')
          taskCheck.classList.remove('notComplete')
          taskData[index].checked = false;
          taskCheckTitle.textContent = '完了'
          li.classList.add('completed')
          localStorage.setItem(`taskData`,  JSON.stringify(taskData))
        }
      })
      isTaskCheck = true;
    }
  
    
    });
  })
}



// 削除ボタンを押した時の処理をする関数
export function deleteButton() {
  if(isDelete) return;
  deleteTask.addEventListener('click', () => {
    const taskList = document.getElementById('taskList')

    taskData.splice(index,1)
    let ganttdeleteLi = document.querySelector(`.ganttChartTasksList li:nth-of-type(${index + 1})`)
    localStorage.setItem('taskData', JSON.stringify(taskData));
    // 消した後の表示変更

    taskList.removeChild(taskElement)
    ganttChartTasksList.removeChild(ganttdeleteLi)
    modal.classList.add('deactive')
    mask.classList.add('deactive')
    const liCount = taskList.querySelectorAll('li').length || 0;
    todoListNumber.textContent = liCount;
  })
  isDelete = true;
}

// 新規タスクボタンを押した時の処理
export function newTaskButtonProcess() {
  newTaskButton.addEventListener('click', () =>{
    newTaskName.classList.remove('deactive')
    newTaskContent.classList.remove('deactive')
    newTaskTerm.classList.remove('deactive')
    inputComplete.classList.remove('deactive')
    inputEditComplete.classList.add('deactive')
    mask.classList.remove('deactive');
    modal.classList.remove('deactive')
    deleteTask.classList.add('deactive')
    editTask.classList.add('deactive')
    taskCheck.classList.add('deactive')
    
  })
}
// 完了ボタンを押したとき
export function completeButton() {
  inputComplete.addEventListener('click', () => {
    const taskData = JSON.parse(localStorage.getItem('taskData')) || [];
    const newTasknameInputValue = newTaskNameInput.value
    const newTaskContentInputValue = newTaskContentInput.value
    const newTaskTermInputValue = newTaskTermInput.value
    const newTaskTermInputValueEnd = newTaskTermInputEnd.value
    const newTaskId = `${new Date().getTime()}`
  
    taskData.push({ name:newTasknameInputValue,
                    content: newTaskContentInputValue,
                    term: newTaskTermInputValue,
                    termEnd: newTaskTermInputValueEnd,
                    id: newTaskId,
                    checked: true
                  })
    localStorage.setItem(`taskData`,  JSON.stringify(taskData))
    taskAdd()
    
    newTaskNameInput.value = null;
    newTaskContentInput.value = null;
    newTaskTermInput.value = null;
    newTaskTermInputEnd.value = null;
    
    mask.classList.add('deactive');
    modal.classList.add('deactive');
    taskClick()
    const taskListLi = document.querySelectorAll('.taskList li')
    taskListLi.forEach(item => {
      item.draggable = true;
    })
    
  })
}

// 編集ボタンを押した時の関数
export function editFunction() {
  editTask.addEventListener('click', () => {
    const taskData = JSON.parse(localStorage.getItem('taskData'));
    newTaskName.classList.remove('deactive')
    taskCheck.classList.add('deactive')

    newTaskNameInput.value = taskData[index].name

    newTaskContent.classList.remove('deactive')
    newTaskContentInput.value = taskData[index].content

    newTaskTerm.classList.remove('deactive')
    newTaskTermInput.value = taskData[index].term

    newTaskTermInputEnd.value = taskData[index].termEnd
    inputComplete.classList.add('deactive')

    inputEditComplete.classList.remove('deactive')
    mask.classList.remove('deactive');
    modal.classList.remove('deactive')
    deleteTask.classList.add('deactive')
    editTask.classList.add('deactive')

    // 編集完了ボタンを押した時
    inputEditComplete.addEventListener('click', ()=> {
      taskData[index].name = newTaskNameInput.value
      taskData[index].content = newTaskContentInput.value
      taskData[index].term = newTaskTermInput.value
      taskData[index].termEnd = newTaskTermInputEnd.value
      localStorage.setItem(`taskData`,  JSON.stringify(taskData))
      
      const taskNameElements = document.querySelectorAll('.taskName');
      const taskContentElements = document.querySelectorAll('.spanContent');
      const taskTermElements = document.querySelectorAll('.spanTerm');
      const taskTermEndElements = document.querySelectorAll('.spanTermEnd');
      taskNameElements.forEach((el, i) => {
        if (i === index) {
          el.textContent = taskData[index].name;
        }
      });
      taskContentElements.forEach((el, i) => {
        if (i === index) {
          el.textContent = taskData[index].content;
        }
      });
      taskTermElements.forEach((el, i) => {
        if (i === index) {
          el.textContent = taskData[index].term;
        }
      });
      taskTermEndElements.forEach((el, i) => {
        if (i === index) {
          el.textContent = taskData[index].termEnd;
        }
      });
      mask.classList.add('deactive');
      modal.classList.add('deactive');
    })
  })
}
