import { connection } from "../../index";
import { Task } from "../../types";

export async function selectAllTasks(): Promise<Task[]> {
  try {
    const result = await connection.select().from("Task");
    return result;
  } catch (error) {
    return [];
  }
}
