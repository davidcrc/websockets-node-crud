import express from "express";

const app = express();

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.use(express.static(__dirname + '/public'))

app.listen(3000)
console.log('server on port 3000');