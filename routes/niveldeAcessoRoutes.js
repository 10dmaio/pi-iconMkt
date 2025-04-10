const express = require('express');
const router = express.Router();
const niveldeAcessoController = require('../controllers/niveldeAcessoController');

router.get('/niveldeAcesso', niveldeAcessoController.getDadosniveldeAcesso);

module.exports = router;