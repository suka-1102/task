const notComplete = document.getElementById('notComplete')
const complete = document.getElementById('complete')
// const taskData = JSON.parse(localStorage.getItem('taskData'));

export function checkBoxProcess() {
  
  console.log(index)
  if (notComplete.checked && !complete.checked) {
    notComplete.classList.add('pointerEventsNone')
  }
  if (complete.checked && !notComplete.checked) {
    complete.classList.add('pointerEventsNone')
  }
  notComplete.addEventListener('change', () => {
    if(notComplete.checked) {
      complete.checked = false;
      complete.classList.remove('pointerEventsNone')
      notComplete.classList.add('pointerEventsNone')
    }
  })
  complete.addEventListener('change', () => {
    if(complete.checked) {
      notComplete.checked = false;
      notComplete.classList.remove('pointerEventsNone')
      complete.classList.add('pointerEventsNone')
      
    }
  })
  
}