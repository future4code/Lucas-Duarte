import { connection } from "..";
import { Address } from "../types";

export default async function insertAddress(
  id: string,
  address: Address,
  number: string,
  userId: string,
  complement?: string
) {
  const { street, neighborhood, city, state } = address;

  await connection
    .insert({
      id,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      userId
    })
    .into("to_do_list_address");
}
