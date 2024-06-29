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