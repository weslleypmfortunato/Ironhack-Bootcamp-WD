const turma = [
  {name: 'Tom', age: 95},
  {name: 'Joe', age: 88},
  {name: 'Mary', age: 102}
]

const somaIdades = turma.reduce((soma, pessoa) => {
  return soma + pessoa.age
}, 0)

console.log(somaIdades)
