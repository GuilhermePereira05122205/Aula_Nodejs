var express = require('express');
var router = express.Router();
var db = require("../models/index.js")
var agendamento = require("../")
var {Model} = require("sequelize");
const cliente = require('../models/cliente.js');
agendamento.create

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastrar', function (req, res, next) {
  res.render('clientes/cadastrar')
})

router.post('/cadastrar', async function (req, res, next) {
  var cliente = await db.Cliente.create({nome: req.body["nome"], 
    nome: req.body["nome"], 
    endereco: req.body["endereco"], 
    bairro: req.body["bairro"],
    cep: req.body["CEP"],
    cidade: req.body["cidade"],
    estado: req.body["estado"],
    observacao: req.body["observacao"],
  });

  res.redirect("/listar")

})

router.get("/atualizar/:id", async function(req, res, next){
  var cliente = await db.Cliente.findOne({
    where: {
      id: req.params.id
    }
  })
  console.log(cliente.id)
  res.render("clientes/atualizar", {
    cliente:  cliente
  })
})

router.post('/atualizar', async function (req, res, next) {

  var cliente = await db.Cliente.update({
      nome: req.body["nome"], 
      endereco: req.body["endereco"], 
      bairro: req.body["bairro"],
      cep: req.body["CEP"],
      cidade: req.body["cidade"],
      estado: req.body["estado"],
      observacao: req.body["observacao"],
    },{
      where: {
        id: req.body["id"]
      }
  });

  res.redirect("/listar");
})

router.get("/listar", async function(req, res, next){
  var clientes = await db.Cliente.findAll()
  
  res.render('clientes/listar', {Clientes : clientes})
})

router.get("/excluir/:id", async function(req, res, next) {
  
  var cliente = await db.Cliente.destroy({
      where : {
        id: req.params.id
      }
  })
  res.redirect("/listar")
})

module.exports = router;
