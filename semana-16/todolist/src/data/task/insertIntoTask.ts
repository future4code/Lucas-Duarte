import { connection } from "../../index";
import { convertDateFormatToDatabase } from "../../functions/dates";

export async function insertIntoTask(
  title: string,
  description: string,
  limitDate: string,
  userId: number
): Promise<void> {
  try {
    await connection
      .insert({
        title,
        description,
        limitDate: convertDateFormatToDatabase(limitDate),
        status: "to do",
        user_id: userId
      })
      .into("ToDoListTask");
  } catch (error) {
    throw new Error("We couldn't create a new task. Try again later.");
  }
}
