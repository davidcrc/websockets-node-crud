import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server)

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
  console.log('new connection to io', socket.id)
  socket.emit('ping')

  socket.on('pong', ()=> {
    console.log("un pong");
  })
})

server.listen(3000)
console.log('server on port 3000');