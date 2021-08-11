import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import { v4 as uuid } from "uuid";

const notes = [{
  title: 'inicial',
  description: '',
  id: '1c240b67-4da1-4ab8-a7bf-2b120587e235'
}, {
  title: 'ini note',
  description: '',
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

    socket.emit('server:newnote', note)
  })
  
  
})

server.listen(3000)
console.log('server on port 3000');