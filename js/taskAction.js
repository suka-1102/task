
// タスクを追加する関数
export function taskAdd() {
  let newTaskId = new Date().getTime();
  let newTasknameInputValue = newTaskNameInput.value
  let newTaskContentInputValue = newTaskContentInput.value
  let newTaskTermInputValue = newTaskTermInput.value
  let newTaskTermInputValueEnd = newTaskTermInputEnd.value
  let li = document.createElement('li');
  li.id = newTaskId;
  let button = document.createElement('button');
  let spanName = document.createElement('span');
  spanName.classList = 'taskName'
  spanName.textContent = newTasknameInputValue

  let spanContent = document.createElement('span');
  spanContent.classList = 'spanContent'
  spanContent.textContent = newTaskContentInputValue

  let spanTerm = document.createElement('span');
  spanTerm.classList = 'spanTerm'
  spanTerm.textContent = newTaskTermInputValue

  let spanTermEnd = document.createElement('span');
  spanTermEnd.classList = 'spanTermEnd'
  spanTermEnd.textContent = newTaskTermInputValueEnd

  
  

  taskList.appendChild(li)
  li.appendChild(button)
  button.appendChild(spanName)
  button.appendChild(spanContent)
  button.appendChild(spanTerm)
  button.appendChild(spanTermEnd)
}