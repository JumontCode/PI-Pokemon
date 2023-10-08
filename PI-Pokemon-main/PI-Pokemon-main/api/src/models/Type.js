const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define('type', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true,
        },
        name:{
            type: DataTypes.ENUM,
            values: ["magic", "water", "fire", "rock", 'unknown'],
            allowNull: false,
            defaultValue: "unknown",
        }
    },
    {
        timestamps: false
    })
}
