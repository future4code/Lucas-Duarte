import { connection } from "../../index";

export async function deleteRelationWhereTaskId(taskId: string): Promise<void> {
  try {
    await connection
      .where("task_id", `${taskId}`)
      .del()
      .from("TodoListResponsibleUserTaskRelation");
  } catch (error) {
    throw new Error("Couldn't delete task-user relation. Try again later");
  }
}

export async function deleteRelationWhereUserId(userId: string): Promise<void> {
  try {
    await connection
      .where("responsible_user_id", `${userId}`)
      .del()
      .from("TodoListResponsibleUserTaskRelation");
  } catch (error) {
    throw new Error("Couldn't delete task-user relation. Try again later");
  }
}

export async function deleteRelationWhereTaskIdAndUserId(
  taskId: string,
  userId: string
): Promise<void> {
  try {
    await connection.raw(
      `DELETE FROM TodoListResponsibleUserTaskRelation WHERE responsible_user_id = ${userId} AND task_id = ${taskId};`
    );
  } catch (error) {
    throw new Error(
      "Couldn't delete users assigned to the task. Try again later"
    );
  }
}
