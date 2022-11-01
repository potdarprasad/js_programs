let str = 'This is a string data.';
let wordCount = 0;
for (let i = 0; i <= str.length; i++) {
    if (str[i] == ' ' || i == str.length) {
        wordCount++;
    }
}

console.log(`${str} contains ${wordCount} words`)