/*Regex, ou expressões regulares, em JavaScript são padrões de busca e manipulação de texto extremamente poderosos. Eles permitem:*/



// validação de CPF:

const regex = /^(\d{3}-){3}\d{2}$/

const cpf = '123-123-123-12'

console.log(regex.test(cpf))
//true

// validação do número de telefone:

const rregex = /^\d{2}\.\d{4}\-\d{4}$/

const numberIphone = '12.1234-1234'

console.log(regex.test(numberIphone))
//true

const reg =  /^\d{2}\.(\d{4}){2}$/  // /^\d{2}\.\d{4}\-\d{4}$/

const phone = '48.12341234'

console.log(reg.test(phone))