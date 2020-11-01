import { Request, Response } from "express";
import { selectTasksWhereDateIsLessThanCurDate } from "../../data/task/selectTasks";
import { Task } from "../../types";
import { buildTaskObject } from "../../functions/utils";

export async function getDelayedTasks(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const tasks: Task[] = await selectTasksWhereDateIsLessThanCurDate();
    const response: {} = await buildTaskObject(tasks);
    res.status(200).send(response);
  } catch (error) {
    res.send(error.message);
  }
}
