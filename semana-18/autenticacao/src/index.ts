import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

import createUser from "./endpoints/createUser";
import getUserByEmail from "./endpoints/getUserByEmail";
import login from "./endpoints/login";
import getUserById from "./endpoints/getUserById";

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

const app = express();
app.use(express.json());

app.get("/user", getUserByEmail);
app.get("/user/profile", getUserById);
app.post("/user/signup", createUser);
app.put("/user/login", login);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
