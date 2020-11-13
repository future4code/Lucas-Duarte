import { Request, Response } from "express";
import { validateBody } from "../functions/validations";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";
import { hashPassword } from "../services/hashManager";
import insertUser from "../data/insertUser";
import { User } from "../types";

export default async function signUp(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, password } = req.body;
    validateBody({ name, email, password });

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    const cypherPassword = await hashPassword(password);
    const id: string = generateId();

    const user: User = {
      id,
      name,
      email,
      password: cypherPassword
    };

    await insertUser(user);

    const token: string = generateToken({ id });

    res.status(200).send({ message: "User created", token });
  } catch (error) {
    if (error.errno === 1062) {
      res.send("Email already registered.");
    }

    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
