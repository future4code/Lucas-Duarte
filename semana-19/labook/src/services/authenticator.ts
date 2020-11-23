import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../models/User";

function generateToken(payload: AuthenticationData): string {
  return jwt.sign(payload, process.env.JWT_KEY as string, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
}

function getTokenData(token: string): AuthenticationData {
  const result: any = jwt.verify(token, process.env.JWT_KEY as string);
  return { id: result.id };
}

export { generateToken, getTokenData };
