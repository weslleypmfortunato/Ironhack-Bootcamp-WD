// let counter = 1

// const callback = () => {
//   console.log(counter)
//   let timeoutID = setTimeout(callback, 1000)
//   counter++

//   if (counter > 10) {
//     clearTimeout(timeoutID)
//   }
// }

// let timeoutID = setTimeout(callback, 1000)


// let i = 1
// const intervalID = setInterval(() => {
//   console.log(i)
//   i++
//   if (i > 10) clearInterval(intervalID)
// }, 1000)


let i = 10
const intervalID = setInterval(() => {
  if (i > 0) {
    console.log(i)
  } else {
    console.log('Pop!')
    clearInterval(intervalID)
  }
  i--
}, 1000)


// abaixo eu faço se eu quiser que a função fique sendo chamada a cada 1 segundo. Lembrar que dá para simplificar com o setInterval
let count = 1
const callBackFunction = () => {
  console.log(count)
  timeoutID = setTimeout(callBackFunction, 1000)
   count++

   if (count > 10) {
    clearTimeout(timeoutID)
   }
}
