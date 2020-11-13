import { Response, Request } from "express";
import { validateBody } from "../functions/validations";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";
import insertFollowing from "../data/insertFollowing";
import deleteFollowing from "../data/deleteFollowing";

export default async function unfollowUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { userToUnfollowId } = req.body;
    validateBody({ userToUnfollowId });

    const token: string = req.headers.authorization as string;
    const tokenData: AuthenticationData = await getTokenData(token);
    const followerId: string = tokenData.id;

    await deleteFollowing(followerId, userToUnfollowId);
    res.status(200).send({ message: "Unfollowed successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
