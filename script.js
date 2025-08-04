const newTaskButton = document.getElementById('newTaskButton')
const modal = document.getElementById('modal')
const mask = document.getElementById('mask')
const modalCancel = document.getElementById('modalCancel')
const newTaskNameInput = document.getElementById('newTaskNameInput')
const newTaskContentInput = document.getElementById('newTaskContentInput')
const newTaskTermInput = document.getElementById('newTaskTermInput')
const newTaskTermInputEnd = document.getElementById('newTaskTermInputEnd')
const inputComplete = document.getElementById('inputComplete')
const taskList = document.getElementById('taskList')
const deleteTask = document.getElementById('deleteTask')
const editTask = document.getElementById('editTask')
const newTaskName = document.getElementById('newTaskName')
const newTaskContent = document.getElementById('newTaskContent')
const newTaskTerm = document.getElementById('newTaskTerm')

let isDelete = false
let isTaskClick = false;
let taskListLi = document.querySelectorAll('.taskList li');
let index = Array.from(taskListLi).findIndex(li => li.id === liId)
let liId;


modal.classList.add('deactive')
mask.classList.add('deactive')


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
modalCancel.addEventListener('click', () => {
  mask.classList.add('deactive');
  modal.classList.add('deactive')
})



let newTasknameInputValue;
let newTaskContentInputValue;
let newTaskTermInputValue;
let newTaskTermInputValueEnd;
let taskSwitch = true
let taskData
let taskElement

// 完了ボタンを押したとき
inputComplete.addEventListener('click', () => {
  let taskData = JSON.parse(localStorage.getItem('taskData')) || [];
  newTasknameInputValue = newTaskNameInput.value
  newTaskContentInputValue = newTaskContentInput.value
  newTaskTermInputValue = newTaskTermInput.value
  newTaskTermInputValueEnd = newTaskTermInputEnd.value

  taskData.push({ name:newTasknameInputValue,
                  content: newTaskContentInputValue,
                  term: newTaskTermInputValue,
                  termEnd: newTaskTermInputValueEnd
                })
  localStorage.setItem(`taskData`,  JSON.stringify(taskData))
  taskAdd()
  
  newTaskNameInput.value = null;
  newTaskContentInput.value = null;
  newTaskTermInput.value = null;
  newTaskTermInputEnd.value = null;
  
  // taskData.length = 0;
  mask.classList.add('deactive');
  modal.classList.add('deactive');
  taskClick()
})

function taskAdd() {
  const newTaskId = new Date().getTime();
  const li = document.createElement('li');
  li.id = newTaskId;
  const button = document.createElement('button');

  const spanName = document.createElement('span');
  spanName.classList = 'taskName'
  spanName.textContent = newTasknameInputValue

  const spanContent = document.createElement('span');
  spanContent.classList = 'spanContent'
  spanContent.textContent = newTaskContentInputValue

  const spanTerm = document.createElement('span');
  spanTerm.classList = 'spanTerm'
  spanTerm.textContent = newTaskTermInputValue

  const spanTermEnd = document.createElement('span');
  spanTermEnd.classList = 'spanTermEnd'
  spanTermEnd.textContent = newTaskTermInputValueEnd

  
  

  taskList.appendChild(li)
  li.appendChild(button)
  button.appendChild(spanName)
  button.appendChild(spanContent)
  button.appendChild(spanTerm)
  button.appendChild(spanTermEnd)
}
const data = JSON.parse(localStorage.getItem('taskData'));
const taskNumber = JSON.parse(localStorage.getItem('taskData')).length
if(taskSwitch){
  
  Array.from({ length: taskNumber }).forEach((_, i) => {
    let newTaskId = `${new Date().getTime()}${i}`;
    const li = document.createElement('li');
    li.id = newTaskId
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


//　タスクをクリックした時の関数
function taskClick() {
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
function deleteButton() {
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