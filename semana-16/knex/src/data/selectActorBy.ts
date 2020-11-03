import { connection } from "../index";
import { Actor } from "../types";

export const selectActorById = async (id: string): Promise<Actor[]> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

  return result[0];
};

export const selectActorByGender = async (gender: string): Promise<any> => {
  const query = await connection.raw(
    `SELECT COUNT(*) as ${gender} FROM Actor WHERE gender = "${gender}"
    `
  );

  const result = query[0];
  const total = result[0];

  return total;
};
