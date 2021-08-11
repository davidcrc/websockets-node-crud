const socket = io()

const saveNote = (title, description) => {
  socket.emit('client:newnote', {
    title,
    description,
  })
}
/**
 * 
 * @param {string} savedId note id
 * @param {string} title note title
 * @param {string} description note description
 */
const updateNote = (savedId, title, description) => {
  socket.emit('client:updatenote', {
    id: savedId,
    title,
    description,
  })
} 

const deleteNote = (id) => {
  console.log('click borrame', id)
  socket.emit('client:deletenote', id)
}

const getNote = (id) => {
  socket.emit('client:getnote', id)
}

socket.on('server:newnote', note => {
  console.log("la nota guardada", note)
  appendNote(note)
} )

socket.on('server:loadnotes', notes => {
  renderNotes(notes)
})

socket.on('server:deletenote', noteId => {
  deleteOneNote(noteId)
})

socket.on('server:selectednote', note => {
  // console.log("obtuve esto pa actuyalizar", note)
  const title = document.querySelector('#title')
  const description = document.querySelector('#description')

  title.value  = note.title
  description.value = note.description
})

socket.on('server:updatednote', note => {
  // console.log('obtengo', note)
  updateOneNote(note)
})