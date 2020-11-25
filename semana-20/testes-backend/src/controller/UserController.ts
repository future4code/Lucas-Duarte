import { Request, Response } from "express";
import userBusiness, { UserBusiness } from "../business/UserBusiness";
import { stringToUserRole, UserRole } from "../model/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public async signup(req: Request, res: Response) {
    try {
      const { name, role, email, password } = req.body;
      const result = await this.userBusiness.signup(
        name,
        email,
        password,
        role
      );
      res.status(200).send(result);
    } catch (error) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await this.userBusiness.login(email, password);
      res.status(200).send(result);
    } catch (error) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await this.userBusiness.getUserById(id);
      res.status(200).send(result);
    } catch (error) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }

  public async getAllUsers(req: Request, res: Response) {
    try {
      const role = req.headers.authorization as UserRole;
      const result = await this.userBusiness.getAllUsers(role);
      res.status(200).send(result);
    } catch (error) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }
}

export default new UserController(userBusiness);
