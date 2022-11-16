// const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18]

// const orderedNumbers = [0, 1, 9, 18, 22, 23, 64, 68, 99, 112, 223]

// const testeSort = numbers.sort()
// console.log(testeSort)

// const sortWithFunction = numbers.sort((a, b) => a + b ) // para fazer na order descresence basta inverter a posição de a + b para b - a
// console.log(sortWithFunction)

// 1 - 2 = -1 quando a é menor que b
// 3 - 1 = 2 -> 1 quando a é maior que b
// 3 - 3 = 0 quando a e b são iguais

// -1
// 0
// 1

const words = ['a', 'casa', 'homem', 'Weslley', 'ceu','batata', 'big mac', 'fruta']

const orderedWords = words.sort()
const descWords = orderedWords.reverse() // para fazer a order reversa
// // ou const descWords = words.sort().reverse() - concatgenando os dois métodos

console.log('1', orderedWords)
console.log('2', descWords)

const wordsByLength = words.sort((a, b) => {
  if (a.length < b.length) return - 1
  else if (a.length > b.length) return 1
  return 0
})

console.log('3', wordsByLength)
console.log('3', wordsByLength.reverse())

// o .sort é um método para ordenar strings. Por isso quando for ordenar números é preciso usar o "a , b"