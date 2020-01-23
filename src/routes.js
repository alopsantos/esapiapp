const express = require('express');
const PessoaController = require('./controllers/PessoaController');
const MovimentcaoController = require('./controllers/MovimentcaoController');

const routes = express.Router();

routes.post('/pessoas', PessoaController.store);
routes.get('/pessoas', PessoaController.index);
routes.put('/pessoas/:pessoa_id', PessoaController.update);
routes.delete('/pessoa/:pessoa_id', PessoaController.delete);

routes.get('/movimentacoes', MovimentcaoController.index);
routes.post('/pessoas/:pessoa_id/movimentacao', MovimentcaoController.store);
routes.put('/movimentacoes/:movimentacao_id', MovimentcaoController.update);
routes.delete('/movimentacoes/:movimentacao_id', MovimentcaoController.delete);


module.exports = routes;