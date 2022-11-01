let str = 'This is a string';
let rev = '';

// 1
for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev;
}

console.log(`reverse of '${str}' is '${rev}'`);

// 2
rev = '';
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
console.log(`reverse of '${str}' is '${rev}'`);