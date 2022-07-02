const users = require("../users");
const bcrypt = require("bcrypt");

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  const matchedUser = users.find((user) => user.email === email);

  // user not found
  if (!matchedUser) {
    res.status(404).send("User not found :(");
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    matchedUser.password
  );
  // wrong password
  if (!isPasswordCorrect) {
    res.status(401).send("Wrong password :(");
  }
  res.status(200).send("Welcome back!");
};

module.exports = {
  authenticateUser,
};
