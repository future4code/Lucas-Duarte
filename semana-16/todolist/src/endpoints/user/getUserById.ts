import { Request, Response } from "express";
import { selectUserWhereIdIs } from "../../data/user/selectUsers";
import { checkForUserId } from "../../functions/validateUser";
import { User } from "../../types";

export async function getUserById(req: Request, res: Response): Promise<void> {
  try {
    const { id }: any = req.params;
    await checkForUserId(id);

    const userById: User = await selectUserWhereIdIs(id);

    const user = {
      id: userById.id,
      nickname: userById.nickname
    };

    res.status(200).send(user);
  } catch (error) {
    res.send(error.message);
  }
}
