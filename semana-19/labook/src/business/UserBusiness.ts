import {
  LoginInput,
  User,
  SignUpInput,
  AuthenticationData
} from "../models/User";
import UserDataBase from "../data/UserDataBase";
import { generateToken, getTokenData } from "../services/authenticator";
import hashManager from "../services/hashManager";
import generateId from "../services/idGenerator";
import { validateBody } from "../utils/validations";

class UserBusiness {
  public async signUp(input: SignUpInput): Promise<string> {
    try {
      validateBody(input);

      const cypherPassword: string = await hashManager.hash(input.password);
      const id: string = generateId();

      const newUser: User = new User(
        id,
        input.name,
        input.email,
        cypherPassword
      );

      await UserDataBase.createUser(newUser);

      const token: string = generateToken({ id });

      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async login(input: LoginInput): Promise<string> {
    try {
      validateBody(input);

      const user: User = await UserDataBase.getUserByEmail(input.email);

      await user.passwordIsCorrect(input.password);

      const token: string = await generateToken({ id: user.getId() });

      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async addFriend(token: string, friendId: string): Promise<void> {
    try {
      validateBody({ friendId });
      const tokenData: AuthenticationData = getTokenData(token);
      const userId: string = tokenData.id;

      await UserDataBase.getUserById(friendId);
      await UserDataBase.getUserById(userId);

      const areFriendsAlready = await UserDataBase.checkIfIsFriend(
        userId,
        friendId
      );

      if (areFriendsAlready) {
        throw new Error("They are already friends");
      }

      await UserDataBase.addFriend(userId, friendId);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async removeFriend(token: string, friendId: string): Promise<void> {
    try {
      validateBody({ friendId });
      const tokenData: AuthenticationData = getTokenData(token);
      const userId: string = tokenData.id;

      await UserDataBase.getUserById(friendId);
      await UserDataBase.getUserById(userId);

      const areFriends = await UserDataBase.checkIfIsFriend(userId, friendId);

      if (!areFriends) {
        throw new Error("Users are not friends");
      }

      await UserDataBase.removeFriend(userId, friendId);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new UserBusiness();
