/*
Dado um menu de alimentos e suas calorias, calcule o número médio de calorias para toda a lista. Código inicial:
*/

const menu = [
  { name: 'Carrots', calories: 150 },
  { name: 'Steak', calories: 350 },
  { name: 'Broccoli', calories: 120 },
  { name: 'Chicken', calories: 250 },
  { name: 'Pizza', calories: 520 }
];

constCalories = (menu.reduce((acumulador, valorAtual) => acumulador + valorAtual.calories, 0)) / menu.length
console.log(constCalories)