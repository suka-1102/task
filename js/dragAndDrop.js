const taskList = document.getElementById('taskList')
const taskData = JSON.parse(localStorage.getItem('taskData'));




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
      // const replacement = taskData[index]
      let removed = taskData.splice(index,1)
      let removedItem = removed[0]
      taskData.splice(indexDrop, 0, removedItem)
      
      localStorage.setItem('taskData', JSON.stringify(taskData));
    } else {
      taskList.insertBefore(dragItem, target);
      // const replacement = taskData[index]
      let removed = taskData.splice(index,1)
      let removedItem = removed[0]
      taskData.splice(indexDrop, 0, removedItem)
      localStorage.setItem('taskData', JSON.stringify(taskData));

    }
  })
}


