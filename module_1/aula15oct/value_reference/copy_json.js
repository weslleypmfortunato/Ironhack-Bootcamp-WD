//JS
//Object
//Notation
// é uma deep copy

const livro1 = {
  autor: 'Paulo Coelho',
  edicoes: [
    { ano: 1980},
    { ano: 1990}
  ]
}


const livroJson = JSON.stringify(livro1)
livro2 = JSON.parse(livroJson)

livro1.edicoes[0].ano = 1988

console.log(livro1)
console.log(livro2)

// JSON.stringify(obj)  // recebe um obj e retorna uma str
// JSON.parse(stringJson) // recebe uma str Json e retorna um obj