import { connection } from "..";
import { USER_ROLES } from "../types/types";

export default async function selectUserWhereEmailIs(email: string) {
  try {
    const result = await connection()
      .select("*")
      .from("User_Arq")
      .where({ email });
    if (!result[0]) {
      throw new Error("Usuário não encontrado");
    }
    return result[0];
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}
