/*
Estamos trabalhando para o Airbnb como desenvolvedores e precisamos adicionar um recurso de filtro quando alguém está procurando uma casa. Imagine que alguém comece sua busca por lugares em Barcelona, então trazemos todos os quartos disponíveis para lá.
Mas é verão, e os clientes que estão procurando quartos querem que o lugar tenha uma piscina. Nossa incrível plataforma incluirá um recurso de filtro, então temos que trabalhar nisso.
Dando as seguintes matrizes de objetos, vamos filtrar apenas aquele com um pool.
*/

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: 'Private Room',
    pool: true,
    garage: false
  },
  {
    title: 'Private apartment',
    price: 190,
    type: 'Entire Place',
    pool: true,
    garage: true
  },
  {
    title: 'Apartment with awesome views',
    price: 400,
    type: 'Entire Place',
    pool: false,
    garage: false
  },
  {
    title: 'Apartment in la Rambla',
    price: 150,
    type: 'Private Room',
    pool: false,
    garage: true
  },
  {
    title: 'Comfortable place in Barcelona´s center',
    price: 390,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'Room near Sagrada Familia',
    price: 170,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: 'Great house next to Camp Nou',
    price: 140,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'New apartment with 2 beds',
    price: 2000,
    type: 'Entire place',
    pool: false,
    garage: true
  },
  {
    title: 'Awesome Suite',
    price: 230,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: 'Entire place',
    pool: true,
    garage: true
  }
];

// places

const housesWithPools = places.filter(withPool => {
  return withPool.pool === true
})

console.log(housesWithPools)
