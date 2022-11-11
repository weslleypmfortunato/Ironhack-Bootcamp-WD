
// arguments vai retornar um objeto
// function greeting() {
//   console.log(arguments)
//   console.log('primeiro argumento', arguments[0])
//   console.log('segundo argumento', arguments[1])
// }

// greeting('Hello', 'world')

function printArgs() {
  // for (let i = 0; i < arguments.length; i++) {
  //   console.log(arguments[i])
  // }
  const argsArray = Array.from(arguments)
  argsArray.forEach(elemento => console.log(elemento))
}

printArgs('primeiro', 'segundo', 'terceiro', 'batata', true)