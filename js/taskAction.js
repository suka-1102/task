const editTask = document.getElementById('editTask')
// タスクを追加する関数
export function taskAdd() {
 
  const data = JSON.parse(localStorage.getItem('taskData'));
  const taskNumber = JSON.parse(localStorage.getItem('taskData')).length
  let li = document.createElement('li');

  li.id = data[ taskNumber - 1 ].id;
  let button = document.createElement('button');
  let spanName = document.createElement('span');
  spanName.classList = 'taskName'
  spanName.textContent = newTaskNameInput.value

  let spanContent = document.createElement('span');
  spanContent.classList = 'spanContent'
  spanContent.textContent = newTaskContentInput.value

  let spanTerm = document.createElement('span');
  spanTerm.classList = 'spanTerm'
  spanTerm.textContent = newTaskTermInput.value

  let spanTermEnd = document.createElement('span');
  spanTermEnd.classList = 'spanTermEnd'
  spanTermEnd.textContent = newTaskTermInputEnd.value

  taskList.appendChild(li)
  li.appendChild(button)
  button.appendChild(spanName)
  button.appendChild(spanContent)
  button.appendChild(spanTerm)
  button.appendChild(spanTermEnd)

  const liCount = taskList.querySelectorAll('li').length || 0;
  todoListNumber.textContent = liCount;

}

