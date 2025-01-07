function calculateScore() {
    let totalScore = 0;
    const resultsTable = document.querySelector('table');
    const totalScoreElement = document.getElementById('totalScore');
    const comments = document.getElementById('comments').value;
    resultsTable.innerHTML = '<tr><th>Питання</th><th>Варіанти відповіді</th><th>Отримані бали</th></tr>';
    for (let i = 1; i <= 7; i++) {
       const selectedOptions = document.querySelectorAll(`[name="question${i}"]:checked`);
       let correctAnswers = 0;
       selectedOptions.forEach(option => {
          correctAnswers += parseInt(option.value);
       });
       const row = resultsTable.insertRow();
       const questionCell = row.insertCell(0);
       const answersCell = row.insertCell(1);
       const scoreCell = row.insertCell(2);
       questionCell.innerText = `Питання ${i}`;
       answersCell.innerText = selectedOptions.length > 0 ? selectedOptions.length : 'Нема відповіді';
       if (correctAnswers >= 2) {
          scoreCell.innerText = '2';
          totalScore += 2;
       } else if (correctAnswers === 1) {
          scoreCell.innerText = '1';
          totalScore += 1;
       } else {
          scoreCell.innerText = '0';
       }
    }
    totalScoreElement.innerText = totalScore;
    if (comments) {
       const row = resultsTable.insertRow();
       const questionCell = row.insertCell(0);
       const answersCell = row.insertCell(1);
       const scoreCell = row.insertCell(2);
       questionCell.innerText = 'Питання 8';
       answersCell.innerText = comments;
       scoreCell.innerText = '---';
    }
 }
 
 function restartTest() {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
    radioInputs.forEach(input => {
       input.checked = false;
    });
    checkboxInputs.forEach(input => {
       input.checked = false;
    })
    const resultsTable = document.querySelector('table');
    resultsTable.innerHTML = '<tr><th>Питання</th><th>Варіанти відповіді</th><th>Отримані бали</th></tr>';
    const totalScoreElement = document.getElementById('totalScore');
    totalScoreElement.innerText = '0';
    document.getElementById('comments').value = '';
 }