/*
- retorna uma nova array
*/

const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
]

// vamos usar o filter para deixar só os preços 

const precosFilter = precos.filter(preco => {
  if (preco.includes("R$")) return true
  return false
})

console.log(precosFilter)




// vamos usar o filter para retornar os números pares
const numbers = [1, 2, 3, 4, 5, 6, 78, 900, 3456, 78889]

const evenNumbers = numbers.filter(num => {
  return num % 2 === 0
})

console.log(evenNumbers)

