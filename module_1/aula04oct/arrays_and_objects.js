let students = [
  { name: "John", age: 30},
  {name: "Mary", age: 43},
  {name: "Diego", age: 28}
]

let escola = [
  [
    {name: "John", age: 30},
    {name: "Mary", age: 43},
    {name: "Diego", age: 28}
  ],
  [
    {name: "Pedro", age: 30},
    {name: "José", age: 50},
    {name: "Ana", age: 28}
  ]
]

console.log(escola[1][1].age)

students.push({name: "Hugo", age: 29})
console.log(students)
console.log(students[1].age)

const array2d = [
  [true, true, false],
  [true, false, false],
  [false, true, true]
]

console.log(array2d[0] [2])

let colecionador = {
  name: "Maria",
  age: 70,
  items: [
    'Bone Barbie que em um carro',
    'Boneca que chora',
    'Bone que pula de para-quedas'
  ]
}

console.log(colecionador.items[1])