/**
 * 1.
    * 
    * * 
    * * * 
    * * * * 
    * * * * *
 */
let str = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    str += '\n';
}

console.log(str);

/**
 * 2.
    * * * * * 
    * * * * 
    * * * 
    * *
    *
 */
str = '';

for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    str += '\n';
}

console.log(str);

/**
 * 3.
            *
          * *
        * * *
      * * * *
    * * * * *
 */
str = '';

for (let i = 5; i >= 1; i--) {
    for (let j = 1; j < i; j++) {
        str += '  ';
    }
    for (let j = 5; j >= i; j--) {
        str += '* ';
    }
    str += '\n';
}

console.log(str);

/**
 * 4.
    * * * * *
      * * * *
        * * *
          * *
            *
 */
str = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j < i; j++) {
        str += '  ';
    }
    for (let j = 5; j >= i; j--) {
        str += '* ';
    }
    str += '\n';
}

console.log(str);