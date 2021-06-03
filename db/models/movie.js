"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsToMany(models.Cast, { through: models.MovieCast });
      Movie.belongsTo(models.Category)
    }
  }
  Movie.init(
    {
      category_id: DataTypes.INTEGER,
      title: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Movie",
      underscored: true,
    }
  );
  return Movie;
};
