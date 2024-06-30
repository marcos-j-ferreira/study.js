/*In JavaScript, loops are used to execute a block of code repeatedly for a specified number of times. 
Here's a brief overview of how loops work in JavaScript:*/


// type 01: 

for (initialization; condition; increment) {
    // code to execute
}

// exemplo: 

for(let i = 0; i <= 5; i++){
    console.log(i)
}

// type 02:

while (condition) {
    // code to execute
}

// exemplo:

let number = 0

while(number <= 10){
    console.log(number)
    number++
}

// type 03:

do {
    // code to execute
} while (condition);

// exemplo 

let counter = 0
do{
    console.log(counter)
    counter++
} while(counter <= 10);


//type 04:

for (variable of iterable) {
    // code to execute
}

//exemplo 

const name = "Marcos"

for(const a of name){
    console.log(a)
}