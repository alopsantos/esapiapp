const Pessoa = require('../models/Pessoa');

module.exports = {
  async index(request, response){
    const { pessoa_id } = request.params;
    const pessoa = await Pessoa.findByPk(pessoa_id);
    return response.json(pessoa);
  }
}