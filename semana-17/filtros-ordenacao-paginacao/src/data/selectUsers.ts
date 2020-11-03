import { connection } from "..";
import { inputData, User } from "../types/User";

export async function selectAllUsers(): Promise<User[]> {
  const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `);

  return result[0];
}

export async function filterByName(name: string): Promise<any> {
  const result = await connection.raw(` SELECT * FROM aula48_exercicio
  WHERE name LIKE "%${name}%"`);

  return result[0];
}

export async function filterByType(type: string): Promise<any> {
  const result = await connection.raw(` SELECT * FROM aula48_exercicio
  WHERE type LIKE "%${type}%"`);

  return result[0];
}

export async function filterAndOrderBy(data: inputData): Promise<User[]> {
  const resultPerPage: number = 5;
  const offset: number = resultPerPage * (data.page - 1);

  const result = await connection.raw(`
    SELECT * FROM aula48_exercicio
    WHERE name LIKE "%${data.name}%" AND type LIKE "%${data.type}%"
    ORDER BY ${data.orderBy} ${data.orderType}
    LIMIT ${resultPerPage}
    OFFSET ${offset}
    `);

  return result[0];
}
