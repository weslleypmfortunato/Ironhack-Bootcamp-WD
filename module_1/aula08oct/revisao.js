class Car {
  constructor(brand, model, doors, fuel, consumption) {
    this.brand = brand
    this.model = model
    this.doors = doors
    this.fuel = fuel
    this.km = 0
    this.consumption = consumption

  }

  drive() {
    this.useFuel()
    this.km++
  }

  useFuel() {
    this.fuel -= this.consumption
  }
}

class PlataformaVw extends Car {
  constructor(brand, model, doors, fuel) {
    super(brand, model, doors, fuel, 0.3)
  }
}

class PlataformaGM extends Car {
  constructor(brand, model, doors, fuel) {
    super(brand, model, doors, fuel, 2)
  }
}

let fusca = new PlataformaVw('VW', 'Fusca', 2, 30)
let opala = new PlataformaGM('GM', 'Opala', 4, 60)

console.log(opala)
fusca.drive()
console.log(opala.km, opala.fuel)
