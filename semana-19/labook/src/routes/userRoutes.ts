import express from "express";
import UserController from "../controller/UserController";

const userRouter = express.Router();

userRouter.post("/signup", UserController.signUp);
userRouter.post("/login", UserController.login);
userRouter.post("/friend/add", UserController.addFriend);
userRouter.delete("/friend/remove", UserController.removeFriend);

export default userRouter;
