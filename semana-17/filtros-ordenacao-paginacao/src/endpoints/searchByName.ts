import { Request, Response } from "express";
import { filterByName } from "../data/selectUsers";

export const searchByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name: string = String(req.query.name);

    if (!name) {
      throw new Error("Você deve inserir um valor para 'name'");
    }

    const users = await filterByName(name);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
