// 1. selecionar as lis
const liTags = document.getElementsByName('li')

for (let i = 0; i < liTags.length; i++) {
  liTags[i].onclick = (event) => {
    console.log(event.currentTarget) // li
    alert.event.currentTarget.innerHTML
  }
}