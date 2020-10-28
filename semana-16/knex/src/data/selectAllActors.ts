import { connection } from "../index";
import { Actor } from "../types";

export async function selectAllActors(): Promise<Actor[]> {
  try {
    const result = await connection.raw("SELECT * FROM Actor");

    return result[0];
  } catch (error) {
    console.log(error);
    return [];
  }
}
