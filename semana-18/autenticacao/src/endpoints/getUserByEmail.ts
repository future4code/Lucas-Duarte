import { Request, Response } from "express";
import { validateBody } from "../services/validations";
import { selectUserByEmail } from "../data/selectUserByEmail";

export default async function getUserByEmail(req: Request, res: Response) {
  try {
    const email = req.query.email;
    await validateBody({ email });

    if (!String(email).includes("@")) {
      throw new Error("Email inválido!");
    }

    const user = await selectUserByEmail(email as string);

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
