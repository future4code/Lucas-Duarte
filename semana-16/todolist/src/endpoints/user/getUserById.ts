import { Request, Response } from "express";
import { selectUserWhereId } from "../../data/user/selectUserWhereId";
import { checkForUserId } from "../../functions/validateUser";
import { User } from "../../types";

export async function getUserById(req: Request, res: Response): Promise<void> {
  try {
    const { id }: any = req.params;
    await checkForUserId(id);

    const userById: User = await selectUserWhereId(id);

    const user = {
      id: userById.id,
      nickname: userById.nickname
    };

    res.status(200).send(user);
  } catch (error) {
    res.send(error.message);
  }
}
