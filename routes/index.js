var express = require('express')
var router = express.Router()
var db = require('../models/index.js')
var agendamento = require('../')
var { Model } = require('sequelize')
const cliente = require('../models/cliente.js')

/* GET home page. */

router.get("/", function(req, res, next){
  res.render("index")
})

router.get('/cadastrar', function (req, res, next) {
  res.render('clientes/cadastrar')
})

router.post('/cadastrar', async function (req, res, next) {
  await db.Cliente.create({
    nome: req.body['nome'],
    endereco: req.body['endereco'],
    bairro: req.body['bairro'],
    cep: req.body['CEP'],
    cidade: req.body['cidade'],
    estado: req.body['estado'],
    observacao: req.body['observacao']
  })

  res.redirect('/listar')
})

router.get('/atualizar/:id', async function (req, res, next) {
  var cliente = await db.Cliente.findByPk(req.params.id)
  console.log(cliente)

  if (cliente == null) {
    res.render('error', {
      message: 'Cliente não encontrado'
    })
  }
  res.render('clientes/atualizar', {
    cliente: cliente
  })
})

router.post('/atualizar', async function (req, res, next) {
  var cliente = await db.Cliente.findByPk(req.body['id'])
  if (cliente == null) {
    res.render('error', {
      message: 'Cliente não encontrado'
    })
  }

  await cliente.update({
    nome: req.body['nome'],
    endereco: req.body['endereco'],
    bairro: req.body['bairro'],
    cep: req.body['cep'],
    cidade: req.body['cidade'],
    estado: req.body['estado'],
    observacao: req.body['observacao']
  })

  res.redirect('/listar')
})


router.get('/listar', async function (req, res, next) {
  var clientes = await db.Cliente.findAll()

  res.render('clientes/listar', { Clientes: clientes })
})

router.get('/excluir/:id', async function (req, res, next) {
  var cliente = await db.Cliente.findByPk(req.params.id)

  if (cliente == null) {
    res.render('error', {
      message: 'Cliente não encontrado'
    })
  }

  await cliente.destroy()
  res.redirect('/listar')
})

module.exports = router
