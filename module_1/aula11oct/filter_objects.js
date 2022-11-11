const cidades = [
  {cidade: 'São Paulo', pop: 12396372},
  {cidade: 'Rio de Janeiro', pop: 6775561},
  {cidade: 'Brasilia', pop: 3094325},
  {cidade: 'Salvador', pop: 2900319},
  {cidade: 'Fortaleza', pop: 2703391}
]

const cidades3plus = cidades.filter(cidade => {
  return cidade.pop >= 3000000
})

console.log(cidades3plus)