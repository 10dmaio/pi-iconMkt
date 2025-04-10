const { sql, config } = require('../config/db');

async function pesquisarUsuario() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request()
    .query('SELECT * FROM Usuario');
    return resultado.recordset;
}

async function pesquisarUsuarioNivelAcesso(id_nivel) {
        const requisicaoAcessoDB = await sql.connect(config);
        const resultado = await requisicaoAcessoDB.request()
            .input('id_nivel', sql.VarChar, id_nivel)
            .query(`SELECT * FROM Cliente WHERE id_nivel = @id_nivel`);
            return resultado.recordset[0];
        }



module.exports = {pesquisarUsuario};