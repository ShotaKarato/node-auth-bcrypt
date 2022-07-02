const mongoose = require("mongoose");
// dotenv
require("dotenv").config();

const connect = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log(`🚀 DB connected`);
  } catch (e) {
    console.loge(e.message);
  }
};

module.exports = connect;
