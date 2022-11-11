const dobro = function(num) {
  return 2 * num
}

function returnLength(str, anonFunc) {
  anonFunc(str)
}

returnLength('Pindamonhangaba', function(str) {
  console.log(`O tamanho da string é ${str.length}`)
})

returnLength('Pindamonhangaba', function(str) {
  console.log(`A string ${str} tem tamanho ${str.length}`)
})

function testaOTimeout() {
  console.log('Testando o Timeout!')
}

setTimeout(testaOTimeout, 3000)

