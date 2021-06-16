
const header = document.querySelector('header')
header.setAttribute("id", 'meuid')

const headerId = document.querySelector('#meuid')
console.log(headerId)

console.log(headerId.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')