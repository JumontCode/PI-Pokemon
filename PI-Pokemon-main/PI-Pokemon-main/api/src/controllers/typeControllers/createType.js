const { Type } = require("../../db");

//* Controller for create types pokemon
const createType = async (name) => {
  const newType = await Type.create({ name });
  return newType;
};

module.exports = createType;
