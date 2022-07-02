const bcrypt = require("bcrypt");
const User = require("../db/model/user.model");

const authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const matchedUser = await User.findOne({ email });

    // user not found
    if (!matchedUser) {
      res.status(404).send("User not found :(");
    }

    const isAuthenticated = await bcrypt.compare(
      password,
      matchedUser.password
    );

    if (isAuthenticated) {
      res.status(200).send("Welcome back!");
    } else {
      res.status(401).send("Wrong password :(");
    }
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  authenticateUser,
};
