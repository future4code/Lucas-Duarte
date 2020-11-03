import { Request, Response } from "express";
import { filterByType } from "../data/selectUsers";

export const searchByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const type: string = String(req.params.type);

    if (!type) {
      throw new Error("Você deve inserir um valor para 'type'");
    }

    const users = await filterByType(type);

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
