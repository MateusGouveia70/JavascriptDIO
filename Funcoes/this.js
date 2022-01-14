// A palavra reservada this é uma referência de contexto.
// No exemplo, this refere-se ao objeto pessoa.

const pessoa = {
  firstName: 'Mateus',
  lastName: 'Gouveia',
  id: 1,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
  getId: function () {
    return this.id
  }
}

console.log(pessoa.fullName())
console.log(pessoa.getId())

/*
Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

  Contexto                      Referência
  Em um objeto(método)       Próprio objeto dono de método
    Sozinha                  Objeto global(em navegadores, window)
    Função                   Objeto global
    Evento                   Elemento que recebeu o evento
*/

// Manipulando seu valor

const pessoa2 = {
  name: 'Rafa'
}

const animal = {
  name: 'Ralph'
}

function getSomeThing() {
  console.log(this.name)
}

getSomeThing(this.name)
getSomeThing.call(pessoa2)
getSomeThing.call(animal)

// ****//

const myObj = {
  num1: 2,
  num2: 4
}

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b)
}

soma.call(myObj, 1, 5)
/*****/
// Apply
// Clona a estrutura da função onde é chamada e aplica o valor do onjeto passado como parâmetro.
soma.apply(myObj, [1, 5])

const retornaNomes = function () {
  console.log(this.name)
}

let bruno = retornaNomes.bind({ name: 'Bruno' })

bruno()
