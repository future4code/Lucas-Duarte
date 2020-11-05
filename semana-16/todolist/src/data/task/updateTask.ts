import { connection } from "../../index";
import { STATUS } from "../../types";

export async function updateTaskStatus(
  taskId: string,
  status: STATUS
): Promise<void> {
  try {
    await connection
      .where("id", "=", `${taskId}`)
      .update({
        status: `${status}`
      })
      .into("ToDoListTask");
  } catch (error) {
    throw new Error("We couldn't update the status. Try again later.");
  }
}
