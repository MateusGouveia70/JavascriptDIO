// Lista iterável de elementos

let array = []

console.log(array)

array.push(3)
array.push(2)
array.pop() // retira o utimo elemento
array.push(2)
array.push(5)
array.shift() // retira o primeiro elemento
array.unshift(1) // adiciona no começo do array
array.includes(3)

for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}
console.log(array)

console.log(array.includes(3))
console.log(array.some(item => item === 5))
array.reverse()
console.log(array)
