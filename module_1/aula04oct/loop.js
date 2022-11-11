let names = ['Felipe', 'Carlos', 'Carla', 'Joana']
console.log(names)

/* for (i = 0; i < names.length; i++) {
  console.log(names[i])
} */

names.forEach(function(name, index) {
  if (index > 0) {
    console.log(name)
  }
})
  

const frase = 'Eu gosto do nome Pindamonhangaba'
const palavras = frase.split(" ") // como esta com espaço ele vai separar por espaço. Se eu não der espaço ele vai separar cada caractere
console.log(palavras)

console.log(palavras.length)
