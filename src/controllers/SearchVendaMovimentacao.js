const Movimentacao = require('../models/Movimentacao');
const op = require('sequelize')

module.exports = {
  async index(request, response) {
    console.log(request.body);
    const { dataatual } = request.body;
    const movimentacao = await Movimentacao.findAll({
      where: {
        datavenda: {
          [op.lt]: dataatual
        }
      },
      include: { association: 'pessoa' }
    });
    return response.json(movimentacao);
  }
}