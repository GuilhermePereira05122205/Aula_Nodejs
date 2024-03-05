var express = require('express');
var router = express.Router();
var db = require("../models/index.js")
var agendamento = require("../")
agendamento.create

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastrarCliente', function (req, res, next) {
  res.render('cadastrar')
})

router.post('/cadastrarCliente', async function (req, res, next) {
  var cliente = db.Cliente.create({nome: req.body["nome"], 
  nome: req.body["nome"], 
  endereco: req.body["endereco"], 
  bairro: req.body["bairro"],
  CEP: req.body["CEP"],
  cidade: req.body["cidade"],
  estado: req.body["estado"],
  observacao: req.body["observacao"],
});

  res.send("Cliente cadastrado com sucesso")

})

module.exports = router;
