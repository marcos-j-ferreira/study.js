
let calculator = function(operation, num1, num2){
    switch(operation){
        case "+":
            return num1 + num2
            break;
        case "-":
            return num1 - num2 
            break;
        case "/":
            return num1 / num2
            break;
        case "*":
            return num1 * num2
            break;
        default:
            console.log("Digite um número valido");
    }
}
console.log(calculator("*",10,20))


//check if a number is even in the shortest way possible

let aa = (number) => number %2 ==0;


// second way
let numberEven = function(number) {
    return number % 2 == 0
  }
console.log(numberEven(10))
  