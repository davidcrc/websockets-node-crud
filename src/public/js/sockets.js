const socket = io()

const saveNote = (title, description) => {
  socket.emit('client:newnote', {
    title,
    description,
  })
}

socket.on('server:newnote', note => {
  console.log("la nota guardada", note)
  appendNote(note)
} )

socket.on('server:loadnotes', notes => {
  renderNotes(notes)
})