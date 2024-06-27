/*Problem 1: Grade Checker

Write a program that takes a student's score as input and prints out their grade based on the following conditions:

If the score is 90 or above, print "A"
If the score is 80-89, print "B"
If the score is 70-79, print "C"
If the score is 60-69, print "D"
If the score is below 60, print "F" 
*/

const grade = 10

if(grade >= 90){
    console.log("A")
}else if( grade >= 80){
    console.log("B")
}else if(grade >= 70){
    console.log("C")
}else if(grade >= 60){
    console.log("D")
}else{
    console.log("F")
}


/*
Problem 2: Traffic Light Simulator

Write a program that takes the current traffic light color as input and prints out the next light color based on the following conditions:

If the current light is "Red", print "Green"
If the current light is "Green", print "Yellow"
If the current light is "Yellow", print "Red"
*/

const light = "Green"

if(light == "Red"){
    console.log("Green")
}else if(light == "Green"){
    console.log("Yellow")
}else{
    console.log("Red")
}

/*
Problem 3: Age Checker

Write a program that takes a person's age as input and prints out whether they are eligible to vote based on the following conditions:

If the age is 18 or above, print "Eligible to vote"
If the age is below 18, print "Not eligible to vote"
*/

const age =18 

age>=18?console.log("Eligible to vote"):console.log("Not eligible to vote")