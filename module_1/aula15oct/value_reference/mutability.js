// .concat retorna um novo array
// .slice vc passa a posição inicial e a posição final

const alunos = ['Ana', 'João', 'José']
// alunos.push('Mário')
const alunos2 = alunos.concat('Mário') // com concat

const alunos3 = [...alunos, 'Mário'] // com ...

console.log('1', alunos)
console.log('2', alunos2)
console.log('3', alunos3)



const alunos10 = [...alunos.slice(1, 2)]
console.log('4', alunos10)

const livro = {
  autor: 'Paulo Coelho'
}

// livro.paginas = 200

const livro2 = {...livro, paginas: 200, edicao: 2000} // clonei e adicionei duas novas propriedades
console.log('5', livro, livro2)

const livro3 = {
  autor: 'John Due',
  edicoes: [
    {ano: 2000},
    {ano: 2020}
  ]
}

const {autor, ...restante} = livro3
console.log(autor)
console.log(restante)

// const autor = livro3.autor
// const edicoes = livro3.edicoes

// console.log('6', autor, edicoes)

