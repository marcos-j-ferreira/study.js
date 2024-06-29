//To declare a variable you need to use let or const in front and assign a value.

const name = "Marcos Júnior"

let age = 19

//the const variable its value cannot be changed, the let can be updated as needed; both forms can be manipulated.


// also can use function in a variable
//anonymous functions 

let even = function(number) {
    number % 2 == 0 ? console.log("par = "+number) : console.log("Impar = "+ number)
}

for(let i = 10; i > 0; i--){
    even(i)
}

/// has a well-compressed syntax

let agge = (a) => a >= 18?console.log("Maior"):console.log("menor")

age(17)