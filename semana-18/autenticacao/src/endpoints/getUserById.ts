import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { selectUserById } from "../data/selectUserById";

export default async function getUserById(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const authenticationData = await getTokenData(token);
    const user = await selectUserById(authenticationData.id);

    res.status(200).send({ id: user.id, email: user.email });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
