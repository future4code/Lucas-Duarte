import { Request, Response } from "express";
import { checkForUserId } from "../../functions/validateUser";
import { insertIntoTask } from "../../data/task/insertIntoTask";

export async function createTask(req: Request, res: Response): Promise<void> {
  try {
    const { title, description, limitDate, creatorUserId } = req.body;

    if (!title || !description || !limitDate || !creatorUserId) {
      throw new Error(
        "You need to send a title, a description, a limit date and an user id"
      );
    }

    await checkForUserId(creatorUserId);

    insertIntoTask(title, description, limitDate, creatorUserId);
    res.status(201).send("New task created!");
  } catch (error) {
    res.send(error.message);
  }
}
