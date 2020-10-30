import { connection } from "../../index";

export async function insertIntoUser(
  name: string,
  nickname: string,
  email: string
): Promise<void> {
  try {
    await connection
      .insert({
        name,
        nickname,
        email
      })
      .into("UserToDoList");
  } catch (error) {
    throw new Error("We couldn't create a new user. Try again later.");
  }
}
