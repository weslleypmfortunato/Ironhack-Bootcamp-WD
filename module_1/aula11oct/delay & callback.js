// exemplo de setTimeout
// function comerBigMac() {
//   setTimeout(function() {
//     console.log(`Hummm comendo um Big Mac`)
//   }, 5000)
// }



function comerBigMac(callback) {
    console.log(`Hummm comendo um Big Mac`)
    callback()
}

function comerTortinhaDeBanana() {
  setTimeout(function() {
    console.log(`Hummm comendo tortinha de banana`)
  }, 4 * 1000)
}

function comerSundae() {
  console.log(`Comendo um Sundae`)
}

comerBigMac(comerSundae)
