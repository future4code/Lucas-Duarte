import * as bcrypt from "bcryptjs";

export async function hashPassword(
  unencryptedPassword: string
): Promise<string> {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  return bcrypt.hash(unencryptedPassword, salt);
}

export async function comparePassword(
  plainText: string,
  cypherText: string
): Promise<boolean> {
  return bcrypt.compare(plainText, cypherText);
}
