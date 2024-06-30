/* The switch statement evaluates an expression, compares its results with case values, and executes the
 statement associated with the matching case value.*/

 //The following illustrates the syntax of the switch statement:

 switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    case value3:
        statement3;
        break;
    default:
        statement;
}


// simple calculator

const firstNumber = 10
const secondNumber = 10
const operation = "*"
let result = 0

switch (operation) {
  case "+":
    result = firstNumber + secondNumber
    break;
  case "-":
    result = firstNumber - secondNumber
    break;
  case "*":
    result = firstNumber * secondNumber
    break;
  case "/":
    result = firstNumber / secondNumber
    break;
  default:
    result = "write a valid number"
}

console.log(result)
