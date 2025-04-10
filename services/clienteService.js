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




module.exports = {pesquisarCliente, pesquisarClienteCNPJ};