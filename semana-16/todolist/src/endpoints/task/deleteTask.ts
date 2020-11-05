import { Request, Response } from "express";
import { checkforTaskId } from "../../functions/validateTask";
import { deleteTaskWhereId } from "../../data/task/deleteTask";
import { deleteRelationWhereTaskId } from "../../data/userTaskRelation/deleteRelation";

export async function deleteTask(req: Request, res: Response): Promise<void> {
  try {
    const taskId: string = String(req.params.id);
    await checkforTaskId(taskId);
    await deleteRelationWhereTaskId(taskId);
    await deleteTaskWhereId(taskId);
    res.status(201).send("Task deleted!");
  } catch (error) {
    res.send(error.message);
  }
}
