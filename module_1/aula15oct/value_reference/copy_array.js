// spread operator (...)
// É uma shallow copy, mas mais seguro que o Object.assign
// O problema é com arrays multidimensionais
// com arrays de um único level, use esse sempre

const alunos = ['José', 'Pedro', 'Antonia']
const copiaAlunos = [...alunos]

copiaAlunos.push('John')
console.log('1', alunos)
console.log('2', copiaAlunos)


const alunosMult = [
  ['John', 'Mary', 'Joe'],
  ['Maria', 'João', 'José'],
]

const copiaAlunosMult = [...alunosMult]
alunosMult[0].push('Ann')
console.log('3', alunosMult)
console.log('4', copiaAlunosMult)