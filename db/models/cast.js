'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cast.belongsToMany(models.Movie, {through : models.MovieCast})
    }
  };
  Cast.init({
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    birth_date: DataTypes.DATE,
    died_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cast',
    underscored: true,
  });
  return Cast;
};