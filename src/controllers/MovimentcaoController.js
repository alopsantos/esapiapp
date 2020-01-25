const Movimentacao = require('../models/Movimentacao');
const Pessoa = require('../models/Pessoa');

module.exports = {
    async store(request, response){
      const { pessoa_id } = request.params;
      const { tipomovimentacao_id, tipopagamento_id, transacao, data, datacompra, datavenda, datacancelamento, valortotal, valorcancelado, protocolo } = request.body;
      
      const pessoa = await Pessoa.findByPk(pessoa_id);

      if(!pessoa) {
        return response.status(400).json({ error: 'Pessoa nao encontrada !'});
      }

      const movimentacao = await Movimentacao.create({
        tipomovimentacao_id,
        tipopagamento_id,
        transacao,
        data,
        datacompra,
        datavenda,
        datacancelamento,
        valortotal,
        valorcancelado,
        protocolo,
        pessoa_id,
      });
      return response.json(movimentacao);
    },
    async index(request, response){
      const movimentacao = await Movimentacao.findAll();

      if(!movimentacao){
        return response.status(400).json({ Atnção: 'Nenhuma movimentacao cadastrada!'});
      }

      return response.json(movimentacao);
    },
    async update(request, response){
      
      const { movimentacao_id } = request.params;

      const movimentacao = await Movimentacao.findByPk(movimentacao_id);

      if(!movimentacao){
        return response.status(400).json({ Atenção: 'Movimentação não encontrada!'});
      }
      const {
        tipomovimentacao_id,
        tipopagamento_id,
        transacao,
        data,
        datacompra,
        datavenda,
        datacancelamento,
        valortotal,
        valorcancelado,
        protocolo,
        pessoa_id,
      } = await movimentacao.update(request.body);
      
      return response.json({
        tipomovimentacao_id,
        tipopagamento_id,
        transacao,
        data,
        datacompra,
        datavenda,
        datacancelamento,
        valortotal,
        valorcancelado,
        protocolo,
        pessoa_id,
      });
    },
    async delete(request, response){
      console.log("tesque update");
      const { movimentacao_id } = request.params;
      const movimentacao = await Movimentacao.findByPk(movimentacao_id);
      if(!movimentacao){
        return response.status(400).json({ Atenção: "Movimentacao não econtrada!"})
      }
      await movimentacao.destroy();
      return response.status(200).json({ Atenção: 'Movimentacao excluida com sucesso!' });
    }
}