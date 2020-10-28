import { connection } from "../index";

export const insertActor = async (
  id: string,
  name: string,
  salary: number,
  birth_date: Date,
  gender: string
): Promise<void> => {
  await connection.into("Actor").insert({
    id,
    name,
    salary,
    birth_date,
    gender
  });
};
