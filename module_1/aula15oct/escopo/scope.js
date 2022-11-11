/* 
- dentro da função vc acessa uma variável que está fora, mas fora da função vc não acessa uma variável que está dentro de uma função
- usando o "var" era possível acessar uma variável de uma função mesmo de fora da função
*/

// const name = 'Joe'

// function sayHello() {
//   const message = 'Hello'
//   return message
// }

// console.log('1', name)
// console.log('2', message)


let variavel = 1

function teste() {
  let novaVariavel = 2
  console.log('dentro',variavel)
}
teste()
console.log('fora', novaVariavel)