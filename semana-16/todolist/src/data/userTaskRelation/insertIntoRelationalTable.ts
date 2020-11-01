import { connection } from "../../index";

export async function insertIntoRelationalTable(
  task_id: string,
  responsible_user_id: string
): Promise<void> {
  try {
    await connection
      .insert({
        task_id: Number(task_id),
        responsible_user_id: Number(responsible_user_id)
      })
      .into("TodoListResponsibleUserTaskRelation");
  } catch (error) {
    throw new Error("We couldn't assign this task. Try again later.");
  }
}
