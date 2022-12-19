const Contact = require("../../models/contact");

const { httpError } = require("../../helpers");

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findById(id);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json(result);
};

module.exports = getById;
