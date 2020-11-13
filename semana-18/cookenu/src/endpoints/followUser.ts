import { Response, Request } from "express";
import { validateBody } from "../functions/validations";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";
import insertFollowing from "../data/insertFollowing";

export default async function followUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { userToFollowId } = req.body;
    validateBody({ userToFollowId });

    const token: string = req.headers.authorization as string;
    const tokenData: AuthenticationData = await getTokenData(token);
    const followerId: string = tokenData.id;

    await insertFollowing(followerId, userToFollowId);
    res.status(200).send({ message: "Followed successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
