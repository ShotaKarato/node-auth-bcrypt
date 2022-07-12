import { Request, Response } from "express";

const bcrypt = require("bcrypt");
const User = require("../db/model/user.model");
const { signJWT } = require("../utils/jwt.utils");
require("dotenv").config();

const authenticateUserHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const matchedUser = await User.findOne({ email });
    // user not found
    if (!matchedUser) {
      return res.status(404).send("User not found :(");
    }

    const isAuthenticated = await bcrypt.compare(
      password,
      matchedUser.password
    );
    // wrong password
    if (!isAuthenticated) return res.status(401).send("Wrong password :(");

    // create accessToken
    const accessToken = signJWT(
      {
        name: matchedUser.name,
        id: matchedUser._id,
      },
      {
        expiresIn: process.env.ACCESS_TOKEN_TTL,
      }
    );

    return res.status(200).json({ accessToken });
  } catch (e: any) {
    console.log(e.message);
  }
};

export default authenticateUserHandler;
