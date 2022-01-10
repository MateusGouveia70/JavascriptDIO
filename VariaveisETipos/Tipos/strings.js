let nome = 'João'
let sobrenome = 'Pedro'

let concatenado = nome.concat(sobrenome)
let tamanho = concatenado.length

let exemplo = new String('blablabla')

let frase = 'Olá, tudo bem?'
let fraseReplace = frase.replace(',', '!')

console.log(concatenado)

console.log(typeof nome)
console.log(typeof sobrenome)
console.log(typeof concatenado)
console.log(`length: ${tamanho}`)
console.log(`exemplo: ${typeof exemplo}`)
console.log(`split(""): ${frase.split('')}`)
console.log(`split(" "): ${frase.split(' ')}`)
console.log(`includes("tudo"): ${frase.includes('tudo')}`)
console.log(`startsWith("O"): ${frase.startsWith('O')}`)
console.log(`endsWith("?"): ${frase.endsWith('?')}`)
console.log('Replace: ' + fraseReplace)
