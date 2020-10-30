import { connection } from "../../index";

export async function updateUser(
  id: number,
  name?: string,
  nickname?: string
): Promise<void> {
  try {
    await connection
      .where("id", "=", id)
      .update({
        name: `${name}`,
        nickname: `${nickname}`
      })
      .into("UserToDoList");
  } catch (error) {
    throw new Error("We couldn't edit the user. Try again later.");
  }
}
