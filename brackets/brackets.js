
// Задача: Проверка сбалансированности скобок Напишите функцию showBrackets, 
// которая принимает строку, содержащую скобки ((), [], {}),
// и проверяет, является ли последовательность скобок сбалансированной. Это означает,
// что для каждой открывающей скобки должна быть соответствующая закрывающая скобка,
// и они должны быть правильно вложены друг в друга.

// Функция должна вернуть true, если скобки сбалансированы, и false в противном случае.


let case1 = '()';
let case2 = '()[]{}';
let case3 = '(]';
let case4 = '([)]';

function showBrackets(str) {
  let arr = [];
  const bracketPairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let key of str) {
    if (bracketPairs[key]) {
      arr.push(key);
    } else {
      const back = arr.pop();
      if (bracketPairs[back] !== key) {
        return false;
      }
    }
  }
  return arr.length === 0;
}

console.log(showBrackets(case0)); // false
console.log(showBrackets(case1)); // true
console.log(showBrackets(case2)); // true
console.log(showBrackets(case3)); // false
console.log(showBrackets(case4)); // false


