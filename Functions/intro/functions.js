/**
 * Function: 
 *  - Function is block of code written to perform particular task this block 
 *    of code is known as function definition.
 * 
 *  - Function is executed only when it is called.
 *  
 *  - Based on parameter and return type function is divided into 4 types:
 *      i. With Parameter And With Return Type
 *     ii. With Parameter And Without Return Type
 *    iii. Without Parameter And With Return Type
 *     iv. Without Parameter And Without Return Type
 * 
 *  - Function Syntax:
        function name(parameter1, parameter2, parameter3) {
            //code to be executed
        }

        i. Function parameters are listed inside the parentheses () in 
        the function definition.

        ii. Function arguments are the values received by the function when 
        it is invoked.

        iii.Inside the function, the arguments (the parameters) behave as local 
        variables.
*   
*   - Function Return:
        i. 'return' keyword is used to return value from function.
        ii. When return keyword is encountered the function stops execution(i.e. exits)
        iii. We can direct use 'return;' to exit the function
*/

function areaOfCircle(r) {
    return 3.14123 * r * r;
}

// from line number 15 to 17 function is defined that is known function definition
// where r is function parameter

let r = 4;
console.log(`Area of circle with radius ${r} = ${areaOfCircle(4)}`);
// on line no. 23 we called areaOfCircle function with argument 4. 