import { Request, Response } from "express";
import { User } from "../../types";
import { selectAllUsers } from "../../data/user/selectUsers";

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users: User[] = await selectAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.send(error.message);
  }
}
