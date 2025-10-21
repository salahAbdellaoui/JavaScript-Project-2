/* script.js
   All functions requested:
   - Strings: reverseString, countCharacters, capitalizeWords
   - Arrays: findMax, findMin, sumArray, filterArray
   - Math: factorial, isPrime, fibonacci
   Also wiring to the HTML UI.
*/

// -------------------- String Functions --------------------
function reverseString(str) {
  // split -> reverse -> join
  return str.split('').reverse().join('');
}

function countCharacters(str) {
  return str.length;
}

function capitalizeWords(sentence) {
  if (!sentence) return '';
  return sentence
    .split(' ')
    .map(word => word.length ? word[0].toUpperCase() + word.slice(1) : '')
    .join(' ');
}

// -------------------- Array Functions --------------------
function findMax(arr) {
  if (!arr.length) return undefined;
  return Math.max(...arr);
}

function findMin(arr) {
  if (!arr.length) return undefined;
  return Math.min(...arr);
}

function sumArray(arr) {
  return arr.reduce((s, v) => s + v, 0);
}

// filterArray takes an array and a callback condition
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// -------------------- Math Functions --------------------
function factorial(n) {
  if (n < 0) return undefined; // not defined
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  while (seq.length < n) {
    const next = seq[seq.length - 1] + seq[seq.length - 2];
    seq.push(next);
  }
  return seq;
}

// -------------------- UI Wiring --------------------
document.addEventListener('DOMContentLoaded', () => {
  // Reverse
  document.getElementById('rev-btn').addEventListener('click', () => {
    const val = document.getElementById('rev-input').value;
    document.getElementById('rev-res').textContent = reverseString(val);
  });

  // Count chars
  document.getElementById('count-btn').addEventListener('click', () => {
    const val = document.getElementById('count-input').value;
    document.getElementById('count-res').textContent = countCharacters(val);
  });

  // Capitalize
  document.getElementById('cap-btn').addEventListener('click', () => {
    const val = document.getElementById('cap-input').value;
    document.getElementById('cap-res').textContent = capitalizeWords(val);
  });

  // Array operations
  document.getElementById('arr-run').addEventListener('click', () => {
    const txt = document.getElementById('arr-input').value.trim();
    const arr = txt === '' ? [] : txt.split(',').map(s => Number(s.trim())).filter(x => !Number.isNaN(x));
    const max = findMax(arr);
    const min = findMin(arr);
    const sum = sumArray(arr);
    const evens = filterArray(arr, n => n % 2 === 0);
    document.getElementById('arr-res').innerHTML =
      `Array: [${arr.join(', ')}] <br> Max: ${max} <br> Min: ${min} <br> Sum: ${sum} <br> Evens: [${evens.join(', ')}]`;
  });

  // Factorial & prime
  document.getElementById('fact-run').addEventListener('click', () => {
    const n = Number(document.getElementById('fact-input').value);
    const fact = factorial(n);
    const prime = isPrime(n);
    document.getElementById('fact-res').innerHTML = `Factorial(${n}) = ${fact} <br> isPrime(${n}) = ${prime}`;
  });

  // Fibonacci
  document.getElementById('fib-run').addEventListener('click', () => {
    const n = Number(document.getElementById('fib-input').value);
    const seq = fibonacci(n);
    document.getElementById('fib-res').textContent = `[${seq.join(', ')}]`;
  });

  // Run some example tests in console for quick verification
  console.group('Example function outputs');
  console.log('reverseString("hello") =>', reverseString('hello'));
  console.log('countCharacters("abc def") =>', countCharacters('abc def'));
  console.log('capitalizeWords("hello world") =>', capitalizeWords('hello world'));
  console.log('findMax([10,25,3]) =>', findMax([10,25,3]));
  console.log('findMin([10,25,3]) =>', findMin([10,25,3]));
  console.log('sumArray([1,2,3]) =>', sumArray([1,2,3]));
  console.log('filterArray([1,2,3,4], n => n%2==0) =>', filterArray([1,2,3,4], n => n%2==0));
  console.log('factorial(5) =>', factorial(5));
  console.log('isPrime(17) =>', isPrime(17));
  console.log('fibonacci(7) =>', fibonacci(7));
  console.groupEnd();
});
