import { Request, Response } from "express";
import { SignUpInput, LoginInput } from "../models/User";
import UserBusiness from "../business/UserBusiness";

class UserController {
  async signUp(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const input: SignUpInput = {
        name,
        email,
        password
      };

      const token: string = await UserBusiness.signUp(input);

      res.status(201).send({ message: "User created", token });
    } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const input: LoginInput = {
        email,
        password
      };

      const token: string = await UserBusiness.login(input);

      res.status(201).send({ message: "User logged", token });
    } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  }

  async addFriend(req: Request, res: Response) {
    try {
      const token: string = req.headers.authorization as string;
      const friendId = req.body.friendId;

      await UserBusiness.addFriend(token, friendId);
      res.status(200).send({ message: "Friend added!" });
    } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  }

  async removeFriend(req: Request, res: Response) {
    try {
      const token: string = req.headers.authorization as string;
      const friendId = req.body.friendId;
      await UserBusiness.removeFriend(token, friendId);
      res.status(200).send({ message: "Friend removed!" });
    } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  }
}

export default new UserController();
