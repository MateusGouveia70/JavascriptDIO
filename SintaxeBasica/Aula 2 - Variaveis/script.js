// tipos primitivos

// boolean
var vOuF = false
console.log(vOuF)
console.log(typeof vOuF)

// number
var numeroQualquer = 1
console.log(typeof numeroQualquer)

// string
var nomeQualquer = 'Mateus'
console.log(typeof nomeQualquer)

// variaveis var let const

// var
// Escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
var variavel = 'Mateus'
variavel = 'Gouveia'
console.log(variavel)

// let
// Escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
var variavel2 = 'Mateus'
variavel2 = 'Gouveia'
console.log(variavel2)

// const
// Escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado;
const constante = 'Mateus'
console.log(constante)

var escopoGlobal = 'global'
console.log(escopoGlobal)

function escopoLocal() {
  let escopoLocalInterno = 'local'
  console.log(escopoLocalInterno)
}

escopoLocal()
