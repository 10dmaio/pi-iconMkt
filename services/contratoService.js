const { sql, config } = require('../config/db');

async function pesquisarContrato() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request().query('SELECT * FROM Contrato');
    return resultado.recordset;
}


async function pesquisarContratoIdCliente() {

}


module.exports = {pesquisarContrato};