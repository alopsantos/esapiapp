const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pessoa = require('../models/Pessoa');
const Movimentacao = require('../models/Movimentacao');
const Tipopagamento = require('../models/Tipopagamento');

const connection = new Sequelize(dbConfig);

Pessoa.init(connection);
Movimentacao.init(connection);
Tipopagamento.init(connection);

Movimentacao.associate(connection.models);

module.exports = connection;