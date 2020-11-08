import { Request, Response } from "express";
import { filterAndOrderBy, selectAllUsers } from "../data/selectUsers";
import { inputData, User } from "../types/User";

export const searchUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let result: User[] = [];

    if (!req.query.name || !req.query.type) {
      result = await selectAllUsers();
    } else {
      const data: inputData = {
        name: req.query.name as string,
        type: req.query.type as string,
        orderBy: (req.query.orderBy as string) || "name",
        orderType: (req.query.orderType as string) || "ASC",
        page:
          Number(req.query.page as string) <= 0
            ? 1
            : Number(req.query.page as string) || 1
      };

      const validOrderByValues = ["name", "type"];

      if (!validOrderByValues.includes(data.orderBy)) {
        throw new Error('Os valores para "orderBy" devem ser "type" ou "name"');
      }

      const validOrderTypeValues = ["ASC", "DESC"];

      if (!validOrderTypeValues.includes(data.orderType)) {
        throw new Error(
          'Os valores para "orderType" devem ser "ASC" ou "DESC"'
        );
      }

      result = await filterAndOrderBy(data);

      if (!result.length) {
        res.statusCode = 404;
        throw new Error("No users found");
      }
    }

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
