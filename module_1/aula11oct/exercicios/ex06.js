/* 
Dada uma matriz de números, filtre os que não são pares e são maiores que 42.
*/

const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

const all = 0
const allOdds = numbers.reverse().filter(oddNum => {
  return (oddNum % 2 === 1 && oddNum > 42)
})

console.log(allOdds)
