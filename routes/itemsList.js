const express = require("express");
const { authorizeUser } = require("../middleware/authorizeUser");
const routes = express.Router();

// dummy data
const itemsList = [
  {
    name: "Cabbage",
    price: "$2",
  },
  {
    name: "Onion",
    price: "$1",
  },
];

routes.get("/", authorizeUser, (req, res) => {
  return res.status(200).json(itemsList);
});
module.exports = routes;
