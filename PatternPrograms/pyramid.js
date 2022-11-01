/**
 * 1. Pyramid 
            * 
          * * * 
        * * * * * 
      * * * * * * * 
    * * * * * * * * *
 */

let str = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > i; j--) {
        str += '  ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
        str += '* '
    }
    str += '\n';
}

console.log(str);

console.log('_________________________________________\n\n');

/**
 * 2. Inverted Pyramid 
    * * * * * * * * * 
      * * * * * * * 
        * * * * * 
          * * *
            *
 */

str = '';

for (let i = 5; i >= 1; i--) {
    for (let j = 5; j > i; j--) {
        str += '  ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
        str += '* '
    }
    str += '\n';
}

console.log(str);