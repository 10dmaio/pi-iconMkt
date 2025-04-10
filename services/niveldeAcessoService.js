const { sql, config } = require('../config/db');

async function pesquisarniveldeAcesso() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request().query('SELECT * FROM niveldeAcesso');
    return resultado.recordset;
}

module.exports = {pesquisarniveldeAcesso};