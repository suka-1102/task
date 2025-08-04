let newTasknameInputValue;
let newTaskContentInputValue;
let newTaskTermInputValue;
let newTaskTermInputValueEnd;

let newTaskId;
let li;
let button;
let spanName;
let spanContent;
let spanTerm;
let spanTermEnd
// タスクを追加する関数
export function taskAdd() {
  newTaskId = new Date().getTime();
  newTasknameInputValue = newTaskNameInput.value
  newTaskContentInputValue = newTaskContentInput.value
  newTaskTermInputValue = newTaskTermInput.value
  newTaskTermInputValueEnd = newTaskTermInputEnd.value
  li = document.createElement('li');
  li.id = newTaskId;
  button = document.createElement('button');

  spanName = document.createElement('span');
  spanName.classList = 'taskName'
  spanName.textContent = newTasknameInputValue

  spanContent = document.createElement('span');
  spanContent.classList = 'spanContent'
  spanContent.textContent = newTaskContentInputValue

  spanTerm = document.createElement('span');
  spanTerm.classList = 'spanTerm'
  spanTerm.textContent = newTaskTermInputValue

  spanTermEnd = document.createElement('span');
  spanTermEnd.classList = 'spanTermEnd'
  spanTermEnd.textContent = newTaskTermInputValueEnd

  
  

  taskList.appendChild(li)
  li.appendChild(button)
  button.appendChild(spanName)
  button.appendChild(spanContent)
  button.appendChild(spanTerm)
  button.appendChild(spanTermEnd)
}