import { Sequelize } from "sequelize";
import { config } from "../config/config";
import { log } from "../config/logger";

let host: string, dbname: string, username: string, password: string;

if (config.env === "development") {
  host = config.db.host;
  dbname = config.db.name;
  username = config.db.user;
  password = config.db.password;
} else {
  host = config.proddb.host;
  dbname = config.proddb.name;
  username = config.proddb.user;
  password = config.proddb.password;
}

export const sequelizeDB = new Sequelize(dbname, username, password, {
  host: host,
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 60000,
  },
  logging: true,
  pool: { max: 15, min: 5, idle: 20000, evict: 15000, acquire: 30000 },
});
