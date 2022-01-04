// O que sao arrays

// Declaracao
/*
let array = ['string', 1, true]
console.log(array)
*/

// Pode guardar varios tipos de dados
// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
//console.log(array[3])

// Métodos

/*
foreach() - itera um array
push() - add item no final do array
pop() - remove o item no final do array
shift() - remove o item no inicio do array
unshift() - add item no inicio do array
indexOf() - retorna o índice de um valor
splice() - remove ou substitui um item pelo índice
slice() - retorna uma parte de um array existente


// foreach
array.forEach(function (item, index) {
  console.log(item, index)
})

array.push('NovoItem')
array.pop()
array.shift()
array.unshift('Unshift')
console.log(array.indexOf(true))
array.splice(0, 3)
let novoArray = array.slice(0, 3)
console.log(array)
console.log(novoArray)
*/

// Objetos
let object = {
  string: 'string',
  number: 1,
  boolean: true,
  array: ['array', 'array2', 3],
  obejectInterno: {
    objectInteno: 'ObjetoInterno'
  }
}

console.log(object.array[2])

var string = object.string
console.log(string)

var array = object.array
console.log(array)

var { string, number, boolean } = object
console.log(string)
console.log(number)
console.log(boolean)
