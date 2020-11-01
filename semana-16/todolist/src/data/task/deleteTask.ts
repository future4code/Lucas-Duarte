import { connection } from "../../index";

export async function deleteTaskWhereId(taskId: string): Promise<void> {
  try {
    await connection
      .where("id", `${taskId}`)
      .del()
      .from("ToDoListTask");
  } catch (error) {
    throw new Error("Couldn't delete task. Try again later");
  }
}
