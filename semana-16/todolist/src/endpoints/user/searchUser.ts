import { Request, Response } from "express";
import { selectUsersWhereNicknameOrEmailLike } from "../../data/user/selectUsers";

export async function searchUser(req: Request, res: Response): Promise<void> {
  try {
    if (!req.query.query) {
      throw new Error("Please, send a query to search for an user");
    }
    const query: string = String(req.query.query);
    const users = await selectUsersWhereNicknameOrEmailLike(query);
    res.status(200).send(users);
  } catch (error) {
    res.send(error.message);
  }
}
