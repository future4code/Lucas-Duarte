import { connection } from "../../index";
import { Task } from "../../types";

export async function selectTaskWhereId(id: number): Promise<Task> {
  try {
    const result = await connection
      .where("id", `${id}`)
      .select()
      .from("Task");

    return result[0];
  } catch (error) {
    throw new Error("We couldn't select the task. Try again later.");
  }
}
