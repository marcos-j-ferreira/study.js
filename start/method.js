/* Em JavaScript, métodos são funções que estão associadas a objetos.
 Eles permitem que os objetos executem ações específicas ou calculem valores relacionados aos dados que o 
 objeto contém. Os métodos são definidos como propriedades de objeto e podem ser chamados usando a notação 
 de ponto (objeto.metodo()) para realizar operações sobre o objeto ou seus dados.
*/

const nome = {
    name:"Marcos",
    lastname:"Júnior",
    fullname: function(){
        console.log(this.name+" "+ this.lastname)
    }
}

