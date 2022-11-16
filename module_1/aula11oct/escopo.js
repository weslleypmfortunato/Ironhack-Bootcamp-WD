const user = {
  name: 'Ana',
  age: 29,
  getOlder: function() {
    setInterval(() => {
      this.age++
      console.log(this.age)
    }, 1000)
  }
}

// // o set timeout repete apenas 1x vez
// setTimeout(() => {
//   console.log(`Teste do timeout`)
// }, 4000)

// // o setInterval fica repetindo 
// setInterval(() => {
//   console.log('1 segundo depois...')
// }, 1000)

user.getOlder()


