/*
- poderia ser usado por exemplo se eu tenho uma lista com vários produtos e eu quero saber a soma do preço destes produtos
- 

*/

const produtos = [
  {
    nome: 'notebook',
    preco: 2100
  },

  {
    nome: 'smartphone',
    preco: 400
  }
]

//aqui somente o .reduce
const total = produtos.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
console.log(total)


//e aqui usando o .map e o .reduce ao mesmo tempo. O .map para transformar de USD para BRL e o .reduce para retornar a soma dos preços
const total1 = produtos.map(prod => prod.preco * 5.5).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
console.log(total1)

/*
acumulador = é ele que vai começar em 0 e vai ficar somando o que recebe
valorAtual = é o valor atual que vai ser somado ao valor de a
0 = valor inicial do acumulador
*/