function reverseNumbersSequence() {
    const inputSequence = document.getElementById("numbersInput").value;
    const numbers = inputSequence.split(',').map(Number);
    const reversedNumbers = numbers.reverse();
    document.getElementById("reversedNumbersOutput").textContent = reversedNumbers;
 }
 
 function noZeros() {
    const inputNumbers = document.getElementById("noZerosInput").value;
    const numbers = inputNumbers.split('').map(Number);
    const filteredNumbers = numbers.filter(number => number !== 0);
    document.getElementById("noZerosOutput").textContent = filteredNumbers;
 }
 
 function reverser() {
    const inputText = document.getElementById("reverserInput").value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById("reversedTextOutput").textContent = reversedText;
 }
 
 function replace() {
    const inputText = document.getElementById("replaceInput").value;
    const words = inputText.split(' ');
    console.log(words);
    if (words.length >= 3) {
       const secondWord = words[1];
       words[1] = words[2];
       words[2] = secondWord;
    } else if (words.length == 2) {
       const firstWord = words[0];
       words[0] = words[1];
       words[1] = firstWord;
       console.log(words);
    }
    const modifiedText = words.join(', ');
    document.getElementById("replacedTextOutput").textContent = modifiedText;
 }
 
 /*////////////////////////////////////////////////////////// */
 
 function compareStrings() {
    const str1 = document.getElementById("string1").value;
    const str2 = document.getElementById("string2").value;
    const resultElement = document.getElementById("compareResult");
 
    if (str1.length > str2.length) {
       resultElement.textContent = "Рядок 1 довший за Рядок 2";
    } else if (str1.length < str2.length) {
       resultElement.textContent = "Рядок 2 довший за Рядок 1";
    } else {
       resultElement.textContent = "Рядки мають однакову довжину";
    }
 }
 
 function findAndCountChar() {
    const inputString = document.getElementById("inputString").value;
    const charToFind = document.getElementById("charToFind").value;
    const resultElement = document.getElementById("findResult");
 
    const indexes = [];
    let count = 0;
 
    for (let i = 0; i < inputString.length; i++) {
       if (inputString[i] === charToFind) {
          indexes.push(i);
          count++;
       }
    }
 
    resultElement.textContent = `Індекси: ${indexes.join(", ")}, Кількість: ${count}`;
 }
 
 function capitalizeFirstChar() {
    const inputString = document.getElementById("capitalizeString").value;
    const resultElement = document.getElementById("capitalizeResult");
 
    if (inputString.length === 0) {
       resultElement.textContent = "Рядок порожній";
    } else {
       const capitalizedString = inputString[0].toUpperCase() + inputString.slice(1);
       resultElement.textContent = capitalizedString;
    }
 }
 
 function countVowels() {
    const inputString = document.getElementById("vowelsString").value;
    const resultElement = document.getElementById("vowelsResult");
 
    const vowels = "аеєиіїоуюяАЕЄИІЇОУЮЯ";
    let count = 0;
 
    for (let i = 0; i < inputString.length; i++) {
       if (vowels.includes(inputString[i])) {
          count++;
       }
    }
 
    resultElement.textContent = `Кількість голосних: ${count}`;
 }
 
 function isSpam() {
    const inputString = document.getElementById("spamString").value.toLowerCase();
    const resultElement = document.getElementById("spamResult");
 
    const spamWords = ["100% безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте"];
    let isSpam = false;
 
    for (const word of spamWords) {
       if (inputString.includes(word.toLowerCase())) {
          isSpam = true;
          break;
       }
    }
    if (isSpam) {
       resultElement.textContent = "Рядок містить спам";
    } else {
       resultElement.textContent = "Рядок не містить спам";
    }
 }
 
 function truncateString() {
    const inputString = document.getElementById("truncateString").value;
    const maxLength = parseInt(document.getElementById("maxLength").value, 10);
    const resultElement = document.getElementById("truncateResult");
 
    if (maxLength >= inputString.length) {
       resultElement.textContent = inputString;
    } else {
       const truncatedString = inputString.slice(0, maxLength) + '...';
       resultElement.textContent = truncatedString;
    }
 }
 
 /*////////////////////////////////////////////////////////// */
 
 function toCamelCase() {
    const input = document.getElementById("snakeCaseInput").value;
    const result = document.getElementById("camelCaseResult");
 
    const camelCase = input.replace(/_./g, match => match.charAt(1).toUpperCase());
    result.textContent = camelCase;
 }
 
 function toSnakeCase() {
    const input = document.getElementById("camelCaseInput").value;
    const result = document.getElementById("snakeCaseResult");
 
    const snakeCase = input.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
 
    result.textContent = snakeCase;
 }
 
 function replaceDates() {
    const inputText = document.getElementById("dateInput").value;
    const result = document.getElementById("dateResult");
 
    const modifiedText = inputText.replace(/(\d{4})\/(\d{2})\/(\d{2})/g, '$3.$2.$1');
    result.textContent = modifiedText;
 }