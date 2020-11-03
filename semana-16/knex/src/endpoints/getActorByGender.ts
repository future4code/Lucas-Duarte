import { Request, Response } from "express";
import { selectActorByGender } from "../data/selectActorBy";
import { ACTOR_GENDER } from "../types";

export const getActorByGender = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const gender: any = req.query.gender;

    if (!gender) {
      throw new Error("Envie um gênero na query: ?gender=");
    }

    if (!(gender.toUpperCase() in ACTOR_GENDER)) {
      throw new Error("Gênero deve ser male ou female");
    }

    const response = await selectActorByGender(String(gender));

    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
