// Podemos pasarle un servidor pero por defecto se conecta al host
// const socket = io()

const noteForm = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')



noteForm.addEventListener('submit', (e) => {
  e.preventDefault()

  saveNote(title.value, description.value)  
  
})