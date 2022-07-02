const users = require("../users");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  // const salt = await bcrypt.genSalt() - this can be omitted as long as we specify it in bcrypt.hash method
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ name, email, password: hashedPassword });
  res.status(201).json({ name, email });
};

module.exports = {
  createUser,
};
