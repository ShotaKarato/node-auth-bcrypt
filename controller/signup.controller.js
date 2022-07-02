// const users = require("../users");
const bcrypt = require("bcrypt");
const User = require("../db/model/user.model");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ name: user.name, email: user.email });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  createUser,
};
