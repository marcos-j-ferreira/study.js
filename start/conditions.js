// In programming, conditions refer to statements that evaluate to either True or False, and are used to control the flow of a program's execution.

const age = 18

if(age >= 18){
    console.log("of legal age")
}else{
    console.log("minor")
}

// can also be written on one line.

age >= 18?console.log("of legal age"):console.log("minor")

// can also has more of a condition

if(age > 50){
    console.log("old")
}else if(age > 18){
    console.log("young")
}else{
    console.log("children")
}