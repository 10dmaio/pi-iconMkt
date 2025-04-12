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



        async function atualizarUsuario(id, nome, email, senha) {
            try {
                const requisicaoAcessoDB = await sql.connect(config);
            const resultado = await requisicaoAcessoDB.request()
                    .input('id', sql.Int, id)
                    .input('nome', sql.VarChar, nome)
                    .input('email', sql.VarChar, email)
                    .input('senha', sql.VarChar, senha)
                    .query('UPDATE Usuario SET nome = @nome, email = @email, senha = @senha WHERE id = @id');
                return resultado.rowsAffected[0];
            } catch (erro) {
                throw erro;
            }
        }

        module.exports = {pesquisarUsuario, pesquisarUsuarioNivelAcesso, atualizarUsuario};