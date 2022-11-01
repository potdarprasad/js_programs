/*
    Template Literals
        - Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, 
        string interpolation with embedded expressions, and special constructs
        called tagged templates.

        - Template literals are sometimes informally called template strings, 
        because they are used most commonly for string interpolation 
        (to create strings by doing substitution of placeholders). 
        However, a tagged template literal may not result in a string; 
        it can be used with a custom tag function to perform whatever 
        operations you want on the different parts of the template literal.

        - We can use any quote inside template literals.

        - Template literals allows multiline strings.

        - Template literals provide an easy way to interpolate variables 
        and expressions into strings.The method is called string interpolation.
        Interpolation is added using ${....}

            Syntax:
                `string text`

            `string text line 1
            string text line 2`

            `string text ${expression} string text`

*/
const PI = 3.14;
let str = `this is template literal,
the string of template literal can be multiline
also we can interpolate values or variables in this using \${}
${5 * 6}, ${PI * 5 * 5}`;

console.log(str);