 
 # JS Functions Demo

## What
A small project containing commonly requested JavaScript functions:
- String: reverse, count characters, capitalize words
- Array: find max/min, sum, filter
- Math: factorial, prime check, fibonacci sequence

## Files
- `index.html` — demo page and UI
- `script.js` — all functions and UI wiring
- `README.md` — this file

## How to run
1. Open `index.html` in a web browser (double-click or use Live Server in VS Code).
2. Use the inputs and buttons to test each function.
3. Open the browser console to see example outputs that run on page load.

## Notes
- All functions are implemented in plain JavaScript (no libraries).
- The UI is simple for demonstration; you can extend it or extract functions for other projects.

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
