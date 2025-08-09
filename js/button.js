import { taskAdd } from './taskAction.js'

let taskListLi = document.querySelectorAll('.taskList li');
let index = Array.from(taskListLi).findIndex(li => li.id === liId)
let isDelete = false
let taskElement


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
const newTaskButton = document.getElementById('newTaskButton')
//　タスクをクリックした時の関数
export function taskClick() {
  taskListLi = document.querySelectorAll('.taskList li');
  document.querySelectorAll('.taskList > li > button').forEach(button => {
    button.addEventListener('click', function ()  {
      mask.classList.remove('deactive');
      modal.classList.remove('deactive');
      deleteTask.classList.remove('deactive');
      editTask.classList.remove('deactive');
      newTaskName.classList.add('deactive');
      newTaskContent.classList.add('deactive');
      newTaskTerm.classList.add('deactive');
      inputComplete.classList.add('deactive');
      const liId = this.parentElement.id;
      index = Array.from(taskListLi).findIndex(li => li.id === liId)
      taskElement = document.getElementById(liId);
      deleteButton()
    });
  })
}



// 削除ボタンを押した時の処理をする関数
export function deleteButton() {
  if(isDelete) return;
  deleteTask.addEventListener('click', () => {
    let taskData = JSON.parse(localStorage.getItem('taskData'));
    
    console.log(index)
    taskData.splice(index,1)
    
    localStorage.setItem('taskData', JSON.stringify(taskData));
    console.log(taskData)
    // 消した後の表示変更
    taskList.removeChild(taskElement)

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
    mask.classList.remove('deactive');
    modal.classList.remove('deactive')
    deleteTask.classList.add('deactive')
    editTask.classList.add('deactive')
  
  })
}
// 完了ボタンを押したとき
export function completeButton() {
  inputComplete.addEventListener('click', () => {
    let taskData = JSON.parse(localStorage.getItem('taskData')) || [];
    let newTasknameInputValue = newTaskNameInput.value
    let newTaskContentInputValue = newTaskContentInput.value
    let newTaskTermInputValue = newTaskTermInput.value
    let newTaskTermInputValueEnd = newTaskTermInputEnd.value
    let newTaskId = `${new Date().getTime()}`
  
    taskData.push({ name:newTasknameInputValue,
                    content: newTaskContentInputValue,
                    term: newTaskTermInputValue,
                    termEnd: newTaskTermInputValueEnd,
                    id: newTaskId
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
  })
}