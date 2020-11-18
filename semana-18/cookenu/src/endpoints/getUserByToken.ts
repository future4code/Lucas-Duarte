import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData, User } from "../types";
import { selectUserWhereIdIs } from "../data/selectUser";

export default async function getUserByToken(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token: string = req.headers.authorization as string;
    const tokenData: AuthenticationData = await getTokenData(token);

    const user: User = await selectUserWhereIdIs(tokenData.id);
    const { id, name, email } = user;

    res.status(200).send({ id, name, email });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
