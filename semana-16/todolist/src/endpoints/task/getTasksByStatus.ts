import { Request, Response } from "express";
import { selectTasksWhereStatusIs } from "../../data/task/selectTasks";
import { Task } from "../../types";
import { checkIfItIsAValidStatus } from "../../functions/validateTask";
import { buildTaskObject } from "../../functions/utils";

export async function getTasksByStatus(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (!req.query.status) {
      throw new Error("Please, send a status in query");
    }

    const status: string = String(req.query.status);
    await checkIfItIsAValidStatus(status);

    const tasks: Task[] = await selectTasksWhereStatusIs(status);
    const response = await buildTaskObject(tasks);
    res.status(200).send(response);
  } catch (error) {
    res.send(error.message);
  }
}
