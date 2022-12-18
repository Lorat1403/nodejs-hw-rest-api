const Contact = require("../../models/contact");

const { httpError } = require("../../helpers");

const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json({
    message: "Contact deleted",
  });
};

module.exports = removeById;
