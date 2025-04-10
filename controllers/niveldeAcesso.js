const niveldeAcessoService = require('../services/niveldeAcessoService');

async function getDadosniveldeAcesso(req, resposta) {
    const niveldeAcesso = await niveldeAcessoService.pesquisarniveldeAcesso();
    resposta.json(niveldeAcesso);
};

module.exports = {getDadosniveldeAcesso};