import { Request, Response } from "express";
import {
  checkforTaskId,
  checkIfItIsAValidStatus
} from "../../functions/validateTask";
import { updateTaskStatus } from "../../data/task/updateTask";
import { STATUS } from "../../types";

export async function alterTaskStatus(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (!req.body.status) {
      throw new Error("You need to send a new status");
    }

    const status: STATUS = req.body.status.toLowerCase();
    await checkIfItIsAValidStatus(status);

    const taskId: string = req.params.id;
    await checkforTaskId(taskId);

    await updateTaskStatus(taskId, status);
    res.status(201).send("Task status updated!");
  } catch (error) {
    res.send(error.message);
  }
}
