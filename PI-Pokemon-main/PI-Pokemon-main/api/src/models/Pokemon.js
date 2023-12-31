const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      // type: DataTypes.STRING,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    stroke: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    defense: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    speed: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    height: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
  },{
    timestamps: false
  });
};
