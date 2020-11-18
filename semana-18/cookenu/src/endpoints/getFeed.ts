// import { Request, Response } from "express";
// import { AuthenticationData, Recipe } from "../types";
// import { getTokenData } from "../services/authenticator";
// import { selectRecipeWhereIdIs } from "../data/selectRecipe";
// import { convertDateFormatToUser } from "../functions/date";

// export default async function getFeed(
//   req: Request,
//   res: Response
// ): Promise<void> {
//   try {
//     const token: string = req.headers.authorization as string;
//     const tokenData: AuthenticationData = await getTokenData(token);

//     const feed: Recipe[] = await selectRecipeWhereIdIs(req.params.id);

//     res.status(200).send({ message: "" });
//   } catch (error) {
//     if (error.message.includes("jwt must be provided")) {
//       res.send("Send token in header");
//     }
//     res.status(400).send({ message: error.message || error.sqlMessage });
//   }
// }
