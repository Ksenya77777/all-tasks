// Написать функцию которая принимает 1 аргумент, этот аргумент 
// - число в последовательности фиббоначи которое нужно вернуть без рекурсии.
// Например:

// fib(5) вернет - 8
// fib(8) вернет - 34


function fib(n) {
  let arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    let res = arr[arr.length - 2] + arr[arr.length - 1];
    arr.push(res);
  }
  return arr[arr.length-1];
}

console.log(fib(5));
console.log(fib(8));

