/**
    * 
    * * 
    * * * 
    * * * * 
    * * * * *
    * * * * 
    * * * 
    * *
    *
 */
let str = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    str += '\n';
}


for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    str += '\n';
}

console.log(str);