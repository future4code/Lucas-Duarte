import { AddressInfo } from "net";
import express, { Express } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";

import signUp from "./endpoints/signUp";
import login from "./endpoints/login";
import getUserByToken from "./endpoints/getUserByToken";
import getUserById from "./endpoints/getUserById";
import createRecipe from "./endpoints/createRecipe";
import getRecipeById from "./endpoints/getRecipeById";
import followUser from "./endpoints/followUser";
import unfollowUser from "./endpoints/unfollowUser";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/user/profile", getUserByToken);

app.get("/user/:id", getUserById);
app.post("/signup", signUp);
app.post("/login", login);

app.get("/recipe/:id", getRecipeById);
app.post("/recipe", createRecipe);

app.post("/user/follow", followUser);
app.post("/user/unfollow", unfollowUser);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
