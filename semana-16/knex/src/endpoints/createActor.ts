import { Request, Response } from "express";
import { insertActor } from "../data/insertActor";

export const createActor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await insertActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.gender
    );
    res.status(200).send("Novo ator criado!");
  } catch (error) {
    res.send(error.message);
  }
};
