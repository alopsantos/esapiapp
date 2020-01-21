const express = require('express');
const PessoaController = require('./controllers/PessoaController');

const routes = express.Router();

routes.post('/pessoas', PessoaController.store);
routes.get('/pessoas', PessoaController.index);
routes.put('/pessoas/:pessoa_id', PessoaController.update);
routes.delete('/pessoa/:pessoa_id', PessoaController.delete);


module.exports = routes;