const express = require('express');

const porta = 8000
const server = express()
server.use(express.json())

server.get('/soma', (req, res) => {
    console.log(req.query)
    res.send('ok')
})
server.get('/subtracao', (req, res) => {
    console.log(req.query)
    res.send('ok')
})

server.get('/multiplicacao', (req, res) => {
    console.log(req.query)
    res.send('ok')
})
server.get('/divisao', (req, res) => {
    console.log(req.query)
    res.send('ok')
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})