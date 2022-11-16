// const livro1 = {
//   autor: 'Paulo Coelho',
//   title: 'Alguma Coisa'
// }

// const livro2 = Object.assign({}, livro1) // copia tudo do livro1, joga em um novo obj e salva como novo obj. É uma SHALLOW COPY
// console.log('1', livro2 === livro1)

// const livro3 = {
//   autor: 'Paulo Coelho',
//   edicoes: [
//     { ano: 1980},
//     { ano: 1990}
//   ]
// }

// const livro4 = Object.assign({}, livro3)

// livro4.autor = 'John Doe'
// livro3.edicoes[0].ano = 1988

// console.log('livro3', livro3)
// console.log('livro4', livro4)



// NÃO SE USA
const livro5 = {
  autor: 'Paulo Coelho'
}

const livro6 = {}
for(let prop in livro5) {
  livro6[prop] = livro5[prop]
}
console.log(livro5)
console.log(livro6)



