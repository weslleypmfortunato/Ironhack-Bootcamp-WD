const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

class Player {
  constructor(name, color) { // dentro do parenteses estao aquilo que são diferente entre os jogadores
    this.name = name
    this.color = color
    this.position = 0
    this.cash = 1000
  }

  move() {
    let dice = 1 + Math.floor(6 * Math.random()) // Math.floor arredonda para baixo e Math.random retorna um numero qualquer no intervalo de 0 a 1
    // anda para a posição "n"
    this.position = (this.position + dice) % squares.length
    // perde dinheiro
    this.cash += squares[this.position]
    // verifica game-over
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`)
    }
  }

  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

let player1 = new Player('Joaquim', 'red') // entre parenteses coloca o que é particular de cada player
let player2 = new Player('Maria', 'blue')
let player3 = new Player('Ana', 'black')

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
