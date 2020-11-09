import { Request, Response } from "express";
import { validateBody } from "../services/validations";
import { User } from "../type";
import { insertUser } from "../data/insertUser";
import generateId from "../services/idGenerator";

import { generateToken } from "../services/authenticator";

export default async function createUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    await validateBody({ email, password });

    if (!email.includes("@")) {
      throw new Error("Email inválido!");
    }

    if (password.length < 6) {
      throw new Error("Senha deve conter no mínimo 6 caracteres");
    }

    const id: string = generateId();

    const token: string = generateToken({ id });

    const newUser: User = {
      id,
      email,
      password
    };

    await insertUser(newUser);

    res.status(200).send({ message: "Usuário criado com sucesso!", token });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
