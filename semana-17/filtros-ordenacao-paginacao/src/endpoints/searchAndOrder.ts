import { Request, Response } from "express";
import { filterAndOrderBy } from "../data/selectUsers";
import { inputData, User } from "../types/User";

export const searchAndOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: inputData = {
      name: String(req.query.name),
      type: String(req.query.type),
      orderBy: (req.query.orderBy as string) || "name",
      orderType: (req.query.orderType as string) || "ASC",
      page:
        Number(req.query.page as string) <= 0
          ? 1
          : Number(req.query.page as string) || 1
    };

    if (!data.name || !data.type) {
      throw new Error("Você deve inserir um valor para 'type' e 'name'");
    }

    const validOrderByValues = ["name", "type"];

    if (!validOrderByValues.includes(data.orderBy)) {
      throw new Error('Os valores para "orderBy" devem ser "type" ou "name"');
    }

    const validOrderTypeValues = ["ASC", "DESC"];

    if (!validOrderTypeValues.includes(data.orderType)) {
      throw new Error('Os valores para "orderType" devem ser "ASC" ou "DESC"');
    }

    const result: User[] = await filterAndOrderBy(data);

    if (!result.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
