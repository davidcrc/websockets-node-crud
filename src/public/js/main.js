// Podemos pasarle un servidor pero por defecto se conecta al host
const socket = io()
socket.on('ping', () => {
  console.log("escuchado")
  socket.emit('pong')
})