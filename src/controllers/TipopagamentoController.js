const Tipopagamento = require('../models/Tipopagamento');

module.exports = {
    async store(require, response){
        const { descricao } = require.body;
        const tipopagamento = await Tipopagamento.create({descricao});
        return response.json(tipopagamento);
    },
    async index(require, response){
        const tipopagamento = await Tipopagamento.findAll();
        return response.json(tipopagamento);
    },
    async update(require, response){
        const { tipopagamento_id } = require.params;
        const tipopagamento = await Tipopagamento.findByPk(tipopagamento_id);

        if(!tipopagamento){
            return response.status(400).json({ Atenção: 'Tipo de pagamento não encontrado!' });
        }

        const { descricao } = await tipopagamento.update(require.body);

        return response.json({ tipopagamento_id, descricao });
    },
    async delete(require, response){
        const { tipopagamento_id } = require.params;
        const tipopagamento = await Tipopagamento.findByPk(tipopagamento_id);

        if(!tipopagamento){
            return response.status(400).json({ Atenção: 'Tipo de pagamento não encontrado' });
        }

        await tipopagamento.destroy();
        return response.status(200).json({ Atenção: 'Tipo de pagamento excluido com sucesso!' });
    }
}