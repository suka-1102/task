
const boardButton = document.getElementById('boardButton')
const ganttChartButton = document.getElementById('ganttChartButton')
const toDoList = document.getElementById('toDoList')
const ganttChartDisplay = document.getElementById('ganttChartDisplay')

export function menuButtonFunction() {
  boardButton.classList.add('clicked')
  ganttChartDisplay.classList.add('deactive')
  

  ganttChartButton.addEventListener('click', ()=> {
    ganttChartButton.classList.add('clicked')
    boardButton.classList.remove('clicked')
    toDoList.classList.add('deactive')
    ganttChartDisplay.classList.remove('deactive')
  })
  
  boardButton.addEventListener('click', () => {
    ganttChartButton.classList.remove('clicked')
    boardButton.classList.add('clicked')
    toDoList.classList.remove('deactive')
    ganttChartDisplay.classList.add('deactive')
  })
}
