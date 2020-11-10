import { connection } from "..";

export const selectUserById = async (id: string): Promise<any> => {
  const result = await connection("Auth_User")
    .select()
    .where({ id });
  return result[0];
};
