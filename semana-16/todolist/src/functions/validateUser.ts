import { User } from "../types";
import { selectAllUsers } from "../data/user/selectUsers";

export async function checkIfUserEmailExists(email: string): Promise<void> {
  const allUsers: User[] = await selectAllUsers();

  const userEmailExists: User | undefined = allUsers.find(
    user => user.email === email
  );

  if (userEmailExists) {
    throw new Error("Email already registered");
  }
}

export async function checkIfUserNicknameExists(
  nickname: string
): Promise<void> {
  const allUsers: User[] = await selectAllUsers();

  const userNicknameExists: User | undefined = allUsers.find(
    user => user.nickname === nickname
  );

  if (userNicknameExists) {
    throw new Error("Nickname already registered");
  }
}

export async function checkForUserId(id: string): Promise<void> {
  const allUsers: User[] = await selectAllUsers();

  const userIdExists: User | undefined = allUsers.find(
    user => user.id === Number(id)
  );

  if (!userIdExists) {
    throw new Error("User ID not found");
  }
}
