import { connection } from "..";
import { Recipe } from "../types";

export async function selectAllRecipes(): Promise<Recipe[]> {
  try {
    const recipes: any[] = await connection("cookenu_recipes").select();

    return recipes[0];
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}

export async function selectRecipeWhereIdIs(recipeId: string): Promise<Recipe> {
  try {
    const recipe: any[] = await connection("cookenu_recipes")
      .select()
      .where("id", recipeId);

    const { id, title, description, creation_date, user_id } = recipe[0];

    return {
      id,
      title,
      description,
      creationDate: creation_date,
      userId: user_id
    };
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}
