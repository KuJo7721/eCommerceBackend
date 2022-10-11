const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id:
    type: Datatypes.INTEGER,
    allownull: false,
    primarykey: true,
    autoincrement: true,
  },
  product_id: {
    type: Datatypes.INTEGER,
    reference: {
     model: 'product',
     key: 'id'
    }
  tag_id: {
    type: Datatypes.INTEGER,
    reference: {
     model: 'tag',
     key: 'id'
    }

  }
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
