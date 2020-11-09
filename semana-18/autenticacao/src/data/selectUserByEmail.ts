import { connection } from "..";

export const selectUserByEmail = async (email: string): Promise<any> => {
  const result = await connection
    .select()
    .where({ email })
    .from("Auth_User");
  return result[0];
};
