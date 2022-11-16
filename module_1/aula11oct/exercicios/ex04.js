/*
Estamos desenvolvendo nosso site de super comércio eletrônico; cada produto tem alguns comentários e classificações de usuários armazenados em uma matriz chamada “Revisões”. Cada revisão é um objeto, então temos a seguinte estrutura:

Temos que mostrar o produto em nosso site, mas não queremos mostrar todas as avaliações em uma primeira vista, só precisamos da taxa média para que outros clientes possam ver de forma rápida todas as taxas de produtos.
Neste caso, reduzir pode ajudar a obter a média rapidamente. Vá em frente e tente escrever o código e, em seguida, verifique nossa solução:

*/

const product = {
  name: 'AmazonBasics Apple Certified Lightning to USB Cable',
  price: 7.99,
  manufacturer: 'Amazon',
  reviews: [
    { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
    { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
    { user: 'David Recoba', comments: 'Awesome', rate: 5 },
    { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
    { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
  ]
};

const avgRate = (product.reviews.reduce((acumulador, valorAtual) => acumulador + valorAtual.rate, 0)) / product.reviews.length
console.log(avgRate)
