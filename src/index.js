import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import { v4 as uuid } from "uuid";

var notes = [{
  title: 'inicial',
  description: '',
  id: '1c240b67-4da1-4ab8-a7bf-2b120587e235'
}, {
  title: 'ini note',
  description: 'ini descrip',
  id: 'ed2fb392-3fe0-4ced-846d-09f0e78dd093'
}]

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server)

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
  console.log('new connection to io', socket.id)
  socket.emit('server:loadnotes', notes);

  socket.on('client:newnote', newNote => {
    // console.log('recibo', newNote)
    const note = {...newNote, id: uuid()}
    console.log("nueva nota", note)
    notes.push(note)

    // socket.emit('server:newnote', note)
    io.emit('server:newnote', note)
  })

  socket.on('client:deletenote', noteId => {
    // console.log("quitar en BD", id)
    notes = notes.filter(note => note.id  !== noteId )

    // socket.emit('server:deletenote', noteId )
    io.emit('server:deletenote', noteId )
  })
  
  socket.on('client:getnote', noteId => {
    // console.log("actualizar este" ,id)
    const note = notes.find(note => note.id === noteId)
    // console.log("actliza estos", note)
    socket.emit('server:selectednote', note)
  })

  socket.on('client:updatenote', updatedNote => {
    // console.log('nuevos dataos', note )
    let found = false
    notes = notes.map(note => {
      if (note.id === updatedNote.id) {
        note = updatedNote
        found = true
      }
      return note
    })
    // const note = notes.find(note => note.id === updatedNote.id)


    console.log("array actyualizado", notes, found)
    if (found){
      console.log("retornar lo actualizado", updatedNote)
      // socket.emit('server:updatednote', updatedNote)
      io.emit('server:updatednote', updatedNote)
    }

  })
  
})

server.listen(3000)
console.log('server on port 3000');