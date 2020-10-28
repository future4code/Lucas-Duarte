import { connection } from "../index";

export const deleteFromActor = async (id: string): Promise<void> => {
  await connection()
    .where("id", `${id}`)
    .del()
    .into("Actor");
};
