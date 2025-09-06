
export function ganttChartFunction() {
  const yearMonth = document.getElementById('yearMonth');
  const dayOfWeek = document.getElementById('dayOfWeek');
  const dayOfWeekName = document.getElementById('dayOfWeekName');

  const daysName =["日", "月", "火", "水", "木", "金", "土", ]
  yearMonth.innerHTML = '';
  dayOfWeek.innerHTML = '';

  const today = new Date();
  
  

  const startDate = new Date(today);
  startDate.setFullYear(today.getFullYear() - 3);

  const endDate = new Date(today);
  endDate.setFullYear(today.getFullYear() + 3);

  const daysBetween = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));


  let currentMonth = '';
  let monthStartIndex = 0;

  const dateArray = Array.from({ length: daysBetween + 1 });
  let dayCount = 0;

  let todayElement = null;
  dateArray.forEach((_, i) => {
    const date = new Date(startDate);
    
    
    
    date.setDate(startDate.getDate() + i);
    

    const dayCell = document.createElement('div');
    dayCell.style.width = '31px'
    dayCell.textContent = date.getDate();
    dayCell.className = 'dateCell';

    const dayCellWeeks = document.createElement('div');
    dayCellWeeks.style.width = '31px'
    dayCellWeeks.textContent = daysName[date.getDay()];
    dayCellWeeks.className = 'dayCellWeeks';

    // 土曜日の場合
    if(date.getDay() === 6) {
      dayCell.classList.add('blue')
      dayCellWeeks.classList.add('blue')
    }

    // 日曜日の場合
    if(date.getDay() === 0) {
      dayCell.classList.add('red')
      dayCellWeeks.classList.add('red')
    }
    

    const dayAnddayOfWeek = document.getElementById('dayAnddayOfWeek')
    if (date.toDateString() === today.toDateString()) {
      dayCell.classList.add('today')
      dayCellWeeks.classList.add('today')
      todayElement = dayCell;
    }
    

    dayOfWeek.appendChild(dayCell);
    dayOfWeekName.appendChild(dayCellWeeks);

    const ym = `${date.getFullYear()}年${date.getMonth() + 1}月`;
    
    if (ym !== currentMonth) {

      if (currentMonth !== '') {
        const prevCell = yearMonth.lastChild;
        const dayInMonth = i - monthStartIndex

        prevCell.style.width = `${dayInMonth * 31}px`;
      }

      const ymCell = document.createElement('div');
      ymCell.textContent = ym;
      ymCell.className = 'monthCell';
      
      yearMonth.appendChild(ymCell);

      currentMonth = ym;
      monthStartIndex = i;
    }

    if (i === daysBetween) {
      const lastCell = yearMonth.lastChild;
      const daysInMonth = i - monthStartIndex + 1;
      lastCell.style.width = `${daysInMonth * 31}px`;
    }
  });
  
  if (todayElement) {
    console.log('fff')
    todayElement.scrollIntoView({
      behavior: 'auto', // スムーズにスクロールしたい場合は 'smooth'
      inline: 'start',
      block: 'nearest',
      
    });
  }
} 