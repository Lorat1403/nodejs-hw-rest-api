const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const changeSubscription = require("./changeSubscription");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  changeSubscription,
  updateAvatar,
  verify,
  resendVerifyEmail,
};
