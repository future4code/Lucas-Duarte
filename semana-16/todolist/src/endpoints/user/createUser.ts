import { Request, Response } from "express";
import { insertIntoUser } from "../../data/user/insertIntoUser";
import {
  checkIfUserEmailExists,
  checkIfUserNicknameExists
} from "../../functions/validateUser";

export async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const { name, nickname, email } = req.body;

    if (!name || !nickname || !email) {
      throw new Error("You need to send a name, a nickname and an email");
    }

    await checkIfUserEmailExists(email);
    await checkIfUserNicknameExists(nickname);

    await insertIntoUser(name, nickname, email);

    res.status(201).send("New user created!");
  } catch (error) {
    res.send(error.message);
  }
}
