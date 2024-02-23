
// Напишите функцию counter, которая возвращает другую функцию.
//  Возвращаемая функция при каждом вызове увеличивает счетчик 
// и возвращает новое значение.

function counter() {
  let count = 0;
  return function () {

    count++;
    return count;
  }
}
let result = counter();
console.log(result());
console.log(result());
console.log(result());
console.log(result());