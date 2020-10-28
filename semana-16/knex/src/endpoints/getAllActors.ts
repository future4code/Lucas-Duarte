import { Request, Response } from "express";
import { Actor } from "../types";
import { selectAllActors } from "../data/selectAllActors";

export const getAllActors = async (req: Request, res: Response) => {
  try {
    const actors: Actor[] = await selectAllActors();

    if (!actors.length) {
      res.statusCode = 404;
      throw new Error("Não há atores");
    }

    res.status(200).send(actors);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
