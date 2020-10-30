import { Request, Response } from "express";
import { checkforTaskId } from "../../functions/validateTask";
import { selectTaskWhereId } from "../../data/task/selectTaskWhereId";
import { selectUserWhereId } from "../../data/user/selectUserWhereId";
import { convertDateFormatToUser } from "../../functions/dates";

export async function getTaskById(req: Request, res: Response): Promise<void> {
  try {
    const { id }: any = req.params;
    await checkforTaskId(id);

    const task = await selectTaskWhereId(id);
    const user = await selectUserWhereId(task.user_id);

    const response = {
      taskId: task.id,
      title: task.title,
      description: task.description,
      limitDate: convertDateFormatToUser(new Date(task.limitDate)),
      status: task.status,
      creatorUserId: task.user_id,
      creatorUserNickname: user.nickname
    };

    res.status(200).send(response);
  } catch (error) {
    res.send(error.message);
  }
}
