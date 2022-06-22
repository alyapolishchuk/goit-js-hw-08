import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const obj = {};

form.addEventListener('submit', formSubmit);
form.addEventListener('input', formInput);

function formInput(event) {
  obj[event.target.name] = event.target.value; // присвоєння ключа об'єкту через квадратні дужки
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(obj));
  // console.log(obj);
  // console.log(event.target.message);
  // console.dir(event.target.input);
}
function formSubmit(event) {
    event.preventDefault()
    // console.dir(event.currentTarget.elements.message.value);
    const { email, message } = event.target.elements;
    // console.log(email.value, message.value);
    if (!email.value || !message.value) {
        alert(`Заповніть форму`);
    } 
}

