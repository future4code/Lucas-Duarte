import { Task, User } from "../types";
import { selectUserWhereIdIs } from "../data/user/selectUsers";
import { convertDateFormatToUser } from "./dates";

export async function buildTaskObject(tasks: Task[]): Promise<{}> {
  const users: User[] = [];

  for (let i = 0; i < tasks.length; i++) {
    users.push(await selectUserWhereIdIs(tasks[i].user_id));
  }

  const response = {
    tasks: tasks.map(task => {
      let user: User | undefined = users.find(user => user.id === task.user_id);
      return {
        id: task.id,
        title: task.title,
        description: task.description,
        limitdate: convertDateFormatToUser(task.limitDate),
        status: task.status,
        creatorUserId: task.user_id,
        creatorUserNickname: user!.nickname
      };
    })
  };
  return response;
}
