const express = require('express');
const PessoaController = require('./controllers/PessoaController');
const MovimentcaoController = require('./controllers/MovimentcaoController');
const TipopagamentoController = require('./controllers/TipopagamentoController');
const TipomovimentoController = require('./controllers/TipomovimentoController');
const SearchVendaMovimentacao = require('./controllers/SearchVendaMovimentacao');

const routes = express.Router();

routes.post('/pessoas', PessoaController.store);
routes.get('/pessoas', PessoaController.index);
routes.put('/pessoas/:pessoa_id', PessoaController.update);
routes.delete('/pessoas/:id', PessoaController.delete);

routes.get('/searchmovimentacaos', SearchVendaMovimentacao.index);

routes.get('/movimentacoes', MovimentcaoController.index);
routes.post('/pessoas/:pessoa_id/movimentacao', MovimentcaoController.store);
routes.put('/movimentacoes/:movimentacao_id', MovimentcaoController.update);
routes.delete('/movimentacoes/:movimentacao_id', MovimentcaoController.delete);

routes.post('/tipopagamentos', TipopagamentoController.store);
routes.get('/tipopagamentos', TipopagamentoController.index);
routes.put('/tipopagamentos/:tipopagamento_id', TipopagamentoController.update);
routes.delete('/tipopagamentos/:tipopagamento_id', TipopagamentoController.delete);

routes.post('/tipomovimentos', TipomovimentoController.store);
routes.get('/tipomovimentos', TipomovimentoController.index);
routes.put('/tipomovimentos/:tipomovimento_id', TipomovimentoController.update);
routes.delete('/tipomovimento/:tipomovimento_id', TipomovimentoController.delete);

module.exports = routes;