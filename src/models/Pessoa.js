const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model{
    static init(sequelize){
        super.init({
            codigosetor: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            atividade: DataTypes.STRING,
            urlfoto: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'pessoas'        
        })
    }
    static associate(models){
        this.hasMany(models.Movimentacao, { foreignKey: 'pessoa_id', as: 'movimentacao'});
    }
}
module.exports = Pessoa;