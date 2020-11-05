import { Request, Response } from "express";
import { checkForUserId } from "../../functions/validateUser";
import { selectTasksWhereUserIdIs } from "../../data/task/selectTasks";
import { Task, User } from "../../types";
import { buildTaskObject } from "../../functions/utils";

export async function getTasksByUserId(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (!req.query.userCreatorId) {
      throw new Error(
        "Please, send user Id as query param like: userCreatorId=id"
      );
    }

    const userCreatorId: string = String(req.query.userCreatorId);
    await checkForUserId(userCreatorId);

    const tasks: Task[] = await selectTasksWhereUserIdIs(userCreatorId);
    const response: {} = await buildTaskObject(tasks);
    res.status(200).send(response);
  } catch (error) {
    res.send(error.message);
  }
}
