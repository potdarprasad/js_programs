/* 1. Square
    * * * * * 
    * * * * * 
    * * * * * 
    * * * * * 
    * * * * *
*/
let str = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        str += '* ';
    }
    str += '\n';
}

console.log(str);

/** 
 * 2. Hollow Square
    * * * * * 
    *       * 
    *       * 
    *       *
    * * * * *
*/

str = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 5 || j == 1 || j == 5) {
            str += '* ';
        } else {
            str += '  ';
        }
    }
    str += '\n';
}

console.log(str);


/** 
 * 3. Hollow Square With Digonals
    * * * * *
    * *   * *
    *   *   *
    * *   * *
    * * * * *
*/

str = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 5 || j == 1 || j == 5 || i == j || j == 5 - i + 1) {
            str += '* ';
        } else {
            str += '  ';
        }
    }
    str += '\n';
}

console.log(str);