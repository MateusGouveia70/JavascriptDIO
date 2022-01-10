function comparaNumeros(n1, n2) {
  const primeiraFrase = criaPrimeiraFrase(n1, n2)
  const segundaFrase = criaSegundaFrase(n1, n2)

  return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(n1, n2) {
  var simOuNao = 'não'

  if (n1 === n2) {
    simOuNao = ''
  }

  return `Os números ${n1} e ${n2} ${simOuNao} são iguais.`
}

function criaSegundaFrase(n1, n2) {
  var soma = n1 + n2
  var maior10 = 'maior'
  var maior20 = 'maior'

  if (soma < 10) {
    maior10 = 'menor'
  }

  if (soma < 20) {
    maior20 = 'menor'
  }

  return `Sua soma é ${soma}, que é ${maior10} do que 10 e ${maior20} do que 20.`
}

console.log(comparaNumeros(15, 30))
