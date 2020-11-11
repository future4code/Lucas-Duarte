import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { validateBody } from "../services/validation";
import { getAddressInfo } from "../services/getAdressInfo";
import { Address } from "../types";
import insertAddress from "../data/insertAddress";

export default async function createUser(req: Request, res: Response) {
  try {
    const {
      name,
      nickname,
      email,
      password,
      role,
      zipcode,
      number,
      complement
    } = req.body;

    validateBody({
      name,
      nickname,
      email,
      password,
      role,
      zipcode,
      number
    });

    const id: string = generateId();
    const cypherPassword = await hash(password);
    await insertUser(id, name, nickname, email, cypherPassword, role);

    const address: Address = await getAddressInfo(zipcode);
    console.log({ address });
    const addressId: string = generateId();
    await insertAddress(addressId, address, number, id);

    const token: string = generateToken({
      id,
      role
    });

    res.status(201).send({
      message: "Usuário criado!",
      token
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    });
  }
}
