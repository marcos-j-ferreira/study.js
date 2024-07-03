// Uma função é uma caixa de código que será executado quando chamada, podendo ou não receber parâmetros


function example(){
    console.log("Hello World!")
}

example()


setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);