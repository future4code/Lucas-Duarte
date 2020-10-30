import { connection } from "../../index";
import { User } from "../../types";

export async function selectAllUsers(): Promise<User[]> {
  try {
    const result = await connection.select().from("UserToDoList");
    return result;
  } catch (error) {
    return [];
  }
}
