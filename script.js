const newTaskButton = document.getElementById('newTaskButton')
const modal = document.getElementById('modal')
const mask = document.getElementById('mask')
const modalCancel = document.getElementById('modalCancel')
const newTaskNameInput = document.getElementById('newTaskNameInput')
const newTaskContentInput = document.getElementById('newTaskContentInput')
const newTaskTermInput = document.getElementById('newTaskTermInput')
const inputComplete = document.getElementById('inputComplete')
const taskList = document.getElementById('taskList')
const deleteTask = document.getElementById('deleteTask')
const editTask = document.getElementById('editTask')
const newTaskName = document.getElementById('newTaskName')
const newTaskContent = document.getElementById('newTaskContent')
const newTaskTerm = document.getElementById('newTaskTerm')



modal.classList.add('deactive')
mask.classList.add('deactive')


newTaskButton.addEventListener('click', () =>{
  newTaskName.style.display = 'block'
  newTaskContent.style.display = 'block'
  newTaskTerm.style.display = 'block'
  inputComplete.style.display = 'block'
  mask.classList.remove('deactive');
  modal.classList.remove('deactive')
  deleteTask.style.display = 'none' 
  editTask.style.display = 'none' 

})
modalCancel.addEventListener('click', () => {
  mask.classList.add('deactive');
  modal.classList.add('deactive')
})

const taskData = []
let taskNumber;
let newTasknameInputValue;
let newTaskContentInputValue;
let newTaskTermInputValue;
let taskSwitch = true

// 完了ボタンを押したとき
inputComplete.addEventListener('click', () => {
  newTasknameInputValue = newTaskNameInput.value
  newTaskContentInputValue = newTaskContentInput.value
  newTaskTermInputValue = newTaskTermInput.value
  taskNumber = JSON.parse(localStorage.getItem('taskNumber'))
  taskNumber++;
  taskData.push({ name:newTasknameInputValue,
                  content: newTaskContentInputValue,
                  term: newTaskTermInputValue 
                })
  localStorage.setItem(`taskData${taskNumber}`,  JSON.stringify(taskData))
  localStorage.setItem('taskNumber', JSON.stringify(taskNumber))
  taskAdd()
  newTaskNameInput.value = null;
  newTaskContentInput.value = null;
  newTaskTermInput.value = null;
  taskData.length = 0;
  console.log(taskNumber)
  
  mask.classList.add('deactive');
  modal.classList.add('deactive');
})

function taskAdd() {
  const li = document.createElement('li');
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

  button.addEventListener('click', () => {
    
  });

  taskList.appendChild(li)
  li.appendChild(button)
  button.appendChild(spanName)
  button.appendChild(spanContent)
  button.appendChild(spanTerm)
}
if(taskSwitch) {
  for(let i = 1; i <= localStorage.length - 1; i++) {
    if(localStorage.getItem(`taskData${i}`)){
      const li = document.createElement('li');
      const button = document.createElement('button');
      const data = JSON.parse(localStorage.getItem(`taskData${i}`))
      const task = data[0]

      const spanName = document.createElement('span');
      spanName.classList = 'taskName'
      spanName.textContent = task.name

      const spanContent = document.createElement('span');
      spanContent.classList = 'spanContent'
      spanContent.textContent = task.content
      const spanTerm = document.createElement('span');
      spanTerm.classList = 'spanTerm'
      spanTerm.textContent = task.term

      // タスクボタンを押したとき
      button.addEventListener('click', () => {
        mask.classList.remove('deactive');
        modal.classList.remove('deactive')
        deleteTask.style.display = 'flex' 
        editTask.style.display = 'flex' 
        newTaskName.style.display = 'none'
        newTaskContent.style.display = 'none'
        newTaskTerm.style.display = 'none'
        inputComplete.style.display = 'none'
      });

  
      taskList.appendChild(li)
      li.appendChild(button)
      button.appendChild(spanName)
      button.appendChild(spanContent)
      button.appendChild(spanTerm)
    }
  }
}


// 削除を押したとき
