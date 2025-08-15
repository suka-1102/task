const taskList = document.getElementById('taskList')



export function dragAndDropProcess() {
  let dragItem;
  let index;
  let target;
  taskList.addEventListener('dragstart', e => {
    const li = e.target.closest('li');
    const taskListLi = document.querySelectorAll('.taskList li')
    // const taskListLi = document.querySelectorAll('.taskList li')
    
    if (li) {
      dragItem = li;
      
    }
    const liId = dragItem.id;
      index = Array.from(taskListLi).findIndex(li => li.id === liId)
      // console.log(index)

    
  })
  taskList.addEventListener('dragover', e => {
    e.preventDefault();
    target = e.target.closest('li');
  })
  taskList.addEventListener('dragend', e => {
    const liId = target.id
    const taskListLi = document.querySelectorAll('.taskList li')
    let indexDrop = Array.from(taskListLi).findIndex(li => li.id === liId)
    // if (!target || target === dragItem)

    if ( index < indexDrop) {
      taskList.insertBefore(dragItem, target.nextSibling);
    
    } else {
      taskList.insertBefore(dragItem, target);

    }
  })
}


