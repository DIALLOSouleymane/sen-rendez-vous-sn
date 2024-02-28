'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prestataire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prestataire.init({
    prenom: DataTypes.STRING,
    nom: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    fonction: DataTypes.STRING,
    nom_entreprise: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prestataire',
  });
  return Prestataire;
};