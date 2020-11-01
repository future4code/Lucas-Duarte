import { connection } from "../../index";
import { Task } from "../../types";

export async function selectAllTasks(): Promise<Task[]> {
  try {
    const result = await connection.select().from("ToDoListTask");
    return result;
  } catch (error) {
    return [];
  }
}

export async function selectTaskWhereIdIs(id: string): Promise<Task> {
  try {
    const result = await connection
      .where("id", `${Number(id)}`)
      .select()
      .from("ToDoListTask");

    return result[0];
  } catch (error) {
    throw new Error("We couldn't select the task. Try again later.");
  }
}

export async function selectTasksWhereStatusIs(
  status: string
): Promise<Task[]> {
  try {
    const result = await connection
      .where("status", `${status}`)
      .select()
      .from("ToDoListTask");
    return result;
  } catch (error) {
    return [];
  }
}

export async function selectTasksWhereUserIdIs(
  userId: string
): Promise<Task[]> {
  try {
    const result = await connection
      .where("user_id", `${Number(userId)}`)
      .select()
      .from("ToDoListTask");
    return result;
  } catch (error) {
    return [];
  }
}

export async function selectTasksWhereTitleOrDescriptionLike(
  query: string
): Promise<Task[]> {
  try {
    const result = await connection
      .where("title", "like", `%${query}%`)
      .orWhere("description", "like", `%${query}%`)
      .select()
      .from("ToDoListTask");

    return result;
  } catch (error) {
    throw new Error("We couldn't select any task. Try again later.");
  }
}

export async function selectTasksWhereDateIsLessThanCurDate(): Promise<Task[]> {
  try {
    const result = await connection.raw(
      `SELECT * FROM ToDoListTask WHERE limitDate < CURDATE();`
    );
    return result[0];
  } catch (error) {
    return [];
  }
}
