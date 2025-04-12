const { sql, config } = require('../config/db');

async function pesquisarContrato() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request().query('SELECT * FROM Contrato');
    return resultado.recordset;
}




async function atualizarContrato(id, nome_arquivo, caminho_arquivo, data_envio, status_contrato, data_inicio, data_termino) {
    try {
        const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request()
            .input('id', sql.Int, id)
            .input('nome_arquivo', sql.VarChar, nome_arquivo)
            .input('caminho_arquivo', sql.VarChar, caminho_arquivo)
            .input('data_envio', sql.DateTime, data_envio)
            .input('status_contrato', sql.VarChar, status_contrato)
            .input('data_inicio', sql.Date, data_inicio)
            .input('data_termino', sql.Date, data_termino)
            .query('UPDATE Contrato SET nome_arquivo = @nome_arquivo, caminho_arquivo = @caminho_arquivo, data_envio = @data_envio, status_contrato = @status_contrato, data_inicio = @data_inicio, data_termino = @data_termino WHERE id = @id');
        return resultado.rowsAffected[0];
    } catch (erro) {
        throw erro;
    }
}
module.exports = {pesquisarContrato};
module.exports = {pesquisarContrato, pesquisarContratoCNPJ, atualizarContrato};
