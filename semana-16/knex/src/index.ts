import express, { Express } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";

import { AddressInfo } from "net";
import { getActorById } from "./endpoints/getActorById";
import { getActorByGender } from "./endpoints/getActorByGender";
import { createActor } from "./endpoints/createActor";
import { getAllActors } from "./endpoints/getAllActors";
import { updateSalary } from "./endpoints/updateSalary";
import { deleteActor } from "./endpoints/deleteActor";
import { getAverageSalary } from "./endpoints/getAverage";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/actors", getAllActors);
app.get("/actor", getActorByGender);
app.get("/actor/", getActorById);
app.get("/actor/:id", getActorById);
app.get("/actor/avg/:gender", getAverageSalary);
app.put("/actor/new", createActor);
app.put("/actor/update/:id", updateSalary);
app.delete("/actor/delete/:id", deleteActor);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
