import { Request, Response } from "express";
import { validateBody } from "../functions/validations";
import { selectUserWhereEmailIs } from "../data/selectUser";
import { generateToken } from "../services/authenticator";
import { User } from "../types";
import { comparePassword } from "../services/hashManager";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;
    validateBody({ email, password });

    const user: User = await selectUserWhereEmailIs(email);

    if (!user) {
      throw new Error("User not found");
    }

    const hashPassword = user.password;
    const passwordIsCorrect: boolean = await comparePassword(
      password,
      hashPassword
    );

    if (!passwordIsCorrect) {
      throw new Error("Password is incorrect");
    }

    const { id } = user;
    const token = generateToken({ id });

    res.status(200).send({ message: "User logged in", token });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
