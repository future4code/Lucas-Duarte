import { connection } from "..";
import { User } from "../types";

export default async function insertUser(user: User): Promise<void> {
  const { id, name, email, password } = user;
  await connection("cookenu_users").insert({ id, name, email, password });
}
