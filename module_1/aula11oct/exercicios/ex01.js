/*
Dada uma matriz de cidades, retorne uma matriz com a primeira letra do nome de cada cidade capitalizada. Você pode usar a sintaxe ES5 ou ES6, com o que você se sentir mais confortável neste momento.
*/

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const citiesCapitalLetter = cities.map(city => city[0].toUpperCase() + city.substring(1))
console.log(citiesCapitalLetter)
