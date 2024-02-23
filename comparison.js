
// Напишите функцию comparison, которая принимает два объекта в качестве 
// аргументов и сравнивает их содержимое. Функция должна возвращать true,
//  если объекты имеют одинаковые ключи и значения для каждого ключа, и 
//  false в противном случае.

function comparison(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const values1 = Object.values(obj1);
  const values2 = Object.values(obj2);

 
  if (keys1.length !== keys2.length) {
    return false;
  }


  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }
  }


  for (let value of values1) {
    if (!values2.includes(value)) {
      return false;
    }
  }

  return true;
}

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { a: 1, b: 2, c: 3 };
const object3 = { a: 1, b: 2, c: 4 };

console.log(comparison(object1, object2)); 
console.log(comparison(object1, object3)); 