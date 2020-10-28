import { connection } from "../index";

export const updateActorSalary = async (
  id: string,
  salary: number
): Promise<void> => {
  try {
    await connection()
      .where("id", `${id}`)
      .update({
        salary
      })
      .into("Actor");

    console.log("Sucesso!");
  } catch (error) {
    console.log(error);
  }
};
