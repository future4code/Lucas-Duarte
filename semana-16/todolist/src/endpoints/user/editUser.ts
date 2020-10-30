import { Request, Response } from "express";
import { User } from "../../types";
import {
  checkForUserId,
  checkIfUserNicknameExists
} from "../../functions/validateUser";
import { selectUserWhereId } from "../../data/user/selectUserWhereId";
import { updateUser } from "../../data/user/updateUser";

export async function editUser(req: Request, res: Response) {
  try {
    const { id }: any = req.params;
    const { name, nickname } = req.body;

    await checkForUserId(id);

    if (!name || !nickname) {
      throw new Error("You need to send a name and a nickname");
    }

    const user = await selectUserWhereId(id);

    if (nickname !== user.nickname) {
      await checkIfUserNicknameExists(nickname);
    }

    await updateUser(id, name, nickname);

    res.status(200).send("User info altered succesfully!");
  } catch (error) {
    res.send(error.message);
  }
}
