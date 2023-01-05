const { User } = require("../../models/user");
const { httpError } = require("../../helpers");

const changeSubscription = async (req, res) => {
  const { subscription } = req.body;
  const availableSubscriptions = ["starter", "pro", "business"];
  if (!availableSubscriptions.includes(subscription)) {
    throw httpError(404, "Wrong type of subscription");
  }
  const result = await User.findByIdAndUpdate(
    req.user._id,
    { subscription },
    { new: true }
  );
  if (!result) {
    throw httpError(404, "missing field subscription");
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result: result,
    },
  });
};

module.exports = changeSubscription;
