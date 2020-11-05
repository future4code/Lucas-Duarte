import { Request, Response } from "express";
import { deleteRelationWhereUserId } from "../../data/userTaskRelation/deleteRelation";
import { checkForUserId } from "../../functions/validateUser";
import { deleteUserWhereId } from "../../data/user/deleteUser";

export async function deleteUser(req: Request, res: Response): Promise<void> {
  try {
    const userId: string = String(req.params.id);
    await checkForUserId(userId);
    await deleteRelationWhereUserId(userId);
    await deleteUserWhereId(userId);
    res.status(201).send("User deleted!");
  } catch (error) {
    res.send(error.message);
  }
}
