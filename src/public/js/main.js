// Podemos pasarle un servidor pero por defecto se conecta al host
// const socket = io()

const noteForm = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')



noteForm.addEventListener('submit', (e) => {
  e.preventDefault()

  if(savedId){
    updateNote(savedId, title.value, description.value)
    savedId = null
  }
  else{
    saveNote(title.value, description.value)
  }

  // clear form
  title.value = ''
  description.value = ''

  title.focus()
  
})