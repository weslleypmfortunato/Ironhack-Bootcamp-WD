/*
function dobro(num) {
  const result = 2 * num
  return result
}
*/

/*
const dobro = function(num) {
  return 2 * num
}
*/


const dobro = num => {
  return 2 * num
}

function greeting() {
  console.log('Hello, world!')
}

// se a função não tem argumento, precisa color () entre o = e a =>
const greeting = () => {
  console.log('Hello, world')
}

// só pode fazer isso quando o corpo da minha função só tem UMA linha
const triplo = num => 3 * num 

// se eu usar dois ou mais argumentos em uma arrow function precisa usar ()
const exponenciar = (base, expoente) => base ** expoente

console.log(dobro(50))
console.log(triplo(3))

/* ------------------------ Explicação YouTube ------------------------ */
