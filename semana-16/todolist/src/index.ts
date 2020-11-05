import { AddressInfo } from "net";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import knex from "knex";

import { createUser } from "./endpoints/user/createUser";
import { editUser } from "./endpoints/user/editUser";
import { getAllUsers } from "./endpoints/user/getAllUsers";
import { getUserById } from "./endpoints/user/getUserById";
import { searchUser } from "./endpoints/user/searchUser";
import { deleteUser } from "./endpoints/user/deleteUser";

import { alterTaskStatus } from "./endpoints/task/alterTaskStatus";
import { assignTask } from "./endpoints/task/assignTask";
import { createTask } from "./endpoints/task/createTask";
import { getResponsibleUsersForTask } from "./endpoints/task/getResponsibleUsersForTask";
import { getTaskById } from "./endpoints/task/getTaskById";
import { getTasksByUserId } from "./endpoints/task/getTasksByUserId";
import { getTasksByStatus } from "./endpoints/task/getTasksByStatus";
import { getDelayedTasks } from "./endpoints/task/getDelayedTasks";
import { deleteResponsibleUserFromTask } from "./endpoints/task/deleteResponsibleUserFromTask";
import { searchTasks } from "./endpoints/task/searchTasks";
import { deleteTask } from "./endpoints/task/deleteTask";

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

// Endpoints de usuário:
app.get("/user", searchUser);
app.get("/user/all", getAllUsers);
app.get("/user/:id", getUserById);
app.post("/user/edit/:id", editUser);
app.put("/user", createUser);
app.delete("/user/:id", deleteUser);
//Endpoints de tarefas:
app.get("/task", getTasksByUserId);
app.get("/task/search", searchTasks);
app.get("/task/status", getTasksByStatus);
app.get("/task/delayed", getDelayedTasks);
app.get("/task/:id", getTaskById);
app.put("/task", createTask);
app.post("/task/status/:id", alterTaskStatus);
app.delete("/task/:id", deleteTask);
//Endpoints de usuários responsáveis por tarefas:
app.get("/task/:id/responsible", getResponsibleUsersForTask);
app.post("/task/responsible", assignTask);
app.delete(
  "/task/:taskId/responsible/:responsibleUserId",
  deleteResponsibleUserFromTask
);

// Servidor:
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
