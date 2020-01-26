const Movimentacao = require('../models/Movimentacao');

module.exports = {
  async index(request, response){
    const movimentacao = await Movimentacao.findAll({
      include: { association: 'pessoa'}
    });
    return response.json(movimentacao);
  }
}