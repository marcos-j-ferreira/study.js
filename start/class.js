/*Em JavaScript, uma classe é uma estrutura que define como criar um tipo de objeto específico,
especificando quais propriedades e métodos o objeto terá. Ela serve como um modelo para a criação
de objetos com características semelhantes. As classes permitem organizar o código de forma mais modular
e reutilizável, seguindo o paradigma de programação orientada a objetos. */

class persona{
    constructor(nome, age){
        this.nome = nome;
        this.age = age
    }

    app(){
        console.log(`Eu sou ${this.nome} tenho ${this.age} anos`)
    }
}

const nome = new persona('Marcos', 19)

nome.app()