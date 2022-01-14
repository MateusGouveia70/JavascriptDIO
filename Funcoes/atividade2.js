/*
This
Data a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios
objetos para esta atividade!
*/

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos}
  anos de idade.`
}

const pessoa = {
  nome: 'Mateus',
  idade: 27,
  id: 63
}

const pessoa2 = {
  nome: 'Carla',
  idade: 10,
  id: 6
}

const animal = {
  nome: 'Sherek',
  idade: 20,
  raca: 'Pug'
}

console.log(calculaIdade.call(pessoa2, 39))
console.log(calculaIdade.call(animal, 7))
console.log(calculaIdade.apply(animal, [7]))
