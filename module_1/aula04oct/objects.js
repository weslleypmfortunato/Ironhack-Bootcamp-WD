// Usa sempre o LET para objetos. Se usar o CONST não vai conseguir alterar o valor das propriedades

let objeto = {pindamonhangaba: "Pindamonhangaba é um município brasileiro da Região Metropolitana do Vale do Paraíba e Litoral Norte no estado de São Paulo. O principal acesso à cidade se dá pela Rodovia Presidente Dutra, no quilômetro 99. O município está a cerca de cem quilômetros da divisa com o estado Rio de Janeiro e a cerca cinquenta quilômetros da divisa com o estado de Minas Gerais."}

let pessoa = {
  name: 'Felipe',
  age: 25,
  city: "Santos"
}

pessoa.email = 'feliepe_de_santos@gmail.com'
pessoa.ddd = 11
pessoa['celular'] = '99999-9999'

console.log('name' in pessoa) // quero saber se tem a propriedade `name` em `pessoa`
console.log('address' in pessoa) // aqui vai dar `false` pq não tem `address` em `pessoa`

pessoa.email = 'private0339985544@gmail.com' // alterando o valor de uma propriedade

console.log(pessoa)

delete pessoa.email // deletando uma propriedade
console.log(pessoa)

console.log(Object.keys(pessoa)) // vai listar as propriedades

for (let key in pessoa)
console.log(key)

console.log(Object.values(pessoa))

