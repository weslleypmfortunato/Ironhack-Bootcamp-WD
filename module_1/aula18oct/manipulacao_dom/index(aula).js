const paragraph = document.getElementById('paragraph')
const paragraphId = paragraph.getAttribute('id')


//1. Seleciona a tag a identificado como google-link
const link = document.getElementById('google-link')
link.setAttribute('href', 'http://www.google.com')
link.setAttribute('target', '_blank')

//Removendo atributo
// paragraph.removeAttribute('id')
// paragraph.setAttribute('class', 'paragraph')
// paragraph.removeAttribute('class')

//Criando elementos
let h2Tag = document.createElement('h2')
h2Tag.innerHTML = 'Este é um H2'

const body = document.getElementsByTagName('body')[0]
body.appendChild(h2Tag)

// const div = document.createElement('div')
// div.innerHTML = `
//     <h2>h2 dentro de uma div</h2>
//     <p>Este é um p dentro de uma <span>div<span></p>
//     <button>Este é um button dentro de uma div</button>
// `

// const content = document.getElementById('content')
// content.appendChild(div)

//Criando texto dinamicamente
let text = document.createTextNode('Texto criado de maneira dinâmica')
body.appendChild(text)


//Criar um parágrafo
const p = document.createElement('p')

//Criar um nó de texto com o texto "Hi there! I am using JavaScript"
const newText = "Hi there! I am using JavaScript"
let textNode = document.createTextNode(newText)

//Jogando o nó de texto para dentro do parágrafo
p.appendChild(textNode)

//Jogar o parágrafo para dentro do body
body.appendChild(p)


//Adicionando elementos antes de outros elementos
const h1 = document.createElement('h1')
h1.innerHTML = 'H1 que vem antes do H2'

body.insertBefore(h1, h2Tag)


//Adicionar um input tipo texto antes do botão
//de id add-item-button
//1. criar o input
const input = document.createElement('input')
//2. definir que o input é do tipo texto
input.setAttribute('type', 'text')
//3. Selecionar o botão add-item-button
const button = document.getElementById('add-item-button')
//4. Inserir o input antes do botão
body.insertBefore(input, button)


//Removendo elementos do dom
//1. Elemento pai -> body
//2. Elemento filho -> o elemento que será removido
const paragraphToRemove = document.getElementById('paragraph')
//3. Remover o elemento filho do elemento pai
body.removeChild(paragraphToRemove)


//Removendo h2 criado previamente
body.removeChild(h2Tag)


//Limpando um elemento
const list = document.getElementsByClassName('super-list')[0]
list.innerHTML = ''


//Adicionando eventos
const button2 = document.getElementById('add-item-button')
// button2.onclick = function() {
//     console.log('O botão foi clicado')
// }

//Toda vez que o botão add item for clicado
// uma nova li com o texto Item number 1
// será adicionada na ul items-list
let count = 1
//1. Seleciono a ul
const itemList = document.getElementById('item-list') //Ul
//2. Defino o evento onclick
button2.onclick = () => {
    //3. Crio uma li
    const li = document.createElement('li')
    //4. Defino o texto da li
    li.innerHTML = `Item number ${count}`

    count++
    //5. Adiciono a li à ul
    itemList.appendChild(li)
}