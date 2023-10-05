const { Type } = require("../../db");

const findAllTypes = async () => {
  const typePokemon = await Type.findAll();
  return typePokemon;
};

const createType = async (name) => {
  const newType = await Type.create({ name });
  return newType;
};

module.exports = findAllTypes, createType;
