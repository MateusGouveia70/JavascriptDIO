// Alguns métodos nativos
/**
 * Number() - para converter valores em números
 * Prompt() - para registrar entradas de usuários
 * Alert() - para mostrar mensagem ao usuário
 * Template String - para usar strings junto com expressões
 */

function calculadora() {
  const operacao = Number(
    prompt(
      '1 - Soma (+)\n2 - Subtracao (-)\n3 - Multiplicação (*)\n4 - Divisão Real (/)\n5 - Divisão Inteiro (%)\n6 - Potenciação (**)'
    )
  )

  if (!operacao || operacao >= 7) {
    alert('Opcção Invalida!')
  } else {
    let n1 = Number(prompt('Digite o primeiro número: '))
    let n2 = Number(prompt('Digite o sengundo número: '))
    let resultado

    function somar() {
      resultado = n1 + n2
      alert(`${n1} + ${n2} = ${resultado}`)
      novaOperacao()
    }

    function subtrair() {
      resultado = n1 - n2
      alert(`${n1} - ${n2} = ${resultado}`)
      novaOperacao()
    }

    function multiplicacao() {
      resultado = n1 * n2
      alert(`${n1} * ${n2} = ${resultado}`)
      novaOperacao()
    }

    function divisaoReal() {
      resultado = n1 / n2
      alert(`${n1} / ${n2} = ${resultado}`)
      novaOperacao()
    }

    function divisaoInteira() {
      resultado = n1 % n2
      alert(`${n1} % ${n2} = ${resultado}`)
      novaOperacao()
    }

    function potenciacao() {
      resultado = n1 ** n2
      alert(`${n1} ** ${n2} = ${resultado}`)
      novaOperacao()
    }

    function novaOperacao() {
      let novaOperacao = Number(
        prompt('Deseja fazer outra operação?\nSim - 1\nNão - 2')
      )
      if (novaOperacao == 1) {
        calculadora()
      } else if (novaOperacao == 2) {
        alert('Obrigado')
      } else {
        alert('Digite uma opção!')
        novaOperacao()
      }
    }

    if (operacao == 1) {
      somar(n1, n2)
    } else if (operacao == 2) {
      subtrair(n1, n2)
    } else if (operacao == 3) {
      multiplicacao(n1, n2)
    } else if (operacao == 4) {
      divisaoReal(n1, n2)
    } else if (operacao == 5) {
      divisaoInteira(n1, n2)
    } else if (operacao == 6) {
      potenciacao(n1, n2)
    }
  }
}

calculadora()
