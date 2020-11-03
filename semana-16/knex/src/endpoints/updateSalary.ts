import { Request, Response } from "express";
import { updateActorSalary } from "../data/updateActor";
import { selectActorById } from "../data/selectActorBy";

export const updateSalary = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { salary } = req.body;

    const searchForId = await selectActorById(id);

    if (searchForId.length === 0) {
      throw new Error("Não identificamos esse ID");
    }

    if (!salary) {
      throw new Error("Envie salário no body");
    }

    updateActorSalary(id, Number(salary));

    res.status(200).send("Salário atualizado!");
  } catch (error) {
    res.send(error.message);
  }
};
