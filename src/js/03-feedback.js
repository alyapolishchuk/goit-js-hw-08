import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const obj = {};
form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));
formOnUpdate();
function formInput(event) {
  obj[event.target.name] = event.target.value; // присвоєння ключа об'єкту через квадратні дужки
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(obj));
}
function formSubmit(event) {
  event.preventDefault();
  const { email, message } = event.target.elements;
  if (!email.value || !message.value) {
    alert(`Заповніть форму`);
  }
  console.log(obj);
  localStorage.clear();
  form.reset();
  obj = {};
}
function formOnUpdate() {
  const storageValue = localStorage.getItem(LOCALSTORAGE_KEY);
  const objectStorageValue = JSON.parse(storageValue);
  Object.entries(objectStorageValue).forEach(([name, value]) => {
    obj[name] = value;
    form.elements[name].value = value;
  });
}
