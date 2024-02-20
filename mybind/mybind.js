// Задача: Написать функцию myBind. 
// Функция myBind используется для привязки контекста (значения this) и, при необходимости,
//  аргументов к функции. Ваша функция должна воспроизводить поведение встроенной функции bind.

// Подсказка:
// Используйте метод apply или call для вызова оригинальной функции с нужным контекстом и
// аргументами.


function myBind(obj, fn) {
  return function (...args) {
    fn.apply(obj, args);
  }
}
function showPerson() {
  console.log(`${this.name} ${this.age} ${this.work}`);
}
const person = {
  name: 'John', age: 23, work: 'driver'
}
const person2 = {
  name: 'Anna', age: 20, work: 'developer'
}
myBind(person, showPerson)();
myBind(person2, showPerson)();



function show() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
show('hi','by')