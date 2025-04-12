const { sql, config } = require ('../config/db');

//Função para pesquisar clientes no banco de dados
async function pesquisarCliente() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request()
    .query`SELECT * FROM Cliente`;
    return resultado.recordset;

}


async function pesquisarClienteCNPJ(CNPJ) {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request()
        .input('CNPJ', sql.VarChar, CNPJ)
        .query(`SELECT * FROM Cliente WHERE CNPJ = @CNPJ`);
        return resultado.recordset[0];
    }






async function atualizarCliente(id, nome_fantasia, razao_social, cnpj, segmento, telefone, site) {
    try {
        const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request()
            .input('id', sql.Int, id)
            .input('nome_fantasia', sql.VarChar, nome_fantasia)
            .input('razao_social', sql.VarChar, razao_social)
            .input('cnpj', sql.VarChar, cnpj)
            .input('segmento', sql.VarChar , segmento)
            .input('telefone', sql.VarChar , telefone)
            .input('site', sql.VarChar , site)
            .query('UPDATE Cliente SET nome_fantasia = @nome_fantasia, razao_social = @razao_social, cnpj = @cnpj, segmento = @segmento, telefone = @telefone, site = @site WHERE id = @id');
        return resultado.rowsAffected[0];
    } catch (erro) {
        throw erro;
    }
}
module.exports = { atualizarCliente };
module.exports = {pesquisarCliente, pesquisarClienteCNPJ};