const form = document.getElementById('form');
const email = document.getElementById('email');
const login = document.getElementById('name');
const username = document.getElementById('login');
const password = document.getElementById('password');
const postcode = document.getElementById('postcode');

form.addEventListener('submit', e => {
   e.preventDefault();
   checkInputs();
});

function checkInputs() {
   validateInput(email, 'Email', isEmail);
   validateInput(login, "Ім'я", isName);
   validateInput(username, 'Логін', isUsername);
   validateInput(password, 'Пароль', isPassword);
   validateInput(postcode, 'Індекс', isPostCode);
}

function validateInput(input, label, validationFunction) {
   const inputValue = input.value.trim();
   if (inputValue === '') {
      setErrorFor(input, `${label} не може бути порожнім`);
   } else if (!validationFunction(inputValue)) {
      setErrorFor(input, `Не правильне(ний) ${label}`);
   } else {
      setSuccessFor(input);
   }
   if (input === password) {
      if (inputValue.length < 8) {
         setErrorFor(input, 'Пароль повинен містити принаймні 8 символів');

      } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[-_!@#$%^&*])/.test(inputValue)) {
         setErrorFor(input, 'Повинен містити 1 букву, 1 цифру і спецсимвол');
      }
   }
}

function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   formControl.className = 'form-control error';
   small.innerText = message;
}

function setSuccessFor(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

function isEmail(email) {
   return /^[a-z0-9._%+-]+@pnu.edu.ua$/i.test(email);
}

function isPostCode(postcode) {
   return /^\d{5}$/.test(postcode);
}

function isName(login) {
   return /^([А-ЩЬЮЯІЇЄҐA-Z][а-щьюяіїєґa-z]+)\s([А-ЩЬЮЯІЇЄҐA-Z]+\s?[А-ЩЬЮЯІЇЄҐA-Z]+)$/.test(login);
}

function isUsername(username) {
   return /^[a-zA-Z]+$/.test(username);
}

function isPassword(password) {
   return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[-_!@#$%^&*]).{8,}$/.test(password);
}