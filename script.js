const newTaskButton = document.getElementById('newTaskButton')
const modal = document.getElementById('modal')
const mask = document.getElementById('mask')
const modalCancel = document.getElementById('modalCancel')
const newTaskNameInput = document.getElementById('newTaskNameInput')
const newTaskContentInput = document.getElementById('newTaskContentInput')
const newTaskTermInput = document.getElementById('newTaskTermInput')
const inputComplete = document.getElementById('inputComplete')

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
let taskNumber = 1;
inputComplete.addEventListener('click', () => {
  let newTasknameInpitValue = newTaskNameInput.value
  let newTaskContentInputValue = newTaskContentInput.value
  let newTaskTermInputValue = newTaskTermInput.value
  
  taskData.push({ name:newTasknameInpitValue,
                  content: newTaskContentInputValue,
                  term: newTaskTermInputValue 
                })
  localStorage.setItem(`taskData${taskNumber}`,  JSON.stringify(taskData))
  taskNumber++;
  newTaskNameInput.value = null;
  newTaskContentInput.value = null;
  newTaskTermInput.value = null;
  taskData.length = 0;

  mask.classList.add('deactive');
  modal.classList.add('deactive');
})
