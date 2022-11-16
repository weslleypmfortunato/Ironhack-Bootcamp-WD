const callback = () => {
  console.log('testando')
}

const timeoutID = setTimeout(callback, 10 * 1000)

setTimeout(() => {
  clearTimeout(timeoutID)
}, 3000)




