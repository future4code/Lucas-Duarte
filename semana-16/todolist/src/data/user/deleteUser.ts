import { connection } from "../../index";

export async function deleteUserWhereId(userId: string): Promise<void> {
  try {
    await connection
      .where("id", `${userId}`)
      .del()
      .from("ToDoListUser");
  } catch (error) {
    throw new Error("Couldn't delete user. Try again later");
  }
}
