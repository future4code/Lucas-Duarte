import express from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";

import { getAllUsers } from "./endpoints/user/getAllUsers";
import { createUser } from "./endpoints/user/createUser";
import { getUserById } from "./endpoints/user/getUserById";
import { editUser } from "./endpoints/user/editUser";

import { createTask } from "./endpoints/task/createTask";
import { getTaskById } from "./endpoints/task/getTaskById";

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
app.use(cors());

// Endpoints:
app.get("/user/all", getAllUsers);
app.get("/user/:id", getUserById);
app.post("/user/edit/:id", editUser);
app.put("/user", createUser);

app.get("/task/:id", getTaskById);
app.put("/task", createTask);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
