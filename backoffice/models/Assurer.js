'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assurer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Assurer.init({
    serviceId: DataTypes.INTEGER,
    prestataireId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Assurer',
  });
  return Assurer;
};