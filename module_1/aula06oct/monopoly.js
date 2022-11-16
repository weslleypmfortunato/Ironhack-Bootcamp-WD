const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];


let dice 

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 1000,
  move() {
    dice = 1 + Math.floor(6 * Math.random()) // Math.floor arredonda para baixo e Math.random retorna um numero qualquer no intervalo de 0 a 1
    // anda para a posição "n"
    this.position = (this.position + dice) % squares.length
    // perde dinheiro
    this.cash += squares[this.position]
    // verifica game-over
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`)
    }
  },
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

let player2 = {
  name: 'Maria',
  color: 'blue',
  position: 0,
  cash: 1000,
  move() {
    dice = 1 + Math.floor(6 * Math.random()) // Math.floor arredonda para baixo e Math.random retorna um numero qualquer no intervalo de 0 a 1
    // anda para a posição "n"
    this.position = (this.position + dice) % squares.length
    // perde dinheiro
    this.cash += squares[this.position]
    // verifica game-over
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`)
    }
  },
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

let player3 = {
  name: 'Ana',
  color: 'black',
  position: 0,
  cash: 1000,
  move() {
    dice = 1 + Math.floor(6 * Math.random()) // Math.floor arredonda para baixo e Math.random retorna um numero qualquer no intervalo de 0 a 1
    // anda para a posição "n"
    this.position = (this.position + dice) % squares.length
    // perde dinheiro
    this.cash += squares[this.position]
    // verifica game-over
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`)
    }
  },
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

// Rodada 1 
player1.move()
player2.move()
player3.move()

// Rodada 2
player1.move()
player2.move()
player3.move()

player1.displayInfo()
player2.displayInfo()
player3.displayInfo()




// Aqui é como seria sem o metodo
// rola os dados
// dice = 1 + Math.floor(6 * Math.random()) // Math.floor arredonda para baixo e Math.random retorna um numero qualquer no intervalo de 0 a 1
// // anda para a posição "n"
// player1.position = (player1.position + dice) % squares.length
// // perde dinheiro
// player1.cash += squares[player1.position]
// // verifica game-over
// if (player1.cash < 0) {
//   console.log(`Game over for ${player1.name}.`)
// }

// // Player 2
// dice = 1 + Math.floor(6 * Math.random()) // Math.floor arredonda para baixo e Math.random retorna um numero qualquer no intervalo de 0 a 1
// player2.position = (player2.position + dice) % squares.length
// player2.cash += squares[player2.position]
// if (player2.cash < 0) {
//   console.log(`Game over for ${player2.name}.`)
// }

// // Player 3
// dice = 1 + Math.floor(6 * Math.random()) // Math.floor arredonda para baixo e Math.random retorna um numero qualquer no intervalo de 0 a 1
// player3.position = (player3.position + dice) % squares.length
// player3.cash += squares[player3.position]
// if (player3.cash < 0) {
//   console.log(`Game over for ${player3.name}.`)
// }