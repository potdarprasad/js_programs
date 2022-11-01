/*
    What is string?
        String is sequence of characters enclosed within single quote(') 
        or double quote(").
*/
let str = 'This is a single quoted string';
console.log(str);

str = "This is a double quoted string";
console.log(str);

/* 
    Escape Sequences:
    - An escape sequence contains a backslash (\) symbol followed by one of the 
    escape sequence characters or an octal or hexadecimal number. 
    - A hexadecimal escape sequence contains an x followed by one or more 
    hexadecimal digits (0-9, A-F, a-f). 
    - An octal escape sequence uses up to three octal digits (0-7).
    JS Escape Characters
    \' — Single quote
    \" — Double quote
    \\ — Backslash
    \b — Backspace
    \f — Form feed
    \n — New line
    \r — Carriage return
    \t — Horizontal tabulator
    \v — Vertical tabulator
*/

str = 'Used "single quote" in \'single quoted\' string';
console.log(str);

str = "Used 'double quote' in \"single quoted\" string";
console.log(str);