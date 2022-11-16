const livro = {
  autor: 'Paulo Coelho'
}

const livro2 = livro

livro.autor = 'John Doe'

// console.log(livro)
// console.log(livro2)

console.log(livro === livro2)

const alunos = ['Marta', ' Maria', 'José']
const alunos2 = alunos

console.log('compara alunos -> ', alunos === alunos2)



const livro3 = {
  autor: 'Paulo Coelho'
}

const livro4 = {
  autor: 'Paulo Coelho'
}

console.log(livro3 === livro4)


const alunos3 = ['Marta', ' Maria', 'José']
const alunos4 = ['Marta', ' Maria', 'José']

console.log(alunos3 === alunos4)