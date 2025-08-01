const newTaskButton = document.getElementById('newTaskButton')
const modal = document.getElementById('modal')
const mask = document.getElementById('mask')
const modalCancel = document.getElementById('modalCancel')

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