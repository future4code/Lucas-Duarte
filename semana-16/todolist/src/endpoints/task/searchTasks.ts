import { Request, Response } from "express";
import { selectTasksWhereTitleOrDescriptionLike } from "../../data/task/selectTasks";
import { buildTaskObject } from "../../functions/utils";

export async function searchTasks(req: Request, res: Response): Promise<void> {
  try {
    if (!req.query.query) {
      throw new Error("Please, send a query to search for a task");
    }
    const query: string = String(req.query.query);
    const tasks = await selectTasksWhereTitleOrDescriptionLike(query);
    const response = await buildTaskObject(tasks);
    res.status(200).send(response);
  } catch (error) {
    res.send(error.message);
  }
}
