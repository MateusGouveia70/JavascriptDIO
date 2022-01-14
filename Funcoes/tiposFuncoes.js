// ex
function exemplo(parametros) {}

function exemplo2(parametros) {
  // instrucoes
  // return
}

/*
// Anônima
  const soma = function (a, b) {
  return a + b
}

soma(1, 2) // 3
soma(5, 4) // 9
*/

/*
// Atoinvocável
// IIFE (Immediately Invoked Function Expression)
// Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada

(
  function(){
    let name = "Digital Innovation One"
    return name
  }
)()
*/

/*
(
  function (a, b) {
    return a + b
  }
)(1, 2)

const soma3 = (function () {
  return a + b
})(1, 2)

console.log(soma3)

*/

// Callbacks
// Uma função passada como argumento para outra

const calc = function (operacao, n1, n2) {
  return operacao(n1, n2)
}

const soma = function (n1, n2) {
  return n1 + n2
}

const subtracao = function (n1, n2) {
  return n1 - n2
}

const resultSoma = calc(soma, 5, 4)
const resulSub = calc(subtracao, 5, 4)

console.log(resultSoma)
console.log(resulSub)
