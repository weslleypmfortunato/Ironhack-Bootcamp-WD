const numbers = [1, 2, 3, 4, 5, 6]

// let soma = 0 // seria o acumulador
// for (i = 0; i < numbers.length; i++) {
//   soma += numbers[i] // seria o valor atual
// }



// o reduce retorna um número só.
let soma = numbers.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual
})

let produto = numbers.reduce((acumulador, valorAtual) => {
  return acumulador * valorAtual
})

console.log(produto)