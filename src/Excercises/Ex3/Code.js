// 3. What is the output of the code below? Please explain your result (Note: This is using ES6 syntax)



const newObject = {

    fruit: "strawberry",

    func: () => {

        const self = this

        console.log("outer func: this.fruit = ", this.fruit)

        console.log("outer func: self.fruit = ", self.fruit)

        (() => {

            console.log("inner func: this.fruit = ", this.fruit)

            console.log("inner func: self.fruit = ", self.fruit)

        })()

    }

}



newObject.func()

/**
 * The result will be :
 * outer func: this.fruit = undefined
 * outer func: self.fruit = undefined
 *
 * this is because in arrow functions there is no binding of "this".
 * in regular functions "this" is the object that calls the function, e.g. document, window...
 * in arrow functions "this" represents the object that defines the arrow function
 * */
