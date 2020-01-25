const Tipomovimento = require('../models/Tipomovimento');

module.exports = {
    async store(require, response){
        const { descricao } = require.body;
        const tipomovimento = await Tipomovimento.create({descricao});

        return response.json(tipomovimento);
    },
    async index(require, response){
        const tipomovimento = await Tipomovimento.findAll();

        return response.json(tipomovimento);
    },
    async update(require, response){
        const { tipomovimento_id } = require.params;
        const tipomovimento = await Tipomovimento.findByPk(tipomovimento_id);

        if(!tipomovimento){
            return response.status(400).json({ Atenção: 'Tipo de movimentação não econtrada!'});
        }

        const { descricao } = await tipomovimento.update(require.body);
        
        return response.json({ tipomovimento_id, descricao });
    },
    async delete(require, response){
        const { tipomovimento_id } = require.params;
        const tipomovimento = await Tipomovimento.findByPk(tipomovimento_id);

        if(!tipomovimento){
            return response.status(400).json({ Atenção: 'Tipo de movimentação não econtrada!' });
        }
        await tipomovimento.destroy();

        return response.status(200).json({ Atenção: 'Tipo de movimentação excluida com sucesso!' });
    }
}