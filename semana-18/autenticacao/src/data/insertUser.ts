import { connection } from "..";
import { User } from "../type";

export const insertUser = async (user: User): Promise<void> => {
  const { id, email, password } = user;
  await connection
    .insert({
      id,
      email,
      password
    })
    .into("Auth_User");
};
