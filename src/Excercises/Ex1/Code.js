// 1. What is the output of the code below? Please explain your result (Note: This is using ES6 syntax)


let var = 1




if ( f() => {}) {

    y += typeof f

}



console.log('y ***', y)

/**
 * Line 4: var is unexpected token as it is a reserved keyword,
 * also it is not advised to use var at all, let came as new var.
 * var is function scoped while let is block scoped
 * Line 9: there is a mix in the syntax, and Unexpected token on this line,
 * as if we intend to use f as arrow function then it
 * would be f = () => {} or a regular function then f() {}
 * if our intent was to have a code like
 * */

// let y = 1;
// if ( f = () => {}) {
//     y += typeof f;
// }
//
// console.log('y ***', y);

//then the result would be:
// y *** 1function
