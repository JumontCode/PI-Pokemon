const Type = require("../tableType");

const findAllTypes = async () => {
  const types = await Type.findAll();
  return types;
};

module.exports = findAllTypes;
