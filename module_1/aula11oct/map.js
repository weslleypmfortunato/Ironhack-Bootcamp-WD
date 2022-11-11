const arr = [1, 2, 3]

// for (let i = 0; i < arr.length; i++) {
//   const dobro = arr[i] * 2
//   arrDobro.push(dobro)
// }

// arr.forEach(number => {
//   const dobro = number * 2
//   arrDobro.push(dobro)
// })


//o map vai executar o que foi declarado e vai retornar um novo array (ele não altera o array original)
// const arrDobro = arr.map(number => number * 2)

// const frutas = ['banana', 'pera', 'uva']
// const frutasCaixaAlta = frutas.map(frutas => {
//   return frutas.toUpperCase()
// })


// console.log(frutas)
// console.log(frutasCaixaAlta

const data = [
  {
    city: 'São Paulo',
    position: 100
  },

  {
    city: 'Rio de Janeiro',
    position: 200
  },

  {
    city: 'Pindamonhangaba',
    position: 500
  }
]

const dataReviewed = data.map(item => {
   item.position = item.position * 10
   return item
})

console.log(dataReviewed)



