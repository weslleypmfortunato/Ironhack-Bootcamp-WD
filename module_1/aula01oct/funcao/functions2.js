function somaDoisNumeros(a, b) {
  return a + b
  console.log(`O primeiro numero é ${a}`)
  console.log(`O segundo número é ${b}`)
}

function printName(name) {
  if (name.length === 0) {
    return 'Invalid parameter'
  }
  return `The name is ${name}`
}

function getUserInfo(name, age) {
  const userInfo = [name, age]
  return userInfo
}

console.log(getUserInfo('Joao', 35))