import { connection } from "../../index";
import { User } from "../../types";

export async function selectUserWhereId(id: number): Promise<User> {
  try {
    const result = await connection
      .where("id", `${id}`)
      .select()
      .from("UserToDoList");

    return result[0];
  } catch (error) {
    throw new Error("We couldn't select the user. Try again later.");
  }
}
