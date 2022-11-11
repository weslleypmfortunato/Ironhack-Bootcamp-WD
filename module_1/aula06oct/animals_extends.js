class Animal {
  constructor(name, mainColor, sound) {
    this.name = name
    this.mainColor = mainColor
    this.sound = sound
  }
  makeNoise(intensity) {
    console.log(`${this.sound} `.repeat(intensity))
  }
}

class Cat extends Animal { //comando que faz a class Cat herdar tudo da class Animal
  constructor(name, mainColor, sound, legs) {
    super(name, mainColor, sound)
    this.legs = legs
  }

  jump() {
    console.log('The cat is jumping')
  }
}

const tom = new Cat('Tom', 'cinza', 'Miau!', 4)
console.log(tom)
console.log(tom.jump())



class Chameleon extends Animal {
  constructor(name) {
    super(name, 'green', '?????')
  }

  changeColor(newColor) {
    this.mainColor = newColor
  }
}

const camaleao = new Chameleon('Otavio')
console.log(camaleao)
camaleao.changeColor('white')
console.log(camaleao)
