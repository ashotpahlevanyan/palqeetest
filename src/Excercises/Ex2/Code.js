// 2. What is the output of the code below? Please explain your result (Note: This is using ES6 syntax)


let person = "John Malkovich"



(() => {

    console.log("Original person was " + person)



    person = "Drew Barrymore"



    console.log("New person " + person)

})()

/**
 * TypeError: "John Malkovich" is not a function
 * there might be a semicolon on the line 4
 * the error comes as before IIFE you should have a semicolon,
 * this is to prevent executing the code before as argument to IIFE
 * if we add that semicolon, then since we have a "let" for the person variable,
 * then it will be used inside the IIFE and in reassignment, so the result will be
 * Original person was John Malkovich
 * New person Drew Barrymore
 * */
