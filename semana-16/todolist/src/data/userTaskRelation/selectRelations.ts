import { connection } from "../../index";
import { selectUserWhereIdIs } from "../user/selectUsers";

export async function selectResponsibleUsersForTask(
  taskId: string
): Promise<any[]> {
  try {
    const result = await connection
      .where("task_id", `${Number(taskId)}`)
      .select("responsible_user_id")
      .from("TodoListResponsibleUserTaskRelation");
    return result;
  } catch (error) {
    throw new Error(
      "We couldn't select the responsible users for this task. Try again later."
    );
  }
}
