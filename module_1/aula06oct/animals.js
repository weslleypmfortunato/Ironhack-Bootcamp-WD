let animal1 = {
  name: 'Sushi',
  paws: 4,
  sounds: ['Miau!', 'Grrrrr', 'Hmmmmmm'],
  age: 1,
  getRandomSound() {
    const position = Math.floor(3 * Math.random()) 
    return this.sounds[position]
  },
  makeNoise(times) {
    console.log(`${this.getRandomSound()} `.repeat(times))
  }
}

let animal2 = {
  name: 'Meg',
  paws: 4,
  sound: 'Au!',
  age: 1,
  makeNoise() {
    console.log(`${this.sound} `.repeat(3))
  }
}

animal1.makeNoise(4)