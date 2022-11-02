let number = 153;
let sum = 0;
let lastDigit = number % 10;
let firstDigit = number;
while (firstDigit >= 10) {
    firstDigit = parseInt(firstDigit / 10);
}

console.log(`First Digit: ${firstDigit} Last Digit: ${lastDigit}, Sum of First Digit And Last Digit ${firstDigit + lastDigit}`);