import { ErrorRequestHandler, Request, Response } from "express";

const bcrypt = require("bcrypt");
const User = require("../db/model/user.model");

const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ name: user.name, email: user.email });
  } catch (e: any) {
    console.log(e.message);
  }
};

export default createUserHandler;
