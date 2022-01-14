// valores padrão

// pré = ES2015
function expoencial(array, num) {
  if (num === undefined) {
    num === 1
  }

  const result = []

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] ** num)
  }

  return result
}

console.log(expoencial([1, 2, 3, 4]))
console.log(expoencial([1, 2, 3, 4], 2))

// Pós-ES2015
function expoencial2(array, num = 1) {
  const result = []

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] ** num)
  }

  return result
}

console.log(expoencial2([1, 2, 3, 4]))
console.log(expoencial2([1, 2, 3, 4], 2))

// Objeto "arguments"
// Um array com todos os parâmetros passados quando a função foi invocada.
function findMax() {
  let max = -Infinity // tanto negativos quando possitivos

  for (let i = 0; i < arguments.length; i++) {
    // arguments = objeto, vai retornar a lista de parametros que foram passado
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  return max
}

let numeroMax = findMax(1, 2, 3, 45, 69, 4, 23, 1)
console.log(numeroMax)

function showArguments() {
  return arguments
}

console.log(
  showArguments(
    1,
    9,
    [5, 6, 7, 10],
    { Nome: 'Mateus', Sobrenome: 'Gouveia' },
    5
  )
)

// Arrays
// Spread: uma forma de lidar separadamente com elementos
function sum(x, y, z) {
  return x + y + z
}

const numbers = [1, 3, 2]

console.log(sum(...numbers)) // 1 se torna x, 3 se torna y e z se torna 2

// O que era parte de um array (numbers) se torna um elemento independente.

// Rest: combina os argumentos em um array

function confereTamanho(...args) {
  console.log(args.length)
}

console.log(confereTamanho()) //0
console.log(confereTamanho(1, 2)) //2
console.log(confereTamanho(3, 4, 5)) //3

// O que era um elemento independente se torna parte de uma array.

// Objetos

// Object Destructuring

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'Mateus',
    lastName: 'Gouveia'
  }
}

function userId({ id }) {
  return id
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
  return `${first} ${last}`
}

console.log(userId(user))
console.log(getFullName(user))

// Entre chaves {}, podemos filtar apenas os dados que nos interessam em um objeto.
