const div = document.createElement('div')
div.innerText = 'Olá Devs'

// append preded
const body = document.querySelector('body')

body.append(div) // add div after element

body.prepend(div) // add div before element

// insert after specificly element
const script = body.querySelector('script')
body.insertBefore(div, script)

