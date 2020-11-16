import { Request, Response } from "express";

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const input: any = {
      email,
      password
    };

    const token: string = "";

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    });
  }
}
