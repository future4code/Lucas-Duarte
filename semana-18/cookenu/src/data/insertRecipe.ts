import { connection } from "..";
import { Recipe } from "../types";

export default async function insertRecipe(recipe: Recipe): Promise<void> {
  const { id, title, description, creationDate, userId } = recipe;

  await connection("cookenu_recipes").insert({
    id,
    title,
    description,
    creation_date: creationDate,
    user_id: userId
  });
}
