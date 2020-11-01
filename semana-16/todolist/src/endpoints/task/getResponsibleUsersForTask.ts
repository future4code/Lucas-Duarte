import { Request, Response } from "express";
import { checkforTaskId } from "../../functions/validateTask";
import { selectResponsibleUsersForTask } from "../../data/userTaskRelation/selectRelations";
import { selectUserWhereIdIs } from "../../data/user/selectUsers";

export async function getResponsibleUsersForTask(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const taskId: string = String(req.params.id);
    await checkforTaskId(taskId);

    const responsibleUsers = await selectResponsibleUsersForTask(taskId);

    for (let i = 0; i < responsibleUsers.length; i++) {
      let userId = responsibleUsers[i].responsible_user_id;
      let user = await selectUserWhereIdIs(userId);
      responsibleUsers[i].nickname = user.nickname;
    }

    const response = {
      users: responsibleUsers.map(user => {
        return {
          id: user.responsible_user_id,
          nickname: user.nickname
        };
      })
    };

    res.status(200).send(response);
  } catch (error) {
    res.send(error.message);
  }
}
