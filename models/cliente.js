'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};