const chosenWord = ["A", "B", "A", "C", "A", "T", "E"]
const palavraEscondida = []

const keyValue1 = ["A"]
const keyValue2 = ["B"]
const keyValue3 = ["C"]
const keyValue4 = ["T"]
const keyValue5 = ["E"]

for (let i = 0; i < chosenWord.length; i++) {
  if (chosenWord[i].indexOf(keyValue1) === 0) {
    palavraEscondida.push(chosenWord[i])
  } else {
    palavraEscondida.push(chosenWord[i].replace(chosenWord[i], "_"))
  }
}
console.log(palavraEscondida)
