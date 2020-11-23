import BaseDataBase from "./BaseDataBase";
import { Post } from "../models/Post";

class PostDataBase extends BaseDataBase {
  private static tableName: string = "labook_posts";

  public async insertPost(post: Post) {
    try {
      await this.connection(PostDataBase.tableName).insert({
        id: post.getId(),
        photo: post.getPhoto(),
        description: post.getDescription(),
        type: post.getType(),
        author_id: post.getAuthorId()
      });
    } catch (error) {
      throw new Error("Database error:" + error);
    }
  }

  public async getPostById(id: string): Promise<Post> {
    try {
      const result: Post[] = await this.connection(PostDataBase.tableName)
        .select()
        .where({ id });

      if (!result[0]) {
        throw new Error("Post not found");
      }

      const post: Post = result[0];

      return post;
    } catch (error) {
      throw new Error("Database error:" + error);
    }
  }

  public async getFeed(id: string): Promise<void> {
    try {
      const result = await this.connection
        .raw(`SELECT post.id, post.photo, post.description, post.type, post.created_at, post.author_id
      FROM labook_posts post
      LEFT JOIN labook_users users
      ON  post.author_id = users.id
      JOIN labook_friends friendsTable
      ON friendsTable.user_friended_id = users.id
      WHERE friendsTable.user_id = "${id}"
      UNION
      SELECT post.id, post.photo, post.description, post.type, post.created_at, post.author_id
      FROM labook_posts post
      LEFT JOIN labook_users user
      ON  post.author_id = user.id
      JOIN labook_friends friends
      ON friends.user_id = user.id
      WHERE friends.user_friended_id = "${id}"
      ORDER BY created_at DESC
      ;`);

      return result[0];
    } catch (error) {
      throw new Error("Database error:" + error);
    }
  }
}

export default new PostDataBase();
