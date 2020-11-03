import { Request, Response } from "express";
import { Actor, ACTOR_GENDER } from "../types";
import { deleteFromActor } from "../data/deleteFromActor";

export const deleteActor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await deleteFromActor(id);

    res.status(200).send("Ator deletado com sucesso!");
  } catch (error) {
    res.send(error.message);
  }
};
