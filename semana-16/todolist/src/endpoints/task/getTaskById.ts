import { Request, Response } from "express";
import { selectTaskWhereIdIs } from "../../data/task/selectTasks";
import { selectUserWhereIdIs } from "../../data/user/selectUsers";
import { selectResponsibleUsersForTask } from "../../data/userTaskRelation/selectRelations";
import { checkforTaskId } from "../../functions/validateTask";
import { convertDateFormatToUser } from "../../functions/dates";

export async function getTaskById(req: Request, res: Response): Promise<void> {
  try {
    const taskId: string = String(req.params.id);
    await checkforTaskId(taskId);

    const task = await selectTaskWhereIdIs(taskId);
    const user = await selectUserWhereIdIs(task.user_id);
    const responsibleUsers = await selectResponsibleUsersForTask(taskId);

    const response = {
      taskId: task.id,
      title: task.title,
      description: task.description,
      limitDate: convertDateFormatToUser(task.limitDate),
      status: task.status,
      creatorUserId: task.user_id,
      creatorUserNickname: user.nickname,
      responsibleUsers: responsibleUsers
    };

    res.status(200).send(response);
  } catch (error) {
    res.send(error.message);
  }
}
