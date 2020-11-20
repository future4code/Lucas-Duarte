import knex from "knex";
import Knex from "knex";
import dotenv from "dotenv";

dotenv.config();

class BaseDataBase {
  protected connection: Knex = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: 3306,
      database: process.env.DB_NAME
    }
  });
}

export default BaseDataBase;
