import BaseDataBase from "./BaseDataBase";
import { User } from "../models/User";

class UserDataBase extends BaseDataBase {
  private static userTable: string = "labook_users";
  private static friendsTable: string = "labook_friends";

  public async createUser(user: User): Promise<void> {
    try {
      await this.connection(UserDataBase.userTable).insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword()
      });
    } catch (error) {
      throw new Error("Database error:" + error);
    }
  }

  public async getUserByEmail(selectedEmail: string): Promise<User> {
    try {
      const result: any[] = await this.connection(UserDataBase.userTable)
        .select()
        .where({ email: selectedEmail });

      if (!result[0]) {
        throw new Error("User not found");
      }

      return new User(
        result[0].id,
        result[0].name,
        result[0].email,
        result[0].password
      );
    } catch (error) {
      throw new Error(error.slqMessage || error.message);
    }
  }

  public async getUserById(selectedId: string): Promise<User> {
    try {
      const result: any[] = await this.connection(UserDataBase.userTable)
        .select()
        .where({ id: selectedId });

      if (!result[0]) {
        throw new Error("User not found");
      }

      return new User(
        result[0].id,
        result[0].name,
        result[0].email,
        result[0].password
      );
    } catch (error) {
      throw new Error(error.slqMessage || error.message);
    }
  }

  public async addFriend(userId: string, friendId: string): Promise<void> {
    try {
      await this.connection(UserDataBase.friendsTable).insert({
        user_id: userId,
        user_friended_id: friendId
      });
    } catch (error) {
      throw new Error("Database error:" + error);
    }
  }

  public async checkIfIsFriend(userId: string, friendId: string): Promise<any> {
    try {
      const result: any[] = await this.connection(UserDataBase.friendsTable)
        .select()
        .where({ user_id: userId, user_friended_id: friendId })
        .orWhere({ user_id: friendId, user_friended_id: userId });
      return result[0];
    } catch (error) {
      throw new Error("Database error" + error);
    }
  }

  public async removeFriend(userId: string, friendId: string): Promise<void> {
    try {
      await this.connection(UserDataBase.friendsTable)
        .del()
        .where({ user_id: userId, user_friended_id: friendId })
        .orWhere({ user_id: friendId, user_friended_id: userId });
    } catch (error) {
      throw new Error("Database error" + error);
    }
  }
}

export default new UserDataBase();
