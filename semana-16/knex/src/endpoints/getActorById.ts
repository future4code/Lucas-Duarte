import { Request, Response } from "express";

import { selectActorById } from "../data/selectActorBy";

export const getActorById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const actor = await selectActorById(id);

    res.status(201).send(actor);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
