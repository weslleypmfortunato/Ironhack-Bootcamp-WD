



function calculaMedia(array) {
  if (!array.length) {
    return 'Invalid parameter'
  }

  let sum = 0

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum/array.length

}

console.log(calculaMedia([1, 2, 3]))