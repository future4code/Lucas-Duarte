import { Request, Response } from "express";
import { checkForUserId } from "../../functions/validateUser";
import { checkforTaskId } from "../../functions/validateTask";
import { insertIntoRelationalTable } from "../../data/userTaskRelation/insertIntoRelationalTable";

export async function assignTask(req: Request, res: Response): Promise<void> {
  try {
    // const { task_id, responsible_user_id } = req.body;

    const taskId = req.body.task_id;
    const responsibleUserId = req.body.responsible_user_id;

    if (!taskId || !responsibleUserId) {
      throw new Error(
        "You need to send the task id and the id of the user you want to assign the task"
      );
    }

    await checkForUserId(responsibleUserId);
    await checkforTaskId(taskId);

    await insertIntoRelationalTable(taskId, responsibleUserId);
    res.status(201).send("Task assigned to user!");
  } catch (error) {
    res.send(error.message);
  }
}
