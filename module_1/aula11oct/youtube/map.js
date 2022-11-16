/*
- o map poderia ser usado por ex se vc tem uma lista de produtos em R$ e vc quer converter cada preço destes produtos para USD
- o map retorna uma nova lista. Não altera a lista antiga
- map é uma função de transformação. Se ver o .map pode esperar que esta transformando alguma coisa e gerando novos valores

Exemplo:
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

const precoBrl = produtos.map(prod => prod.preco * 5.5) 
console.log(precoBrl)
console.log(produtos)

/*
Vai pegar o nome-do-array.map(nome-do-que-quer-iterar =>nome-do-que-quer-iterar.preco * 4) 
*/