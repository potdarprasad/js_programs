// Simple Approach Using Array

let str = 'this is a string';

let frequency = [];

for (let i = 0; i < str.length; i++) {
    frequency[i] = 0;
    for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
            frequency[i]++;
        }
    }
}

for (let index in str) {
    console.log(`${str[index]} repeated ${frequency[index]}`);
}

// Second Approach Using Object
let frequencyObject = {};

for (let i = 0; i < str.length; i++) {
    // if (frequencyObject[str[i]]) {
    //     frequencyObject[str[i]]++;
    // } else {
    //     frequencyObject[str[i]] = 1;
    // }

    frequencyObject[str[i]] ? frequencyObject[str[i]]++ : frequencyObject[str[i]] = 1;
}

console.log(frequencyObject);

for(let key in frequencyObject){
    console.log(`${key} repeated ${frequencyObject[key]} times`);
}