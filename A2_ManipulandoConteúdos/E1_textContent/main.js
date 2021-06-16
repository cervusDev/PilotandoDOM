// textContent 

const element = document.querySelector('h1')
element.textContent = 'Olá Devs'

const newElement = element.textContent = 'Olá Devs'
console.log(newElement)