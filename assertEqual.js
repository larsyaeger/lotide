function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

//test code
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(-5, -5);
assertEqual(-5, -6);
assertEqual(-10, 0);
assertEqual('bob', 'Bob');
assertEqual('Bill', 'John');
assertEqual(0, 0);