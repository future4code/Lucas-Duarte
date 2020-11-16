import { generateId } from "../services/idGenerator";
import { hash } from "../services/hashManager";
import insertUser from "../data/insertUser";
import { signUpInput } from "../types/types";
import { generateToken } from "../services/authenticator";

export default async function createUser(input: signUpInput): Promise<string> {
  try {
    if (!input.name || !input.email || !input.password || !input.role) {
      throw new Error(
        'Preencha os campos "name","nickname", "email" e "password"'
      );
    }

    if (input.password.length < 6) {
      throw new Error("Password must have at least 6 characters");
    }

    const cypherPassword = await hash(input.password);
    const id: string = generateId();
    console.log({ cypherPassword, id });

    await insertUser(id, input.name, input.email, cypherPassword, input.role);

    const role = input.role;

    const token: string = await generateToken({ id, role });

    return token;
  } catch (error) {
    if (error.code === 1048) {
      throw new Error("Este usuário já existe!");
    }
    return "";
  }
}
