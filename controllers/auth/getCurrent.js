// const { User } = require("../../models/user");
// const { httpError } = require("../../helpers");

const getCurrent = (req, res) => {
  const { email, subscription } = req.user;

  res.json({
    email,
    subscription,
  });
};

module.exports = getCurrent;
