const taskList = document.getElementById('taskList')
const taskData = JSON.parse(localStorage.getItem('taskData'));




export function dragAndDropProcess() {
  let dragItem;
  let index;
  let target;
  let previousTarget = null; 
  taskList.addEventListener('dragstart', e => {
    const li = e.target.closest('li');
    const taskListLi = document.querySelectorAll('.taskList li')
    
    if (li) {
      dragItem = li;
      
    }
    const liId = dragItem.id;
      index = Array.from(taskListLi).findIndex(li => li.id === liId)
    
    
  })
  taskList.addEventListener('dragover', e => {
    e.preventDefault();

    const currentTarget = e.target.closest('li');
    if (previousTarget && previousTarget !== currentTarget) {
      previousTarget.classList.remove('hover');
    }
    if(currentTarget) {
      currentTarget.classList.add('hover');
    }
    
    previousTarget = currentTarget;
    target = currentTarget;
    dragItem.classList.add('hidden')
  })
  

  taskList.addEventListener('dragend', e => {
    const liId = target.id
    const taskListLi = document.querySelectorAll('.taskList li')
    let indexDrop = Array.from(taskListLi).findIndex(li => li.id === liId)
    // if (!target || target === dragItem)
    dragItem.classList.remove('hidden')
    target.classList.remove('hover')
    if ( index < indexDrop) {
      taskList.insertBefore(dragItem, target.nextSibling);
      let removed = taskData.splice(index,1)
      let removedItem = removed[0]
      taskData.splice(indexDrop, 0, removedItem)
      
      localStorage.setItem('taskData', JSON.stringify(taskData));
    } else {
      taskList.insertBefore(dragItem, target);
      let removed = taskData.splice(index,1)
      let removedItem = removed[0]
      taskData.splice(indexDrop, 0, removedItem)
      localStorage.setItem('taskData', JSON.stringify(taskData));

    }
  })
}


