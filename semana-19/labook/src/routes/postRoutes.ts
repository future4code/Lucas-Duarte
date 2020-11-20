import express from "express";
import PostController from "../controller/PostController";

const postRouter = express.Router();

postRouter.post("/create", PostController.createPost);
postRouter.get("/feed", PostController.getFeed);
postRouter.get("/:id", PostController.getPostById);

export default postRouter;
