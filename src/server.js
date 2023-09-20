const express = require("express");
const db = require("./db");
const app = express();
const bodyParser = require('body-parser');

const port = 3003;

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = db.saveProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = db.saveProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = db.excluirProduto(req.params.id)
  res.send(produto) // JSON
})

app.listen(port, () => {
  console.log(`Server runnin in the port ${port}.`)
})
