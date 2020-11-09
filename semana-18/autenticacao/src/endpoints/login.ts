import { Request, Response } from "express";
import { validateBody } from "../services/validations";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    await validateBody({ email, password });

    if (!email.includes("@")) {
      throw new Error("Email inválido!");
    }

    const user = await selectUserByEmail(email);

    if (!user || user.password !== password) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    const token = await generateToken(user.id);

    res.status(200).send({ message: "Usuário logado com sucesso!", token });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
