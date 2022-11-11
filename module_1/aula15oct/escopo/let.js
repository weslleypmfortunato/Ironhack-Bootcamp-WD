/*
- se eu usar um let dentro do bloco, ele vai ser acessível apenas dentro do bloco
- com o let não é possível redeclarar uma função. Vc pode alterar o valor dela, mas não redeclarar
*/


// for (let i = 0; i < 10; i++) {
//   console.log(`iteração ${i}`)
// }

// console.log(`Fora do loop ${i}`)


let name = 'Manoel'

if (true) {
  let name = 'Maria'
  console.log(`Name dentro do if: ${name}`)
}

console.log(`Name fora do if: ${name}`)