// alterando estilos inline
const element = document.querySelector('body')
element.style.backgroundColor = '#f9f3D2'

console.log(element.style.background)

// alterando estilos

const newElement = document.querySelector('h1')

// adicionando
element.classList.add('active')

// removendo
element.classList.remove('active')

// Liga e desliga a classe
    // regra: se existe a classe, ele tira, se não adiciona
element.classList.remove('active')


