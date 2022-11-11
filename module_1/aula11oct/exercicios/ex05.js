/*
Dada a seguinte matriz, filtre os que são elegíveis para ir a bares nos EUA
*/

const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 20 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 }
];

const ok2Pub = people.filter(liberados => {
  if (liberados.age >= 21) return true
  return false
})
console.log(ok2Pub)
