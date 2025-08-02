const newTaskButton = document.getElementById('newTaskButton')
const modal = document.getElementById('modal')
const mask = document.getElementById('mask')
const modalCancel = document.getElementById('modalCancel')
const newTaskNameInput = document.getElementById('newTaskNameInput')
const newTaskContentInput = document.getElementById('newTaskContentInput')
const newTaskTermInput = document.getElementById('newTaskTermInput')
const inputComplete = document.getElementById('inputComplete')
const taskList = document.getElementById('taskList')


modal.classList.add('deactive')
mask.classList.add('deactive')


newTaskButton.addEventListener('click', () =>{
  mask.classList.remove('deactive');
  modal.classList.remove('deactive')
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
  const a = document.createElement('a');

  const spanName = document.createElement('span');
  spanName.classList = 'taskName'
  spanName.textContent = newTasknameInputValue

  const spanContent = document.createElement('span');
  spanContent.classList = 'spanContent'
  spanContent.textContent = newTaskContentInputValue

  const spanTerm = document.createElement('span');
  spanTerm.classList = 'spanTerm'
  spanTerm.textContent = newTaskTermInputValue

  

  

  taskList.appendChild(li)
  li.appendChild(a)
  a.appendChild(spanName)
  a.appendChild(spanContent)
  a.appendChild(spanTerm)
}
if(taskSwitch) {
  for(let i = 1; i <= localStorage.length - 1; i++) {
    if(localStorage.getItem(`taskData${i}`)){
      const li = document.createElement('li');
      const a = document.createElement('a');
      const data = JSON.parse(localStorage.getItem(`taskData${i}`))
      const task = data[0]
      console.log(data)
      const spanName = document.createElement('span');
      spanName.classList = 'taskName'
      spanName.textContent = task.name

      const spanContent = document.createElement('span');
      spanContent.classList = 'spanContent'
      spanContent.textContent = task.content
      const spanTerm = document.createElement('span');
      spanTerm.classList = 'spanTerm'
      spanTerm.textContent = task.term

  

      taskList.appendChild(li)
      li.appendChild(a)
      a.appendChild(spanName)
      a.appendChild(spanContent)
      a.appendChild(spanTerm)
    }
  }
}
