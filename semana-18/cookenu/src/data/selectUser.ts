import { connection } from "..";
import { User } from "../types";

export async function selectUserWhereEmailIs(userEmail: string): Promise<User> {
  try {
    const user: any[] = await connection("cookenu_users")
      .select()
      .where("email", userEmail);

    const { id, name, email, password } = user[0];

    return { id, name, email, password };
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}

export async function selectUserWhereIdIs(userId: string): Promise<User> {
  try {
    const user: any[] = await connection("cookenu_users")
      .select()
      .where("id", userId);

    const { id, name, email, password } = user[0];

    return { id, name, email, password };
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}
