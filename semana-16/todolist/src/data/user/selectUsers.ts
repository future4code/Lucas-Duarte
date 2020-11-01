import { connection } from "../../index";
import { User } from "../../types";

export async function selectAllUsers(): Promise<User[]> {
  try {
    const result = await connection.select().from("ToDoListUser");
    return result;
  } catch (error) {
    return [];
  }
}

export async function selectUserWhereIdIs(id: string | number): Promise<User> {
  try {
    const result = await connection
      .where("id", `${Number(id)}`)
      .select()
      .from("ToDoListUser");

    return result[0];
  } catch (error) {
    throw new Error("We couldn't select the user. Try again later.");
  }
}

export async function selectUsersWhereNicknameOrEmailLike(
  query: string
): Promise<User[]> {
  try {
    const result = await connection
      .where("nickname", "like", `%${query}%`)
      .orWhere("email", "like", `%${query}%`)
      .select("id", "nickname")
      .from("ToDoListUser");
    return result;
  } catch (error) {
    throw new Error("We couldn't select any user. Try again later.");
  }
}
