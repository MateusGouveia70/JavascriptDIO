/*
1. Crie uma função que recebe o array e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais a 
média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/
const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Sofia',
    nota: 9,
    turma: '1B'
  },
  {
    nome: 'Paulo',
    nota: 6,
    turma: '2C'
  },
  {
    nome: 'Sofia',
    nota: 3.5,
    turma: '3A'
  }
]

function alunosAprovados(array, media) {
  let aprovadosMedias = []
  for (let i = 0; i < array.length; i++) {
    const { nota, nome } = array[i]

    if (nota >= media) {
      aprovadosMedias.push(nome)
    }
  }
  return aprovadosMedias
}

console.log(alunosAprovados(alunos, 5))
