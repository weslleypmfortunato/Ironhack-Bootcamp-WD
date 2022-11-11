function evenOdd(num) {
  if (num % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}


const numbers = [1, 2, 3, 4, 5, 6, 78, 900, 3456, 78889]

// const evenNumbers = []

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     return evenNumbers.push(numbers[i])
//   }
// }


const evenNumbers = numbers.filter(number => {
  return number % 2 === 0 // basicamente é "se isso aqui for true, retorne o número"
})






console.log(evenNumbers)