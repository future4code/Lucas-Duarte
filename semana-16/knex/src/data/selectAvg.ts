import { connection } from "../index";
import { ACTOR_GENDER } from "../types";

export async function selectAvgSalaryByGender(gender: string): Promise<any> {
  try {
    const result = await connection()
      .into("Actor")
      .avg({ AverageSalary: "Salary" })
      .where("gender", `${gender}`);

    return result[0];
  } catch (error) {
    console.log(error);
    return NaN;
  }
}
