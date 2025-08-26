
const boardButton = document.getElementById('boardButton')
const ganttChartButton = document.getElementById('ganttChartButton')
const toDoList = document.getElementById('toDoList')
export function menuButtonFunction() {
  boardButton.classList.add('clicked')

  ganttChartButton.addEventListener('click', ()=> {
    ganttChartButton.classList.add('clicked')
    boardButton.classList.remove('clicked')
    toDoList.classList.add('deactive')
  })
  
  boardButton.addEventListener('click', () => {
    ganttChartButton.classList.remove('clicked')
    boardButton.classList.add('clicked')
    toDoList.classList.remove('deactive')
  })
}
