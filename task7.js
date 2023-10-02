
function reverseNumber(x) {
  let reversed = 0;

  while (x !== 0) {
    // Get the last digit of x
    let lastDigit = x % 10;

    // Add the last digit to the reversed number (shift left by one decimal place)
    reversed = reversed * 10 + lastDigit;

    // Remove the last digit from x
    x = Math.floor(x / 10);
  }

  return reversed;
}

// Example usage:
let x = 32243;
let reversed = reverseNumber(x);
console.log(reversed); // Output: 34223
