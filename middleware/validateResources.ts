import { NextFunction, Request, RequestHandler, Response } from "express";
import { AnyZodObject } from "zod";

const validateResources = <T extends AnyZodObject>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
      });
      next();
    } catch (e: any) {
      res.status(400).send(e.errors);
    }
  };
};

export default validateResources;
