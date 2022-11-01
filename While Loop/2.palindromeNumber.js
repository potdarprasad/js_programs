let number = 242;
let rev = 0;
let copy_of_number = number;

while (number > 0) {
    let rem = number % 10;
    rev = rev * 10 + rem;
    number = parseInt(number / 10);
}

console.log(`${copy_of_number} is ${copy_of_number == rev ? '' : 'Not'} Palindrome Number`);