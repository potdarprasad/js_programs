let number = 2423;
let rev = 0;
let copy_of_number = number;

while (number > 0) {
    let rem = number % 10;
    rev = rev * 10 + rem;
    number = parseInt(number / 10);
}

console.log(`Reverse of ${copy_of_number} is ${rev}`);