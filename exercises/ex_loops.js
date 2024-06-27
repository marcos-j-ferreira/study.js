/* Problem 1: Sum of Array Elements

Write a JavaScript program that uses a for loop to calculate the sum of all elements in an array. The array is: */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0

for(let i = 0; i < numbers.length; i++){
sum += numbers[i]
}
console.log(sum)

/* Problem 2: Print Even Numbers

Write a JavaScript program that uses a while loop to print all even numbers from 1 to 20. Your program should print the numbers 2, 4, 6, 8, 10, 12, 14, 16, 18, and 20.*/

let number = 1

while(number <= 20){
    if(number %2 == 0){
        console.log(number)
    }
    number++
}

/* Problem 3: Reverse a String

Write a JavaScript program that uses a for-of loop to reverse a given string. For example, if the input string is "hello", your program should print "olleh". You can use the split() method to convert the string into an array of characters, and then use a for-of loop to iterate over the array in reverse order. */

let string = "hello"

let art = ""

for(let reverse of string.split("").reverse()){
art += reverse
}
console.log(art)
