const Pessoa = require('../models/Pessoa');

module.exports = {
    async index(request, response){
        const pessoas = await Pessoa.findAll();
        return response.json(pessoas);
    },
    async store(request, response){
        const { codigosetor, nome, email, password, atividade, urlfoto } = request.body;
        const pessoa = await Pessoa.create({ 
            codigosetor,
            nome,
            email,
            password,
            atividade,urlfoto
        });

        console.log(pessoa);
        return response.json(pessoa);
    },
    async delete(request, response){
        const { pessoa_id } = request.params;
        const pessoa = await response.findByPK(pessoa_id);
        
        if(!pessoa){
            return response.status(400).json({ Ataenção: 'Pessoa não cadastrada'});
        }

        await pessoa.destroy();
        return response.status(200).json({ Atenção: 'Pessoa excluida com sucesso.' });
    },
    async update(request, response){
        const { pessoa_id } = request.params;
        const pessoa = await Pessoa.findByPK(pessoa_id);

        if(!pessoa){
            return response.status(400).json({ Atenção: 'Pessoa não cadastrada'});
        }

        const { codigosetor, nome, email, password, atividade, urlfoto } = await pessoa.update(request.body);

        return response.json({
            pessoa_id,
            codigosetor,
            nome,
            email,
            password,
            atividade,
            urlfoto,
        })
    }
}