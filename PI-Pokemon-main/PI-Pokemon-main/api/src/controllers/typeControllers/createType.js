const { Type } = require("../../db");

//* Controller for create types pokemon
const createType = async (req, res) => {
  const {name} = req.query;
  const newType = await Type.create({ name });
  res.status(200).json(newType);
};

module.exports = createType;
