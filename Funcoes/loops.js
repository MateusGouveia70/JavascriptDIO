// if/else
function numeroPositivo(num) {
  const ehNegativo = num < 0

  if (ehNegativo) {
    return false
  }

  return true
}

console.log(numeroPositivo(2))

function numeroPositivo2(num) {
  const ehNegativo = num < 0
  const maiorQueDez = num > 10

  if (ehNegativo) {
    return console.log('Esse número é negativo!')
  } else if (!ehNegativo && maiorQueDez) {
    console.log('Esse número é positivo e maior que 10!')
  }

  return 'Esse número é positivo!'
}

console.log(numeroPositivo2(2))
console.log(numeroPositivo2(-2))
numeroPositivo2(40)

// Switch/case
// Equivale a uma comparação de tipo e valor (===)
// Sempre precisa de um valor "default"
// Ideal para quando se preisa comparar muitos valores

function getAnimal(id) {
  switch (id) {
    case 1:
      return 'cão'
    case 2:
      return 'gato'
    case 3:
      return 'pássaro'
    default:
      return 'peixe'
  }
}

console.log(getAnimal(1))
console.log(getAnimal(3))
console.log(getAnimal(''))

// for in ...
function forInExemplo(obj) {
  for (prop in obj) {
    console.log(prop)
  }
}

function forInExemplo2(obj) {
  for (prop in obj) {
    console.log(obj[prop])
  }
}

const objeto = {
  nome: 'Mateus',
  idade: 27,
  cidade: 'Recife'
}

forInExemplo(objeto)
forInExemplo2(objeto)

// For...of
function logLetras(palavra) {
  for (letra of palavra) {
    console.log(letra)
  }
}

function logNumeros(nums) {
  for (num of nums) {
    console.log(num)
  }
}

const palavra = 'Abacaxi'
const nums = [30, 20, 263, 6]

console.log(logLetras(palavra))
console.log(logNumeros(nums))

// while
function exemploWhile() {
  let num = 0

  while (num <= 5) {
    console.log(num)
    num++
  }
}

console.log(exemploWhile())
