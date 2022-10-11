const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id:
    type: Datatypes.INTERGER,
    allownull: false,
    primarykey: true,
    autoincrement: true,
  },
  catagory_name: {
    type: DataTypes, STRING,
    allownull: false
  }
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
