import { Request, Response } from "express";
import { signUpInput } from "../types/types";
import createUser from "../business/createUser";

export default async function signUp(req: Request, res: Response) {
  try {
    const { name, email, password, role } = req.body;
    const input: signUpInput = {
      name,
      email,
      password,
      role
    };

    const token: string = await createUser(input);

    res.status(200).send({ message: "User created succesfully", token });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    });
  }
}
