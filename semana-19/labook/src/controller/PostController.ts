import { Request, Response } from "express";
import { Post, CreatePostInput } from "../models/Post";
import PostBusiness from "../business/PostBusiness";

class PostController {
  async createPost(req: Request, res: Response) {
    try {
      const token: string = req.headers.authorization as string;

      const { photo, description, type } = req.body;

      const input: CreatePostInput = {
        photo,
        description,
        type
      };

      await PostBusiness.createPost(input, token);

      res.status(201).send({ message: "Post created" });
    } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  }

  async getPostById(req: Request, res: Response): Promise<void> {
    try {
      const token: string = req.headers.authorization as string;
      const { id } = req.params;
      const post: Post = await PostBusiness.getPostById(id, token);
      res.status(201).send({ post });
    } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  }

  async getFeed(req: Request, res: Response): Promise<void> {
    try {
      const token: string = req.headers.authorization as string;
      const feed = await PostBusiness.getFeed(token);
      res.status(201).send({ feed });
    } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  }
}

export default new PostController();
