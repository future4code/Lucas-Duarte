import { Request, Response } from "express";
import { validateBody } from "../functions/validations";
import { AuthenticationData, User, Recipe } from "../types";
import { getTokenData } from "../services/authenticator";
import { selectUserWhereIdIs } from "../data/selectUser";
import insertRecipe from "../data/insertRecipe";
import { generateId } from "../services/idGenerator";

export default async function createRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    console.log(req.body);
    const { title, description } = req.body;
    validateBody({ title, description });

    const token: string = req.headers.authorization as string;
    const tokenData: AuthenticationData = await getTokenData(token);

    const user: User = await selectUserWhereIdIs(tokenData.id);

    if (!user) {
      throw new Error("User not found");
    }

    const id: string = generateId();
    const creationDate = new Date();

    const recipe: Recipe = {
      id,
      title,
      description,
      creationDate,
      userId: user.id
    };

    await insertRecipe(recipe);

    res.status(200).send({ message: "Recipe created" });
  } catch (error) {
    if (error.message.includes("jwt must be provided")) {
      res.send("Send token in header");
    }
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
