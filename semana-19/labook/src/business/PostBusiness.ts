import { CreatePostInput, Post } from "../models/Post";
import { AuthenticationData } from "../models/User";
import PostDataBase from "../data/PostDataBase";

import generateId from "../services/idGenerator";
import { getTokenData } from "../services/authenticator";
import { validateBody } from "../utils/validations";

class PostBusiness {
  async createPost(input: CreatePostInput, token: string): Promise<void> {
    try {
      validateBody({
        photo: input.photo,
        description: input.description,
        type: input.type
      });

      const id = generateId();
      const tokenData: AuthenticationData = getTokenData(token);
      const authorId: string = tokenData.id;

      const post: Post = new Post(
        id,
        input.photo,
        input.description,
        input.type,
        authorId
      );

      await PostDataBase.insertPost(post);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPostById(id: string, token: string): Promise<Post> {
    try {
      const tokenData: AuthenticationData = getTokenData(token);
      const post: Post = await PostDataBase.getPostById(id);
      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getFeed(token: string): Promise<any> {
    try {
      const tokenData: AuthenticationData = getTokenData(token);
      const id: string = tokenData.id;
      const feed = await PostDataBase.getFeed(id);
      return feed;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new PostBusiness();
