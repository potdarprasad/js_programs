let number = 153;
let sum = 0;
let copy_of_number = number;

while (number > 0) {
    let rem = number % 10;
    sum = sum + rem ** 3;
    number = parseInt(number / 10);
}

console.log(`${copy_of_number} is ${copy_of_number == sum ? '' : 'Not'} Armstrong Number`);