const currentTime = new Date();
displayTime();

function displayTime() {
   document.getElementById('currentTime').innerText = currentTime.toLocaleTimeString("ua-UA", { hour12: false });
}

function changeTime(unit) {
   var inputValue = parseInt(document.getElementById(`${unit}Input`).value, 10);
   if (!isNaN(inputValue)) {
      if (unit === 'seconds') {
         currentTime.setSeconds(currentTime.getSeconds() + inputValue);
      } else if (unit === 'minutes') {
         currentTime.setMinutes(currentTime.getMinutes() + inputValue);
      } else if (unit === 'hours') {
         currentTime.setHours(currentTime.getHours() + inputValue);
      }
      displayTime();
   }
}
/*///////////////////////////////////// */

const CurrentDate = new Date();


function displayCurrentDateTime() {
   const days = [
      "неділя",
      "понеділок",
      "вівторок",
      "середа",
      "четвер",
      "п'ятниця",
      "субота"];
   const months = [
      "січня",
      "лютого",
      "березня",
      "квітня",
      "травня",
      "червня",
      "липня",
      "серпня",
      "вересня",
      "жовтня",
      "листопада",
      "грудня"];

   const displayDate = document.getElementById("currentDateTime");
   const formattedDate = `${CurrentDate.getDate()} ${months[CurrentDate.getMonth()]} ${CurrentDate.getFullYear()} року`;
   const dayOfWeek = `День тижня: ${days[CurrentDate.getDay()]}`;
   const time = `Час: ${CurrentDate.getHours()}:${(CurrentDate.getMinutes() < 10 ? '0' : '') + CurrentDate.getMinutes()}`;

   displayDate.innerHTML = `Дата: ${formattedDate}<br>${dayOfWeek}<br>${time}`;
}

/**************************************************/

// Function to get day information
function getDayInfo(dateObject) {
   const days = [
      "понеділок",
      "вівторок",
      "середа",
      "четвер",
      "п'ятниця",
      "субота",
      "неділя"
   ];

   const dayNumber = dateObject.getDay() === 0 ? 7 : dateObject.getDay();
   const dayName = days[dayNumber - 1];

   return {
      dayNumber: dayNumber,
      dayName: dayName
   };
}

function executeTask21() {
   const dayInfo = getDayInfo(CurrentDate);
   const resultDisplay = document.getElementById("result");
   resultDisplay.innerHTML = `Номер тижня: ${dayInfo.dayNumber}<br>Назва дня тижня: ${dayInfo.dayName}`;
}


function findDate() {
   const N = document.getElementById("daysInput").value;
   CurrentDate.setDate(CurrentDate.getDate() + parseInt(N));

   let day = CurrentDate.getDate();
   let month = CurrentDate.getMonth() + 1;
   let year = CurrentDate.getFullYear();

   let formatDate = day + "." + month + "." + year;

   let result = (N < 0 ? "Минула " : "Майбутня ") + "дата: " + formatDate;

   document.getElementById("result2").innerHTML = result;

   document.getElementById("daysInput").value = "";

}

/*****************************************************/


function getLastDayOfMonth(year, month) {
   const lastDay = new Date(year, month + 1, 0);
   return lastDay.getDate();
}


function calculateLastDay() {
   let yearInput = document.getElementById('year');
   let monthInput = document.getElementById('month');
   let resultParagraph = document.getElementById('result3');

   let year = parseInt(yearInput.value);
   let month = parseInt(monthInput.value);

   if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
      resultParagraph.textContent = 'Введіть дійсний рік та місяць.';
   } else {
      let lastDay = getLastDayOfMonth(year, month - 1);
      resultParagraph.textContent = `Останній день місяця: ${lastDay}`;
   }
}


/****************************************************/

function getTimeInfo() {
   let startOfDay = new Date(CurrentDate.getFullYear(), CurrentDate.getMonth(), CurrentDate.getDate());
   let secondsPassed = Math.floor((CurrentDate - startOfDay) / 1000);
   let secondsUntilNextDay = Math.floor((startOfDay.setDate(startOfDay.getDate() + 1) - CurrentDate) / 1000);

   return {
      secondsPassed: secondsPassed,
      secondsUntilNextDay: secondsUntilNextDay
   };
}

function displayTimeInfo() {
   let timeInfo = getTimeInfo();
   let resultParagraph = document.getElementById('result4');

   resultParagraph.innerHTML = `Секунди які пройшли сьогодні: ${timeInfo.secondsPassed}<br>Секунди до наступного дня: ${timeInfo.secondsUntilNextDay}`;
}

/****************************************************/

function formatDate() {
   const userInput = document.getElementById('userInput').value;

   if (userInput.trim() === '') {
      alert('Введіть дійсну дату та час.');
      return;
   }
   let parts = userInput.split(' ');
   let dateParts = parts[0].split('.');
   let timeParts = parts[1].split(':');
   // Формуємо об'єкт Date
   let inputDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0], timeParts[0], timeParts[1]);
   // Розраховуємо різницю в секундах між введеним часом та поточним часом
   let currentDate = new Date();
   let timeDifference = Math.floor((currentDate - inputDate) / 1000);

   let day = inputDate.getDate(); // Змінено на отримання дня з введеної дати
   let month = inputDate.getMonth() + 1;
   let year = inputDate.getFullYear();

   let formatDate = day + "." + month + "." + year;
   // Визначаємо, який формат виводу використовувати
   let result = '';
   if (timeDifference < 60) {
      result = `${timeDifference} сек. назад`;
   } else if (timeDifference < 3600) {
      result = `${Math.floor(timeDifference / 60)} хв. назад`;
   } else {
      result = formatDate + ' ' + inputDate.toLocaleTimeString();
   }
   document.getElementById('result5').textContent = result;
}