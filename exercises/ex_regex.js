// validar um CPF

let cpf = prompt("Digite seu cpf")

const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

console.log(regex.test(cpf))

console.log(cpf)