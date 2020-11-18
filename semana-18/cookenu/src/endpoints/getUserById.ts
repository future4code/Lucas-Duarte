import { Request, Response } from "express";
import { User, AuthenticationData } from "../types";
import { selectUserWhereIdIs } from "../data/selectUser";
import { getTokenData } from "../services/authenticator";

export default async function getUserById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token: string = req.headers.authorization as string;
    const tokenData: AuthenticationData = await getTokenData(token);

    const user: User = await selectUserWhereIdIs(req.params.id);

    if (!user) {
      throw new Error("User not found");
    }

    const { id, name, email } = user;

    res.status(200).send({ id, name, email });
  } catch (error) {
    if (error.message.includes("jwt must be provided")) {
      res.send("Send token in header");
    }
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
