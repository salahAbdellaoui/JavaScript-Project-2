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
