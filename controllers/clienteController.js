const clienteService = require ('../services/clienteService');

/*Após executar a query SQL por meio do script clienteService.js,
os dados serão retornados, isto é, os dados dos clientes que
estejam cadastrados no banco de dados. Assim, para que seja
possível visualizá-los, serão retornados no formato json
*/
async function getDadosCliente(req, resposta) {
    const clientes = await clienteService.pesquisarCliente();
    resposta.json(clientes);
}

module.exports = { getDadosCliente };


exports.atualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { nome_fantasia, razao_social, cnpj, segmento, telefone,site } = req.body;
    try {
        const linhasAfetadas = await clienteService.atualizarCliente(id, nome_fantasia, razao_social, cnpj, segmento, telefone, site);
        if (linhasAfetadas > 0) {
            res.status(200).json({ mensagem: 'Cliente atualizado com sucesso!' });
        } else {
            res.status(404).json({ mensagem: 'Cliente não encontrado.' });
        }
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao atualizar o cliente.', detalhes: erro });
    }
};
module.exports = { getDadosCliente };