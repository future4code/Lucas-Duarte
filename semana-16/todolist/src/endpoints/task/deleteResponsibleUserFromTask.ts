import { Request, Response } from "express";
import { checkForUserId } from "../../functions/validateUser";
import { checkforTaskId } from "../../functions/validateTask";
import { deleteRelationWhereTaskIdAndUserId } from "../../data/userTaskRelation/deleteRelation";
import { selectResponsibleUsersForTask } from "../../data/userTaskRelation/selectRelations";

export async function deleteResponsibleUserFromTask(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const taskId: string = String(req.params.taskId);
    await checkforTaskId(taskId);

    const responsibleUserId: string = String(req.params.responsibleUserId);
    await checkForUserId(responsibleUserId);

    const responsibleUsersForTask = await selectResponsibleUsersForTask(taskId);
    const isUserAssignedToThatTask = responsibleUsersForTask.find(
      user => user.id === Number(responsibleUserId)
    );
    if (!isUserAssignedToThatTask) {
      throw new Error("This user is not assigned to this task");
    }

    await deleteRelationWhereTaskIdAndUserId(taskId, responsibleUserId);
    res.status(201).send("User removed from task!");
  } catch (error) {
    res.send(error.message);
  }
}
