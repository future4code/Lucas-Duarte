import { Request, Response } from "express";

import { selectAvgSalaryByGender } from "../data/selectAvg";
import { ACTOR_GENDER } from "../types";

export const getAverageSalary = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const gender: string = String(req.params.gender);

    if (!(gender.toUpperCase() in ACTOR_GENDER)) {
      throw new Error("Gênero deve ser MALE ou FEMALE");
    }

    const response: number = await selectAvgSalaryByGender(gender);

    res.status(201).send(response);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
